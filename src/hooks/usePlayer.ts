import { useState } from "react";
import {
	TETROMINOS,
	rotateTetromino,
	generateRandTetramino,
	generateRandQueue,
} from "@/utils/tetrominos";
import { checkCollision } from "@/utils/gameHelpers";
import { STAGE_WIDTH } from "@/utils/constants";
import { CoordinateType, PlayerType, StageType } from "@/utils/types";

export const usePlayer = () => {
	const [player, setPlayer] = useState<PlayerType>({
		pos: { x: 0, y: 0 },
		tetromino: TETROMINOS["0"],
		queue: generateRandQueue().concat(generateRandQueue()),
	});

	const updatePlayerPos = (move: CoordinateType) => {
		setPlayer({
			...player,
			pos: { x: (player.pos.x += move.x), y: (player.pos.y += move.y) },
		});
	};

	const resetplayer = () => {
		const next = player.queue.shift();

		let tetromino;
		if (next) tetromino = TETROMINOS[next];
		else tetromino = generateRandTetramino();

		setPlayer({
			pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
			tetromino: tetromino,
			queue:
				player.queue.length > 7
					? player.queue
					: player.queue.concat(generateRandQueue()),
		});
	};

	const playerRotate = (stage: StageType, dir: number) => {
		const clonedPlayer: PlayerType = JSON.parse(JSON.stringify(player));
		clonedPlayer.tetromino = rotateTetromino(clonedPlayer.tetromino, dir);

		const pos = clonedPlayer.pos.x;
		let offset = 1;
		while (checkCollision(stage, clonedPlayer, { x: 0, y: 0 })) {
			clonedPlayer.pos.x += offset;
			offset = -(offset + (offset > 0 ? 1 : -1));
			if (offset > clonedPlayer.tetromino[0].length) {
				rotateTetromino(clonedPlayer.tetromino, -dir);
				clonedPlayer.pos.x = pos;
				return;
			}
		}

		setPlayer(clonedPlayer);
	};

	return [player, updatePlayerPos, resetplayer, playerRotate] as const;
};

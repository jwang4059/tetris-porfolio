import { useState, useCallback } from "react";
import {
	TETROMINOS,
	rotateTetromino,
	generateRandTetramino,
} from "@/utils/tetrominos";
import { checkCollision } from "@/utils/gameHelpers";
import { STAGE_WIDTH } from "@/utils/constants";
import { CoordinateType, PlayerType, StageType } from "@/utils/types";

export const usePlayer = () => {
	const [player, setPlayer] = useState<PlayerType>({
		pos: { x: 0, y: 0 },
		tetromino: TETROMINOS[0],
		collided: false,
	});

	// Remove collided and check collision logic before updating
	const updatePlayerPos = ({
		move,
		collided,
	}: {
		move: CoordinateType;
		collided: boolean;
	}) => {
		setPlayer({
			...player,
			pos: { x: (player.pos.x += move.x), y: (player.pos.y += move.y) },
			collided,
		});
	};

	const resetplayer = useCallback(() => {
		setPlayer({
			pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
			tetromino: generateRandTetramino(),
			collided: false,
		});
	}, []);

	const playerRotate = (stage: StageType, dir: number) => {
		// Use structuredClone for deep cloning
		const clonedPlayer: PlayerType = JSON.parse(JSON.stringify(player));
		clonedPlayer.tetromino = rotateTetromino(clonedPlayer.tetromino, dir);

		const pos = clonedPlayer.pos.x;
		let offset = 1;
		while (checkCollision(clonedPlayer, stage)) {
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

import { useState } from "react";
import {
	rotateTetromino,
	getQueue,
	getNextTetrominoType,
	TETROMINOS,
} from "@/utils/tetrominos";
import { checkCollision } from "@/utils/gameHelpers";
import { START_POS } from "@/utils/constants";
import { CoordinateType, PlayerType, StageType } from "@/utils/types";

export const usePlayer = () => {
	const [player, setPlayer] = useState<PlayerType>({
		pos: { x: 0, y: 0 },
		hasSwitch: true,
		queue: [],
	});

	const updatePlayerPos = (move: CoordinateType) => {
		setPlayer({
			...player,
			pos: { x: (player.pos.x += move.x), y: (player.pos.y += move.y) },
		});
	};

	const resetplayer = (startOver?: boolean) => {
		let { hold, queue } = player;

		if (startOver) {
			hold = undefined;
			queue = [];
		}

		queue = getQueue(queue);
		let { queue: new_queue, tetrominoType } = getNextTetrominoType(queue);

		setPlayer({
			...player,
			pos: { ...START_POS },
			tetrominoType: tetrominoType,
			tetromino: TETROMINOS[tetrominoType],
			hold: hold,
			hasSwitch: true,
			queue: new_queue,
		});
	};

	const playerRotate = (stage: StageType | undefined, dir: number) => {
		const clonedPlayer: PlayerType = JSON.parse(JSON.stringify(player));

		if (!clonedPlayer.tetromino) return;
		else clonedPlayer.tetromino = rotateTetromino(clonedPlayer.tetromino, dir);

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

	const playerHold = () => {
		if (!player.hasSwitch) return;
		if (player.hold) {
			setPlayer({
				...player,
				pos: { ...START_POS },
				tetrominoType: player.hold,
				tetromino: TETROMINOS[player.hold],
				hold: player.tetrominoType,
				hasSwitch: false,
			});
		} else {
			const { queue, tetrominoType } = getNextTetrominoType(player.queue);
			setPlayer({
				...player,
				pos: { ...START_POS },
				tetrominoType: tetrominoType,
				tetromino: TETROMINOS[tetrominoType],
				hold: player.tetrominoType,
				hasSwitch: false,
				queue: getQueue(queue),
			});
		}
	};

	return [
		player,
		updatePlayerPos,
		resetplayer,
		playerRotate,
		playerHold,
	] as const;
};

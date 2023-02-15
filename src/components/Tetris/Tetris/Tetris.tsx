import _ from "lodash";
import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import { usePlayer } from "@/hooks/usePlayer";
import { useStage } from "@/hooks/useStage";
import { createStage, mergeStage, checkCollision } from "@/utils/gameHelpers";
import styles from "./Tetris.module.scss";
import { useInterval } from "@/hooks/useInterval";
import { useGameStatus } from "@/hooks/useGameStatus";

const Tetris = () => {
	// const [dropTime, setDropTime] = useState<number | null>(null);
	// const [gameOver, setGameOver] = useState(false);
	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage] = useStage(player, resetPlayer);
	// const [score, setScore, rows, setRows, level, setLevel] =
	// 	useGameStatus(rowsCleared);

	// useInterval(() => {
	// 	drop();
	// }, dropTime);

	/**
	 * Add UseEffect here
	 * UseEffect should update stage every time there is a move (aka left,right,drop)
	 * Should update game state
	 * Dependency on player; should not update when stage updates
	 */

	useEffect(() => {
		const newStage = mergeStage(stage, player);
		if (!_.isEqual(stage, newStage)) setStage(newStage);
	}, [setStage, stage, player]);

	/**
	 * Other notes:
	 * Detect collision before move
	 * If move is valid, check if row needs to be cleared
	 * Check if possible to change sell into one value
	 * Combine move into one function instead of separate drop and left/right
	 * Level should be determined by rows cleared (score separate)
	 * Remove collided concept if possible
	 */

	/**
	 * Start game should
	 * Gameover false
	 * Create stage
	 * Create score
	 * Create player
	 * Start time
	 */

	const startGame = () => {
		setStage(createStage());
		resetPlayer();
	};

	const movePlayer = (dir: number) => {
		updatePlayerPos({ move: { x: dir, y: 0 }, collided: false });
	};

	const dropPlayer = () => {
		updatePlayerPos({ move: { x: 0, y: 1 }, collided: false });
		// if (checkCollision(player, stage)) {
		// 	updatePlayerPos({ move: { x: 0, y: -1 }, collided: true });
		// 	// merge(arena, player);
		// 	// playerReset();
		// 	// arenaSweep();
		// 	// updateScore();
		// }
		// dropCounter = 0;
	};

	const handleKeyPress = ({ key }: React.KeyboardEvent<HTMLDivElement>) => {
		if (true) {
			switch (key) {
				case "ArrowLeft":
					movePlayer(-1);
					break;
				case "ArrowRight":
					movePlayer(1);
					break;
				case "ArrowDown":
					dropPlayer();
					break;
				case "ArrowUp":
				case "x":
					playerRotate(stage, 1);
					break;
				case "z":
					playerRotate(stage, -1);
					break;
			}
		}
	};

	return (
		<div
			className={styles.wrapper}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => handleKeyPress(e)}
		>
			<div className={styles.tetris}>
				<Stage stage={stage} />
				<aside>
					{/* {gameOver ? (
						<Display text={"Game Over"} gameOver={gameOver} />
					) : (
						<div>
							<Display text={`Score: ${score}`} gameOver={gameOver} />
							<Display text={`Rows: ${rows}`} gameOver={gameOver} />
							<Display text={`Level: ${level}`} gameOver={gameOver} />
						</div>
					)} */}
					<StartButton onClick={startGame} />
				</aside>
			</div>
		</div>
	);
};

export default Tetris;

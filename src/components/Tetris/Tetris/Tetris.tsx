import React, { useState } from "react";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import { usePlayer } from "@/hooks/usePlayer";
import { useStage } from "@/hooks/useStage";
import { createStage, checkCollision } from "@/utils/gameHelpers";
import styles from "./Tetris.module.scss";
import { useInterval } from "@/hooks/useInterval";
import { useGameStatus } from "@/hooks/useGameStatus";

const Tetris = () => {
	const [dropTime, setDropTime] = useState<number | null>(null);
	const [gameOver, setGameOver] = useState(false);
	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] =
		useGameStatus(rowsCleared);

	const movePlayer = (dir: number) => {
		if (!checkCollision(player, stage, { x: dir, y: 0 }))
			updatePlayerPos({ x: dir, y: 0, collided: false });
	};

	const startGame = () => {
		setStage(createStage());
		setDropTime(1000);
		resetPlayer();
		setGameOver(false);
		setScore(0);
		setRows(0);
		setLevel(0);
	};

	const drop = () => {
		//Increase level when player has cleared 10 lines
		if (rows > (level + 1) * 10) {
			setLevel((prev) => prev + 1);
			//Also increase speed
			setDropTime(1000 / (level + 1) + 200);
		}
		if (!checkCollision(player, stage, { x: 0, y: 1 }))
			updatePlayerPos({ x: 0, y: 1, collided: false });
		else {
			if (player.pos.y < 1) {
				console.log("gameover");
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const keyUp = ({ key }: React.KeyboardEvent<HTMLDivElement>) => {
		if (!gameOver) {
			if (key === "ArrowDown") {
				setDropTime(1000 / (level + 1) + 200);
			}
		}
	};

	const dropPlayer = () => {
		setDropTime(null);
		drop();
	};

	const move = ({ key }: React.KeyboardEvent<HTMLDivElement>) => {
		if (!gameOver) {
			if (key === "ArrowLeft") {
				movePlayer(-1);
			} else if (key === "ArrowRight") {
				movePlayer(1);
			} else if (key === "ArrowDown") {
				dropPlayer();
			} else if (key === "ArrowUp") {
				playerRotate(stage, 1);
			}
		}
	};

	useInterval(() => {
		drop();
	}, dropTime);

	return (
		<div
			className={styles.wrapper}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => move(e)}
			onKeyUp={keyUp}
		>
			<div className={styles.tetris}>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Display text={"Game Over"} gameOver={gameOver} />
					) : (
						<div>
							<Display text={`Score: ${score}`} gameOver={gameOver} />
							<Display text={`Rows: ${rows}`} gameOver={gameOver} />
							<Display text={`Level: ${level}`} gameOver={gameOver} />
						</div>
					)}
					<StartButton onClick={startGame} />
				</aside>
			</div>
		</div>
	);
};

export default Tetris;

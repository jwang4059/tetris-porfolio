import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useInterval, usePlayer } from "@/hooks/index";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import {
	checkCollision,
	createStage,
	mergeStage,
	mergeAndSweepStage,
} from "@/utils/gameHelpers";
import { linePoints } from "@/utils/constants";
import { StageType } from "@/utils/types";
import styles from "./Tetris.module.scss";

const Tetris = () => {
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [gameStatus, setGameStatus] = useState<{
		score: number;
		rows: number;
		level: number;
		dropTime: number | null;
	}>({ score: 0, rows: 0, level: 0, dropTime: null });
	const [stage, setStage] = useState<StageType>(createStage());
	const [stageView, setStageView] = useState<StageType | null>(null);
	const [player, updatePlayerPos, resetPlayer, playerRotate, playerHold] =
		usePlayer();

	useInterval(() => {
		dropPlayer();
	}, gameStatus.dropTime);

	useEffect(() => {
		console.log(player.pos);
		const newStageView = mergeStage(stage, player);
		if (!_.isEqual(stageView, newStageView)) setStageView(newStageView);
	}, [setStageView, stageView, stage, player]);

	const handleStart = () => {
		setGameOver(false);
		setGameStatus({ score: 0, rows: 0, level: 1, dropTime: 1000 });
		setStage(createStage());
		resetPlayer();
	};

	const movePlayer = (offset: number) => {
		if (!checkCollision(stage, player, { x: offset, y: 0 })) {
			updatePlayerPos({ x: offset, y: 0 });
		}
	};

	const dropPlayer = () => {
		if (!checkCollision(stage, player, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1 });
		} else {
			if (player.pos.y < 1) {
				setGameOver(true);
				console.log("gameover");
			} else {
				const result = mergeAndSweepStage(stage, player);
				const totalRows = gameStatus.rows + result.rowCount;
				const currLevel = Math.floor(totalRows / 10) + 1;
				const dropTime = 1000 / currLevel + 200;

				setGameStatus({
					score:
						gameStatus.score +
						(result.rowCount >= 1
							? linePoints[result.rowCount - 1] * gameStatus.level
							: 0),
					rows: totalRows,
					level: currLevel,
					dropTime,
				});
				setStage(result.newStage);
				resetPlayer();
			}
		}
	};

	const handleKeyPress = ({ key }: React.KeyboardEvent<HTMLDivElement>) => {
		if (!gameOver) {
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
				case "Shift":
					playerHold();
					break;
				case "p": // Needs work
					setGameStatus({ ...gameStatus, dropTime: null });
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
				<Stage stage={stageView} />
				<aside>
					{gameOver ? (
						<Display text={"Game Over"} gameOver={gameOver} />
					) : (
						<div>
							<Display
								text={`Score: ${gameStatus.score}`}
								gameOver={gameOver}
							/>
							<Display text={`Rows: ${gameStatus.rows}`} gameOver={gameOver} />
							<Display
								text={`Level: ${gameStatus.level}`}
								gameOver={gameOver}
							/>
						</div>
					)}
					<StartButton onClick={handleStart} />
				</aside>
			</div>
		</div>
	);
};

export default Tetris;

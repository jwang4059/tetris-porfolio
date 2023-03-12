import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useInterval, usePlayer } from "@/hooks/index";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import {
	checkCollision,
	getHardDropPos,
	createMatrix,
	mergeMatrix,
	mergeAndSweepStage,
} from "@/utils/gameHelpers";
import { linePoints, STAGE_HEIGHT, STAGE_WIDTH } from "@/utils/constants";
import { CoordinateType, StageType } from "@/utils/types";
import styles from "./Tetris.module.scss";
import { getTetrominoPreview, simplifyTetromino } from "@/utils/tetrominos";
import Hold from "../Hold/Hold";
import Next from "../Next/Next";

const Tetris = () => {
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [gameStatus, setGameStatus] = useState<{
		score: number;
		rows: number;
		level: number;
		dropTime: number | null;
	}>({ score: 0, rows: 0, level: 0, dropTime: null });
	const [stage, setStage] = useState<StageType | undefined>(
		createMatrix(STAGE_HEIGHT, STAGE_WIDTH)
	);
	const [stageView, setStageView] = useState<StageType | undefined>(stage);
	const [player, updatePlayerPos, resetPlayer, playerRotate, playerHold] =
		usePlayer();

	useInterval(() => {
		dropPlayer();
	}, gameStatus.dropTime);

	useEffect(() => {
		if (player.tetromino) {
			const { x, y } = getHardDropPos(stage, player);
			let newStageView = mergeMatrix(
				stage,
				getTetrominoPreview(player.tetromino),
				{
					x: player.pos.x + x,
					y: player.pos.y + y,
				}
			);
			newStageView = mergeMatrix(
				newStageView,
				simplifyTetromino(player.tetromino),
				player.pos
			);
			if (newStageView && !_.isEqual(stageView, newStageView))
				setStageView(newStageView);
		}
	}, [setStageView, stageView, stage, player]);

	const handleStart = () => {
		setGameOver(false);
		setGameStatus({ score: 0, rows: 0, level: 1, dropTime: 1000 });
		setStage(createMatrix(STAGE_HEIGHT, STAGE_WIDTH));
		resetPlayer(true);
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
				const { newStage, rowCount } = mergeAndSweepStage(stage, player);
				const totalRows = gameStatus.rows + rowCount;
				const currLevel = Math.floor(totalRows / 10) + 1;
				const dropTime = 1000 / currLevel + 200;

				setGameStatus({
					score:
						gameStatus.score +
						(rowCount >= 1 ? linePoints[rowCount - 1] * gameStatus.level : 0),
					rows: totalRows,
					level: currLevel,
					dropTime,
				});
				setStage(newStage);
				resetPlayer();
			}
		}
	};

	const hardDropPlayer = () => {
		updatePlayerPos(getHardDropPos(stage, player));
		dropPlayer();
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		e.preventDefault();

		const { key } = e;
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
				case " ":
					hardDropPlayer();
					break;
				case "p": // Needs work
					setGameStatus({ ...gameStatus, dropTime: null });
					break;
			}
		}
	};

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.tetris}
				tabIndex={0}
				onKeyDown={(e) => handleKeyPress(e)}
			>
				<Hold tetrominoType={player.hold} hasSwitch={player.hasSwitch} />
				<Stage stage={stageView} />
				<aside>
					{gameOver ? (
						<Display text={"Game Over"} gameOver={gameOver} />
					) : (
						<div>
							<Next queue={player.queue} />
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

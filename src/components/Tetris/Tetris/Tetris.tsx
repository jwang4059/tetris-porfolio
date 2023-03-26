import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useInterval, usePlayer } from "@/hooks/index";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import Hold from "../Hold/Hold";
import Next from "../Next/Next";
import StartButton from "../StartButton/StartButton";
import {
	checkCollision,
	getHardDropPos,
	createMatrix,
	mergeMatrix,
	mergeAndSweepStage,
	getTimeStr,
	getDropTime,
} from "@/utils/gameHelpers";
import { linePoints, STAGE_HEIGHT, STAGE_WIDTH } from "@/utils/constants";
import { GameStateType, GameStatusType, StageType } from "@/utils/types";
import { getTetrominoPreview, simplifyTetromino } from "@/utils/tetrominos";
import styles from "./Tetris.module.scss";

const Tetris = () => {
	const [time, setTime] = useState<number>(0);
	const [gameState, setGameState] = useState<GameStateType>("initial");
	const [gameStatus, setGameStatus] = useState<GameStatusType>({
		score: 0,
		rows: 0,
		level: 0,
		dropTime: null,
	});
	const [stage, setStage] = useState<StageType | undefined>(
		createMatrix(STAGE_HEIGHT, STAGE_WIDTH)
	);
	const [stageView, setStageView] = useState<StageType | undefined>(stage);
	const [player, updatePlayerPos, resetPlayer, playerRotate, playerHold] =
		usePlayer();

	useInterval(
		() => {
			setTime(time + 1);
		},
		gameState !== "playing" ? null : 1000
	);

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

	const handlePause = () => {
		if (gameState !== "paused") {
			setGameStatus({ ...gameStatus, dropTime: null });
			setGameState("paused");
		} else {
			setGameState("playing");
			setGameStatus({
				...gameStatus,
				dropTime: getDropTime(gameStatus.level),
			});
		}
	};

	const handleStart = () => {
		if (gameState === "playing" || gameState === "paused") {
			handlePause();
		} else {
			setGameState("playing");
			setGameStatus({ score: 0, rows: 0, level: 1, dropTime: 1000 });
			setStage(createMatrix(STAGE_HEIGHT, STAGE_WIDTH));
			resetPlayer(true);
		}
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
				setGameState("over");
				setGameStatus({ ...gameStatus, dropTime: null });
			} else {
				const { newStage, rowCount } = mergeAndSweepStage(stage, player);
				const totalRows = gameStatus.rows + rowCount;
				const currLevel = Math.floor(totalRows / 10) + 1;
				const dropTime = getDropTime(currLevel);

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
		if (gameState === "playing" || key === "p") {
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
				case "p":
					handlePause();
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
				<div className={styles["hold"]}>
					<Hold tetrominoType={player.hold} hasSwitch={player.hasSwitch} />
				</div>
				<div className={styles["info1"]}>
					<Display
						text="Speed Level"
						value={gameStatus.level}
						gameOver={gameState === "over"}
					/>
					<Display
						text="Lines"
						value={gameStatus.rows}
						gameOver={gameState === "over"}
					/>
				</div>
				<div className={styles["stage"]}>
					<Stage stage={stageView} />
				</div>
				<div className={styles["next"]}>
					<Next queue={player.queue} />
				</div>
				<div className={styles["info2"]}>
					<Display
						text="Time"
						value={getTimeStr(time)}
						gameOver={gameState === "over"}
					/>
					<Display
						text="Score"
						value={gameStatus.score}
						gameOver={gameState === "over"}
					/>
				</div>
				<div className={styles["info3"]}>
					<StartButton gameState={gameState} onClick={handleStart} />
				</div>
			</div>
		</div>
	);
};

export default Tetris;

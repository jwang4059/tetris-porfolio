import React, { useState } from "react";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import { usePlayer } from "@/hooks/usePlayer";
import { useStage } from "@/hooks/useStage";
import { createStage } from "@/utils/gameHelpers";
import styles from "./Tetris.module.scss";

const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);
	const [player, updatePlayerPos, resetPlayer] = usePlayer();
	const [stage, setStage] = useStage(player, resetPlayer);

	const movePlayer = (dir: number) => {
		updatePlayerPos({ x: dir, y: 0, collided: false });
	};

	const startGame = () => {
		setStage(createStage());
		resetPlayer();
	};

	const drop = () => {
		updatePlayerPos({ x: 0, y: 1, collided: false });
	};

	const dropPlayer = () => {
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
			}
		}
	};

	return (
		<div
			className={styles.wrapper}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => move(e)}
		>
			<div className={styles.tetris}>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Display text={"Game Over"} gameOver={gameOver} />
					) : (
						<div>
							<Display text="Score" gameOver={gameOver} />
							<Display text="Rows" gameOver={gameOver} />
							<Display text="Level" gameOver={gameOver} />
						</div>
					)}
					<StartButton callback={startGame} />
				</aside>
			</div>
		</div>
	);
};

export default Tetris;

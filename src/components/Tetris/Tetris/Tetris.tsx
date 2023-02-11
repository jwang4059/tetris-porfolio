import React, { useState } from "react";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import { usePlayer } from "@/hooks/usePlayer";
import { useStage } from "@/hooks/useStage";
import styles from "./Tetris.module.scss";

const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);
	const [player] = usePlayer();
	const [stage, setStage] = useStage(player);

	return (
		<div className={styles.wrapper}>
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
					<StartButton
						callback={function (): void {
							throw new Error("Function not implemented.");
						}}
					/>
				</aside>
			</div>
		</div>
	);
};

export default Tetris;

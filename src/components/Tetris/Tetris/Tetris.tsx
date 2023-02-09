import React from "react";
import Display from "../Display/Display";
import Stage from "../Stage/Stage";
import StartButton from "../StartButton/StartButton";
import { createStage } from "@/utils/gameHelpers";
import styles from "./Tetris.module.scss";

const Tetris = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.tetris}>
				<Stage stage={createStage()} />
				<aside>
					<div>
						<Display text="Score" gameOver={false} />
						<Display text="Rows" gameOver={false} />
						<Display text="Level" gameOver={false} />
					</div>
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

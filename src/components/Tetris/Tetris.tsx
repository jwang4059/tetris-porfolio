import React from "react";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { createStage } from "@/utils/gameHelpers";

const Tetris = () => {
	return (
		<div>
			<Stage stage={createStage()} />
			<aside>
				<div>
					<Display text="Score" gameOver={false} />
					<Display text="Rows" gameOver={false} />
					<Display text="level" gameOver={false} />
				</div>
				<StartButton
					callback={function (): void {
						throw new Error("Function not implemented.");
					}}
				/>
			</aside>
		</div>
	);
};

export default Tetris;

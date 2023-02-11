import { useState } from "react";
import { PlayerType } from "./usePlayer";
import { createStage } from "@/utils/gameHelpers";

export const useStage = (player: PlayerType) => {
	const [stage, setStage] = useState(createStage());

	return [stage, setStage] as const;
};

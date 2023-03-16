import React, { useState } from "react";
import { useInterval } from "@/hooks";
import Display from "../Display/Display";

interface TimeProps {
	paused: boolean;
}

const Time = ({ paused }: TimeProps) => {
	const [time, setTime] = useState<number>(0);

	const str_pad_left = (str: number, pad: string, length: number) => {
		return (new Array(length + 1).join(pad) + str).slice(-length);
	};

	const getTime = () => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
	};

	useInterval(
		() => {
			setTime(time + 1);
		},
		paused ? null : 1000
	);

	return <Display text="Time" value={getTime()} />;
};

export default Time;

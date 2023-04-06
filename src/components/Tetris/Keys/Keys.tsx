import React from "react";
import {
	BsArrowDownShort,
	BsArrowLeftShort,
	BsArrowRightShort,
	BsArrowUpShort,
	BsXLg,
} from "react-icons/bs";
import styles from "./Keys.module.scss";

interface KeysProps {
	close: () => void;
}

const Keys = ({ close }: KeysProps) => {
	return (
		<div className={styles["keys__backdrop"]}>
			<div className={styles["keys__modal"]}>
				<div className={styles["keys__toggle__wrapper"]}>
					<span className={styles["keys__toggle"]} onClick={close}>
						<BsXLg />
					</span>
				</div>
				<h3 className={styles["keys__title"]}>Keys</h3>
				<div className={styles["key__move"]}>
					<span className={styles["key__icons"]}>
						<span className={styles["key__icon"]}>
							<BsArrowLeftShort />
						</span>
						<span className={styles["key__separator"]}> / </span>
						<span className={styles["key__icon"]}>
							<BsArrowRightShort />
						</span>
					</span>
					Move
				</div>
				<div className={styles["key__move"]}>
					<span className={styles["key__icons"]}>
						<span className={styles["key__icon"]}>
							<BsArrowDownShort />
						</span>
					</span>
					Soft Drop
				</div>
				<div className={styles["key__move"]}>
					<span className={styles["key__icons"]}>
						<span className={styles["key__icon"]}>Space</span>
					</span>
					Hard Drop
				</div>
				<div className={styles["key__move"]}>
					<span className={styles["key__icons"]}>
						<span className={styles["key__icon"]}>X</span>
						<span className={styles["key__separator"]}> / </span>
						<span className={styles["key__icon"]}>
							<BsArrowUpShort />
						</span>
					</span>
					Rotate Clockwise
				</div>
				<div className={styles["key__move"]}>
					<span className={styles["key__icons"]}>
						<span className={styles["key__icon"]}>Z</span>
					</span>
					Rotate Counterclockwise
				</div>
				<div className={styles["key__move"]}>
					<span className={styles["key__icons"]}>
						<span className={styles["key__icon"]}>P</span>
					</span>
					Pause / Unpause
				</div>
			</div>
		</div>
	);
};

export default Keys;

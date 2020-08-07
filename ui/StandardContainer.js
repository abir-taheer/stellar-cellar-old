import React from "react";
import FlexCenter from "./FlexCenter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	standardContainer: {
		width: "1200px",
		maxWidth: "90vw"
	}
});

const StandardContainer = ({ children, className }) => {
	const classes = useStyles();
	return (
		<div className={className}>
			<FlexCenter>
				<div className={classes.standardContainer}>{children}</div>
			</FlexCenter>
		</div>
	);
};

export default StandardContainer;

import React from "react";
import NavBar from "../ui/Navbar";
import sun from "./../img/sun.png";
import { Typography } from "@material-ui/core";
import faker from "faker";
import StandardContainer from "../ui/StandardContainer";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../comps/Map";

const useStyles = makeStyles({
	text: {
		textAlign: "center"
	}
});

const Article = () => {
	const classes = useStyles();
	return (
		<div>
			<NavBar />
			<br />
			<br />

			<div style={{ textAlign: "center" }}>
				<img src={sun} alt={"sun logo"} style={{ width: "200px" }} />
			</div>

			<StandardContainer className={classes.text}>
				<br />
				<br />
				<Typography variant={"h5"}>Article</Typography>
				<br />
				<br />
				<Typography paragraph>{faker.random.words(400)}</Typography>
			</StandardContainer>

			<Map />
		</div>
	);
};

export default Article;

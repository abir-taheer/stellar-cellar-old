import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import NavBar from "../ui/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import StandardContainer from "../ui/StandardContainer";
import { Typography } from "@material-ui/core";

import faker from "faker";

const useStyles = makeStyles(theme => ({
	galleryImage: {
		width: "100%",
		objectFit: "cover",
		height: "100%"
	},
	paper: {
		position: "relative",
		height: "600px"
	},
	description: {
		textAlign: "center",
		position: "absolute",
		bottom: 0,
		height: "20%",
		background: `rgba(0, 0, 0, 0.4)`,
		color: "white",
		width: "100%",
		fontFamily: theme.typography.fontFamily
	}
}));

function Gallery(props) {
	const items = [
		{
			name: faker.random.words(3),
			description: faker.lorem.words(12),
			img: "https://source.unsplash.com/1600x900/?doors"
		},
		{
			name: faker.random.words(3),
			description: faker.lorem.words(12),
			img: "https://source.unsplash.com/1600x900/?door"
		}
	];

	return (
		<div>
			<NavBar />

			<Carousel navButtonsAlwaysVisible>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>

			<br />
			<StandardContainer>
				<Typography variant={"h3"} style={{ textAlign: "center" }}>
					XXX Doors
				</Typography>
				<br />
				<Typography paragraph style={{ textAlign: "center" }}>
					{faker.lorem.words(160)}
				</Typography>
			</StandardContainer>
		</div>
	);
}

function Item(props) {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<img
				src={props.item.img}
				alt={"door"}
				className={classes.galleryImage}
			/>
			<div className={classes.description}>
				<h2>{props.item.name}</h2>
				<p>{props.item.description}</p>
			</div>
		</Paper>
	);
}
export default Gallery;

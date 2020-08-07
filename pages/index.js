import Head from "next/head";
import NavBar from "../ui/Navbar";
import Landing from "../comps/home/Landing";
import StandardContainer from "../ui/StandardContainer";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Link from "next/link";
import faker from "faker";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	bodyText: {
		textAlign: "center"
	},
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export default function Home() {
	const classes = useStyles();

	return (
		<div className="container">
			<Head>
				<title>Stellar Cellar Doors</title>
				<link rel="icon" href="/favicon.ico" />
				<style>{`
					body {
						margin: 0;
					}
				`}</style>
			</Head>

			<NavBar />

			<Landing />

			<StandardContainer className={classes.bodyText}>
				<Typography variant={"body1"}>
					NY’s Cellar Door Specialist For Ten Years Commercial Or
					Residential flat or sloped, stock size or custom made.
				</Typography>

				<Typography
					variant={"h4"}
					style={{ marginBottom: "2rem", marginTop: "4rem" }}
				>
					Galleries
				</Typography>
				<Grid container spacing={2}>
					{Array(6)
						.fill(0)
						.map((a, i) => {
							return (
								<Grid
									item
									xs={12}
									sm={6}
									xl={4}
									lg={4}
									md={6}
									key={i}
								>
									<MediaCard times={i} />
								</Grid>
							);
						})}
				</Grid>
			</StandardContainer>
		</div>
	);
}

function MediaCard({ times }) {
	const classes = useStyles();

	const doors = Array(times).fill("door").join(",");
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={"https://source.unsplash.com/1600x900/?" + doors}
					title={faker.random.word() + " door"}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{faker.random.word()} doors
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{faker.random.words(6)}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

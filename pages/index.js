import Head from "next/head";
import NavBar from "../ui/Navbar";
import Landing from "../comps/home/Landing";
import StandardContainer from "../ui/StandardContainer";
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Link from "next/link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";

const useStyles = makeStyles({
	bodyText: {
		textAlign: "center"
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

				<Typography variant={"h4"}>Galleries</Typography>
				<Grid container>
					{Array(6)
						.fill(0)
						.map((a, i) => {
							return (
								<Grid
									item
									xs={12}
									sm={6}
									xl={3}
									lg={3}
									md={6}
									key={i}
								>
									<Card>
										<Link href={`/gallery`}>
											<CardActionArea>
												<CardMedia
													image={`https://source.unsplash.com/1600x900/?doors,door`}
													title={"Gallery " + i}
													height={160}
												/>
												<CardContent>
													<Typography
														variant={"h5"}
														gutterBottom
													>
														Gallery {i}
													</Typography>
												</CardContent>
											</CardActionArea>
										</Link>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</StandardContainer>
		</div>
	);
}

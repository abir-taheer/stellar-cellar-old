import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import sun from "./../../img/sun.png";
import creditCards from "./../../img/credit-cards.jpg";
import { makeStyles } from "@material-ui/core/styles";
import FlexCenter from "../../ui/FlexCenter";

const useStyles = makeStyles({
	image: {
		width: "280px",
		maxWidth: "70vw",
		maxHeight: "40vh",
		objectFit: "contain"
	},
	gridParent: {
		width: "1400px",
		maxWidth: "90vw",
		marginTop: "3rem",
		textAlign: "center"
	},
	creditCardContainer: {
		textAlign: "center",
		paddingTop: "4rem"
	},
	nameText: {
		paddingTop: ({ isMobile }) => (isMobile ? 0 : "3rem")
	}
});

const Landing = () => {
	const isMobile = useMediaQuery("max-width: 900px");
	const classes = useStyles({ isMobile });

	return (
		<FlexCenter>
			<div className={classes.gridParent}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={4}>
						<img
							src={sun}
							className={classes.image}
							alt={"Sun Logo"}
						/>
					</Grid>

					<Grid item xs={12} sm={12} md={4}>
						<div className={classes.nameText}>
							<Typography variant={"h3"}>
								Stellar Cellar Doors
							</Typography>
							<Typography variant={"h5"}>
								Licensed, Certified, Insured
							</Typography>
							<Typography variant={"h5"}>646-703-3444</Typography>
							<Typography variant={"h5"}>
								info@stellarcellardoors.com
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<div className={classes.creditCardContainer}>
							<Typography variant={"h6"}>
								We accept all major credit card providers!
							</Typography>
							<img
								src={creditCards}
								alt={"Supported Credit Card Vendors"}
							/>
							<Typography variant={"h6"}>
								Serving all of New York, Nassau, Westchester,
								Essex...
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
		</FlexCenter>
	);
};

export default Landing;

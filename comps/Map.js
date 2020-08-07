import React from "react";
import { Grid, Typography } from "@material-ui/core";
import StandardContainer from "../ui/StandardContainer";
import creditCards from "./../img/credit-cards.jpg";

const Map = () => {
	return (
		<div style={{ marginTop: "5rem" }}>
			<StandardContainer>
				<Grid container spacing={4}>
					<Grid
						item
						lg={6}
						md={6}
						sm={6}
						xs={12}
						style={{ padding: "1rem" }}
					>
						<Typography variant={"h5"}>
							Serving the Greater New York Area
						</Typography>

						<Typography paragraph>
							We serve all of NYC, Nassau, Westchester, Essex and
							Bergen counties
						</Typography>

						<Typography>
							<strong>Reach us at:</strong>
						</Typography>
						<Typography>39 Avenue A, New York, NY 10009</Typography>
						<Typography>646-703-3444</Typography>
						<Typography>info@stellarcellardoors.com</Typography>

						<br />
						<Typography>Phone quotes gladly provided!</Typography>
						<img
							src={creditCards}
							alt="supported credit cards"
							className="image"
						/>
					</Grid>

					<Grid item lg={6} md={6} sm={6} xs={12}>
						<iframe
							className="location-map"
							style={{
								width: "100%",
								height: "20rem",
								borderRadius: "0.5rem"
							}}
							src="https://maps.google.com/maps?q=39%20Avenue%20A%2C%20NY%2C%20NY%2010009&t=&z=17&ie=UTF8&iwloc=&output=embed"
						/>
					</Grid>
				</Grid>
			</StandardContainer>
		</div>
	);
};

export default Map;

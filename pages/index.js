import Head from "next/head";
import NavBar from "../ui/Navbar";
import Landing from "../comps/home/Landing";
import StandardContainer from "../ui/StandardContainer";
import { Typography } from "@material-ui/core";

export default function Home() {
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

			<StandardContainer>
				<Typography variant={"body1"}>
					NY’s Cellar Door Specialist For Ten Years Commercial Or
					Residential flat or sloped, stock size or custom made.
				</Typography>
			</StandardContainer>
		</div>
	);
}

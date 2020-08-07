import Head from "next/head";
import NavBar from "../ui/Navbar";
import Landing from "../comps/home/Landing";

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
		</div>
	);
}

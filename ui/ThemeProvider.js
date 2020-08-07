import React from "react";
import { createMuiTheme, ThemeProvider as Provider } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#e17055",
			contrastText: "#fff"
		},
		secondary: {
			// light: "#ff7961",
			main: "#27ae60",
			// dark: "#ba000d",
			contrastText: "#fff"
		}
	},
	typography: {
		fontFamily: `'Roboto Condensed', sans-serif`
	}
});

const ThemeProvider = props => {
	return <Provider theme={theme}>{props.children}</Provider>;
};

export default ThemeProvider;

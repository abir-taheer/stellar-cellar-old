import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import sun from "./../img/sun.png";
import Collapse from "@material-ui/core/Collapse";
import {
	ExpandLess,
	ExpandMore,
	Home,
	InfoRounded,
	StarBorder
} from "@material-ui/icons";
import faker from "faker";
import { capitalize } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch"
			}
		}
	},
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

export default function NavBar() {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={() => setDrawerOpen(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						Stellar Cellar Doors
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
				</Toolbar>
			</AppBar>

			<Drawer
				anchor={"left"}
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
			>
				<div style={{ width: "300px", textAlign: "center" }}>
					<img
						src={sun}
						alt={"sun logo"}
						style={{ width: "150px" }}
					/>
					<Typography variant={"h6"}>Stellar Cellar Doors</Typography>
				</div>
				<List className={classes.list}>
					<ListItem button>
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</List>

				<ListItem button onClick={handleClick}>
					<ListItemIcon>
						<StarBorder />
					</ListItemIcon>
					<ListItemText primary="Galleries" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{Array(4)
							.fill(1)
							.map((a, i) => (
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<StarBorder />
									</ListItemIcon>
									<ListItemText
										primary={
											<a
												href={"/gallery"}
												style={{
													textDecoration: "none",
													color: "unset"
												}}
											>
												{capitalize(
													faker.random.word()
												)}
												Doors
											</a>
										}
									/>
								</ListItem>
							))}
					</List>
				</Collapse>

				<List className={classes.list}>
					{" "}
					<ListItem button>
						<ListItemIcon>
							<InfoRounded />
						</ListItemIcon>
						<ListItemText primary={"About"} />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}

import {
	Box,
	AppBar,
	IconButton,
	Typography,
	Icon,
	Badge,
	InputBase,
	Container,
	Divider,
	Menu,
	MenuItem,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import {Link} from 'react-router-dom';

import {ROUTE_NAMES} from '../../../routes/routeNames';

import { styles } from "./styles";

import account from "../../../static/imgs/account.svg";
import basket from "../../../static/imgs/basket.svg";

const useStyles = makeStyles(styles);

export const HeaderLayout = ({handleMenu, anchorEl, handleClose}) => {
	const classes = useStyles();

	return (
		<AppBar>
			<Container>
				<Box className={classes.container}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link to={ROUTE_NAMES.PRODUCTS}>
						<Typography
							noWrap
							component="span"
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							Shop
						</Typography>
						</Link>
						<Link to={ROUTE_NAMES.PRODUCTS}>
						<Typography
							noWrap
							component="span"
							sx={{ display: { xs: "none", sm: "block" }, marginLeft: '20px'}}
						>
							Products
						</Typography>
						</Link>
						<Link to={ROUTE_NAMES.LOG_IN}>
						<Typography
							noWrap
							component="span"
							sx={{ display: { xs: "none", sm: "block" }, marginLeft: '20px'}}
						>
							Log in
						</Typography>
						</Link>
					</Box>
					<Box className={classes.search}>
						<Box className={classes.searchWrap}>
							<InputBase
								className={classes.searchInputBase}
								sx={{ ml: 1, flex: 1 }}
								placeholder="Search here"
								inputProps={{ "aria-label": "Search here" }}
							/>
							<Divider
								className={classes.divider}
								orientation="vertical"
							/>
							<IconButton
								color="secondary"
								type="submit"
								aria-label="search"
							>
								<SearchIcon />
							</IconButton>
						</Box>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<IconButton
							aria-label="account of current user"
							aria-haspopup="true"
						>
							<Badge
								className={classes.badge}
								max={99}
								badgeContent={9}
								color="secondary"
							>
								<Icon>
									<img src={basket} alt="basket" />
								</Icon>
							</Badge>
						</IconButton>
						<IconButton
							sx={{ marginLeft: "15px" }}
							aria-label="show 4 new purchases"
						>
							<Icon>
								<img src={account} alt="account" />
							</Icon>
						</IconButton>
					</Box>

					<Box
						onClick={handleMenu}
						sx={{ display: { xs: "flex", md: "none" } }}
					>
						<IconButton aria-label="show more" aria-haspopup="true">
							<MoreIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>Cart</MenuItem>
						</Menu>
					</Box>
				</Box>
			</Container>
		</AppBar>
	);
};

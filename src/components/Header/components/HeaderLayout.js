import {
	Box,
	AppBar,
	IconButton,
	Icon,
	Badge,
	InputBase,
	Container,
	Divider,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { HeaderMenuLayout } from "./HeaderMenu/HeaderMenuLayout";
import { HeaderNavLayout } from "./HeaderNav/HeaderNavLayout";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import { useStyles } from "./styles";

import account from "../../../static/imgs/account.svg";
import basket from "../../../static/imgs/basket.svg";

export const HeaderLayout = ({
	handleOpenMenu,
	anchorEl,
	handleCloseMenu,
	handleLogOut,
	cart,
}) => {
	const classes = useStyles();

	return (
		<AppBar>
			<Container>
				<Box className={classes.container}>
					<HeaderNavLayout handleLogOut={handleLogOut} />
					<Box className={classes.search}>
						<Box className={classes.searchWrap}>
							<InputBase
								className={classes.searchInputBase}
								sx={{ ml: 1, flex: 1 }}
								placeholder="Search here"
								disabled
								inputProps={{ "aria-label": "Search here" }}
							/>
							<Divider
								className={classes.divider}
								orientation="vertical"
							/>
							<IconButton color="secondary" type="submit">
								<SearchIcon />
							</IconButton>
						</Box>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Link to={ROUTE_NAMES.CART}>
							<IconButton>
								<Badge
									className={classes.badge}
									max={99}
									badgeContent={cart.quantity}
									color="secondary"
								>
									<Icon>
										<img src={basket} alt="basket" />
									</Icon>
								</Badge>
							</IconButton>
						</Link>
						<Link to={ROUTE_NAMES.USER}>
							<IconButton sx={{ marginLeft: "15px" }}>
								<Icon>
									<img src={account} alt="account" />
								</Icon>
							</IconButton>
						</Link>
					</Box>
					<HeaderMenuLayout
						handleOpenMenu={handleOpenMenu}
						anchorEl={anchorEl}
						handleCloseMenu={handleCloseMenu}
						handleLogOut={handleLogOut}
					/>
				</Box>
			</Container>
		</AppBar>
	);
};

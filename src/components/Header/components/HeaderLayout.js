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
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import { HeaderNavView } from "./HeaderNav/HeaderNavView";
import { headerNavData } from "../config/headerNav";
import { HeaderMenuLayout } from "./HeaderMenu/HeaderMenuLayout";
// import { authSelector } from "../../../pages/LogInPage/selectors/index";

import { useStyles } from "./styles";

import account from "../../../static/imgs/account.svg";
import basket from "../../../static/imgs/basket.svg";

export const HeaderLayout = ({ handleOpenMenu, anchorEl, handleCloseMenu }) => {
	const classes = useStyles();

	return (
		<AppBar>
			<Container>
				<Box className={classes.container}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						{headerNavData.map(({ label, pathTo }) => (
							<HeaderNavView key={label} label={label} pathTo={pathTo} />
						))}
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
					<HeaderMenuLayout
						handleOpenMenu={handleOpenMenu}
						anchorEl={anchorEl}
						handleCloseMenu={handleCloseMenu}
					/>
				</Box>
			</Container>
		</AppBar>
	);
};

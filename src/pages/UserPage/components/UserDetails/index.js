import { memo } from "react";
import { Box } from "@mui/material";

import {
	transfromFirstLetterToUp,
	showAddressContent,
} from "../../../../utils/index";
import { useStyles } from "./styles";

export const UserDetailsView = memo(({ userData }) => {
	const classes = useStyles();

	const {
		phone,
		email,
		firstName,
		lastName,
		gender,
		address: { city, country, addressLine1, addressLine2 },
	} = userData;

	const cityToShow = showAddressContent(city);
	const countryToShow = showAddressContent(country);
	const addressLine1ToShow = showAddressContent(addressLine1);
	const addressLine2ToShow = showAddressContent(addressLine2);

	return (
		<Box
			sx={{
				margin: { xs: "0 auto 20px", md: "0 auto 30px" },
				minWidth: { xs: "100%", sm: "65%", md: "45%" },
				display: {xs: 'block', lg: 'flex'},
				minHeight: {xs: '250px'}
			}}
			className={classes.container}
		>
			<Box>
				<span className={classes.title}>Personal data</span>
				<Box className={classes.detailsWrapper}>
					<span className={classes.details}>Full name</span>
					<span className={classes.span}>
						{transfromFirstLetterToUp(firstName)}{" "}
						{transfromFirstLetterToUp(lastName)}
					</span>
				</Box>

				<Box className={classes.detailsWrapper}>
					<span className={classes.details}>Emal</span>
					<span className={classes.span}>{email}</span>
				</Box>

				<Box className={classes.detailsWrapper}>
					<span className={classes.details}>Phone</span>
					<span className={classes.span}>{phone}</span>
				</Box>

				<Box className={classes.detailsWrapper}>
					<span className={classes.details}>Gender</span>
					<span className={classes.span}>
						{transfromFirstLetterToUp(gender)}
					</span>
				</Box>
			</Box>
			<Box sx={{ marginTop: "25px" }}>
				<Box>
					<span className={classes.details}>Country/City: </span>
					<span className={classes.span}>
						{transfromFirstLetterToUp(countryToShow)}/
						{transfromFirstLetterToUp(cityToShow)}
					</span>
				</Box>
				<Box>
					<span className={classes.details}>Address: </span>
					<span className={classes.span}>
						{transfromFirstLetterToUp(addressLine1ToShow)}{" "}
						{transfromFirstLetterToUp(addressLine2ToShow)}
					</span>
				</Box>
			</Box>
		</Box>
	);
});

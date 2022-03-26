import { memo } from "react";
import { Box, Pagination, Stack } from "@mui/material";
import PropTypes from "prop-types";

import { useStyles } from "./styles";

export const PaginationView = memo(
	({ page, onPageChange, pageCount = 20, isLoading, errors }) => {
		const classes = useStyles();

		return (
			<Box className={classes.paginationContainer}>
				<Stack spacing={1}>
					<Pagination
						className={classes.pagination}
						count={pageCount}
						page={page}
						onChange={onPageChange}
						disabled={Boolean(isLoading || errors)}
						size="small"
						color="secondary"
					/>
				</Stack>
			</Box>
		);
	}
);

PaginationView.propTypes = {
	page: PropTypes.number.isRequired,
	pageCount: PropTypes.number,
	onPageChange: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
	errors: PropTypes.any,
};

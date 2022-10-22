import { memo } from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	TableContainer,
	Table,
	TableRow,
	TableHead,
	TableCell,
	TableBody,
	Box,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import moment from "moment";

export const UserOrderView = memo(({ orderedAt, totalPrice, itemsList }) => {
	const date = moment(orderedAt).format("MMMM Do YYYY");

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography sx={{ width: "50%", flexShrink: 0 }}>
					{date}
				</Typography>
				<Typography>Total: {totalPrice}$</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ padding: 0 }}>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell sx={{ padding: "5px" }}>
									Pokemon
								</TableCell>
								<TableCell sx={{ padding: "5px" }}>
									Quantity
								</TableCell>
								<TableCell sx={{ padding: "5px" }}>
									Price (for 1 item)
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{itemsList &&
								itemsList.map((item) => {
									const {
										name,
										sprites,
										quantity,
										weight,
										id,
									} = item;
									return (
										<TableRow
											key={id}
											sx={{
												"&:last-child td, &:last-child th":
													{
														border: 0,
													},
											}}
										>
											<TableCell sx={{ padding: "5px" }}>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
													}}
												>
													<img
														src={
															sprites.front_default
														}
														alt="pokemon"
													/>
													{name}
												</Box>
											</TableCell>
											<TableCell sx={{ padding: "5px" }}>
												{quantity}
											</TableCell>
											<TableCell sx={{ padding: "5px" }}>
												{weight}
											</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	);
});

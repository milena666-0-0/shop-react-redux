import { memo } from "react";
import { Modal as Modalka, Box } from "@mui/material";

import { useStyles } from "./styles";

export const Modal = memo(
	({ handleModalClose, openModal, content, renderContent }) => {
		const classes = useStyles();

		return (
			<Modalka
				open={openModal}
				onClose={handleModalClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={classes.modalContainer}>
					{renderContent(content)}
				</Box>
			</Modalka>
		);
	}
);

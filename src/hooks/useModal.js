import { useState, useCallback } from "react";

export const useModal = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleModalOpen = useCallback(() => setOpenModal(true), []);

	const handleModalClose = useCallback(() => {
		setOpenModal(false);
		window.location.reload();
	}, []);

	return { openModal, handleModalOpen, handleModalClose };
};

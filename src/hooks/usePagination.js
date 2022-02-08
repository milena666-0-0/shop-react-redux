import { useState, useEffect, useCallback } from "react";

export const usePagination = (pageName, initialPage = 1) => {
	const currentPage = +localStorage.getItem(pageName) || initialPage;

	const [page, setPage] = useState(currentPage);

	const onPageChange = useCallback((_, page) => {
		setPage(page);
	}, []);

	useEffect(() => {
		return () => {
			localStorage.setItem(pageName, page);
		};
	}, [page]);

	return [page, onPageChange];
};

import { useSelector } from "react-redux";

export const useIndicatorsToShow = (selector, data = null) => {
	const { isLoading, errors } = useSelector(selector);

	const contentToShow = (data.length || data) && !(isLoading || errors);
	const spinnerToShow = isLoading && !errors;
	const errorToShow = errors;

	return { contentToShow, spinnerToShow, errorToShow };
};

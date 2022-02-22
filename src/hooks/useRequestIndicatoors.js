import { useSelector } from "react-redux";

export const useRequestIndicatoors = (
	selector,
	data,
	LoadingComponent,
	ErrorComponent
) => {
	const { isLoading, errors } = useSelector(selector);

	const content = (data.length || data) && !(isLoading || errors);
	const spinner = isLoading && !errors && <LoadingComponent />;
	const error = errors && <ErrorComponent />;

	return { content, spinner, error };
};

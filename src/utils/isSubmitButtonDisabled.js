export const isSubmitButtonDisabled = ({errors}) => {
    return Object.keys(errors).length === 0;
};

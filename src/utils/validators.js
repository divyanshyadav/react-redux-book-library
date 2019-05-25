const required = (value) => {
    if (!value) {
        return {
            pass: false,
            errorMessage: 'Required!',
        };
    }
    return {
        pass: true,
    };
};

export default {
    required,
};

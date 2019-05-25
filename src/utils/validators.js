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

const maxChar = (value, limit) => {
    if (value.length > limit) {
        return {
            pass: false,
            errorMessage: `${limit} characters allowed!`,
        };
    }
    return {
        pass: true,
    };
};

const max50Char = value => maxChar(value, 50);
const max500Char = value => maxChar(value, 500);

export default {
    required,
    max50Char,
    max500Char,
};

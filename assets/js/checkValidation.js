function checkValidation(value, type) {
    if (value.trim().length === 0) {
        return false;
    };
    switch (type) {
        case 'name': {
            if (value.trim().length > 30) {
                return false;
            };

            break;
        };
        case 'age': {
            if (Number.isNaN(+value.trim()) || (+value.trim() === 0)) {
                return false
            };
        };
    };
    return true;
};
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
};

export const validateUser = (data) => {
    const errors = [];

    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
        errors.push('Имя обязательно и должно содержать минимум 2 символа');
    }

    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Некорректный email адрес');
    }

    if (!data.password || !isValidPassword(data.password)) {
        errors.push('Пароль должен быть не менее 6 символов и содержать хотя бы одну букву и одну цифру');
    }

    return errors;
};

export const validateProduct = (data) => {
    const errors = [];

    if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
        errors.push('Название продукта обязательно и должно быть непустой строкой');
    }

    if (data.price === undefined || typeof data.price !== 'number' || data.price < 0) {
        errors.push('Цена обязательна и должна быть положительным числом');
    }

    return errors;
};

export const validateOrder = (data) => {
    const errors = [];

    if (!data.userId) {
        errors.push('ID пользователя обязателен');
    }

    if (!Array.isArray(data.items) || data.items.length === 0) {
        errors.push('Заказ должен содержать непустой список товаров (items)');
    }

    return errors;
};
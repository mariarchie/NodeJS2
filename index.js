function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    let isUppercaseIncluded = false;
    let isSpecialCharIncluded = false;

    while (!isUppercaseIncluded || !isSpecialCharIncluded || password.length < length) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        const char = charset[randomIndex];

        if (!isUppercaseIncluded && char.toUpperCase() === char && char.toLowerCase() !== char) {
            isUppercaseIncluded = true;
        }

        if (!isSpecialCharIncluded && "!@#$%^&*()_+~`|}{[]:;?><,./-=".includes(char)) {
            isSpecialCharIncluded = true;
        }

        password += char;
    }

    return password;
}

module.exports = { generatePassword }
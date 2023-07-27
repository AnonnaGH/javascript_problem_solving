function generateRandomPassword(passwordLength) {
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharacters = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allCharacters = uppercaseCharacters + lowercaseCharacters + numberCharacters + specialCharacters;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

// Example usage: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);



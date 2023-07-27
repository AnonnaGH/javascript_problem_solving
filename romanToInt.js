function romanToInt(romanNumeral) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let integerValue = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentCharValue = romanNumerals[romanNumeral[i]];
        const nextCharValue = romanNumerals[romanNumeral[i + 1]];

        if (nextCharValue > currentCharValue) {
            integerValue += nextCharValue - currentCharValue;
            i++; // Skip the next character as it's already taken into account
        } else {
            integerValue += currentCharValue;
        }
    }

    return integerValue;
}

// Example usage:
const romanNumeralString = "XXI";
const integerValue = romanToInt(romanNumeralString);
console.log(integerValue);



function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

const originalString = "hello world";
const reversedOutput = reverseString(originalString);
console.log(reversedOutput);



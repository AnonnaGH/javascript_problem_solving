function calculator(number1, operator, number2) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if (number2 !== 0) {
                return number1 / number2;
            } else {
                return 'Error';
            }
        default:
            return 'Invalid';
    }
}

const num1 = 10;
const num2 = 5;
const operator = '/';
const result = calculator(num1, operator, num2);
console.log(result); 



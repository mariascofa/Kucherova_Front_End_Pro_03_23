const firstNumber = parseInt(prompt('Please enter first number:', 0));
const secondNumber = parseInt(prompt('Please enter second number:', 22));

const thirdNumber = (firstNumber && secondNumber) ? 80 : 40;

const valuesDescription = {};

if (firstNumber >= 90) { 
    valuesDescription.size = 'big';
} else if (firstNumber <= 40) {
    valuesDescription.size = 'small';
} else {
    valuesDescription.size = 'medium';
}

let fourthNumber;

switch (valuesDescription.size) {
    case 'big':
        fourthNumber = 1000;
        break;
    case 'medium':
        fourthNumber = 100;
        break;
    case 'small':
        fourthNumber = 10;
        break;
    default:
        throw new Error('Something went wrong! Please contact the developer.');
}

const result = firstNumber * secondNumber * thirdNumber * fourthNumber;

if (result % 2 !== 0) {
    console.log(`Result's remainder is not equal to zero!`);
} else if (secondNumber > 50) {
    alert(secondNumber);
}
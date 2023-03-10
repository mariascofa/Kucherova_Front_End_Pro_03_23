const firstNumber = parseInt(prompt('Please enter first number:', 0));
const secondNumber = parseInt(prompt('Please enter second number:', 22));

firstNumber && secondNumber ? thirdNumber = 80 : thirdNumber = 40;

valuesDescription = []

if (firstNumber >= 90) { 
    valuesDescription.size = 'big'
} else if (firstNumber <= 40) {
    valuesDescription.size = 'small'
} else {
    valuesDescription.size = 'medium'
};

let thirdNumber;
switch(valuesDescription.size) {
    case 'big':
        thirdNumber = 1000
        break;
    case 'medium':
        thirdNumber = 100
        break;
    case 'small':
        thirdNumber = 10
        break;
    default:
        throw new Error('Something went wrong! Please contact developer.');
        break;
    }

let result = (firstNumber * secondNumber * thirdNumber);

if (result % 2 !== 0){
    console.log("Result's remainder is not equal to zero!")
} else if (secondNumber > 50) {
    alert (secondNumber)
};


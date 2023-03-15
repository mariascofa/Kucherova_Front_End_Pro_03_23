//1 Display on the console a single comma-separated string of numbers from 10 to 20.

let output = "";
const startNumber = 10;
const finNumber = 20;

for (let iterNum = startNumber; iterNum <= finNumber; iterNum++) {
  if (iterNum === finNumber) {
    output += iterNum;
  } else {
    output += `${iterNum}, `;
  }
}
console.log(output);

//2 Display on the console the squares of numbers from 10 to 20 in one line separated by commas.

let result = "";
for (let updateNum = startNumber; updateNum <= finNumber; updateNum++) {
  if (updateNum === finNumber) {
    result += updateNum ** 2;
  } else {
    result += `${updateNum ** 2}, `;
  }
}
console.log(result);

//3 Find the product of all integers from 15 to 35.

const initNumb = 15;
const stopNumb = 35;
let supportNum = initNumb;

for (let updateNum = initNumb + 1; updateNum <= stopNumb; updateNum++) {
  supportNum *= updateNum;
}
console.log(supportNum);

//4 Find the arithmetic mean of all integers from 1 to 500.

const length = 500;
let firstNumber = 1;
let sumResult = 1;
while (firstNumber < length) {
  firstNumber++;
  sumResult += firstNumber;
}
console.log(sumResult / length);

//5 Output the sum of only even numbers in the range from 30 to 80.

const startingNumb = 30;
const endNumb = 80;
let evenSum = 0;

for (let changingNum = startingNumb; changingNum <= endNumb; changingNum++) {
  if (changingNum % 2 === 0) {
    evenSum += changingNum;
  }
}

console.log(evenSum);

//6 Output all numbers in the range from 100 to 200 multiples of 3.

let outpuFin = "";
const startNumb = 100;
const finishNumb = 200;
const multiNumb = 3;
const lastMultiNumb = finishNumb - (finishNumb % multiNumb);

for (let caclNumb = startNumb; caclNumb <= lastMultiNumb; caclNumb++) {
  if (caclNumb % multiNumb === 0) {
    if (caclNumb === lastMultiNumb) {
      outpuFin += caclNumb;
    } else {
      outpuFin += `${caclNumb}, `;
    }
  }
}
console.log(outpuFin);

// // In case if we don't need to display those numbers in one line:
// for (let caclNumb = startNumb; caclNumb <= finishNumb; caclNumb++) {
//     if (caclNumb % multiNumb === 0) {
//         console.log(caclNumb);
//     }
// }

// 7 Check if an input is a prime number. Inform user about results.

let userInput = prompt("Please enter a number:", 0);
let isPrime = true;

if (userInput > 1) {
  for (var i = 2; i < userInput; i++) {
    if (userInput % i === 0) {
      isPrime = false;
    }
  }
} else {
  isPrime = false;
}

const answer = isPrime ? "a prime" : "not a prime";
alert(`Input is ${answer} number!`);

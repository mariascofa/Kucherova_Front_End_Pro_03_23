// 1 Find the sum and the amount of positive elements in the array.

const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let countNumb = 0;
let sumNumb = 0;
numbersArray.forEach(function (element) {
  if (element > 0) {
    countNumb++;
    sumNumb += element;
  }
});

console.log(
  `Amount of positive numbers - ${countNumb}.\nSum of all postive numbers - ${sumNumb}.`
);

// 2 Find the minimum value and its sequence number in the array.

const minValue = Math.min(...numbersArray);

let minIndex =
  numbersArray.findIndex(function (item) {
    return item === minValue;
  }) + 1;
console.log(minValue, minIndex);

// 3 Find the biggest value and its sequence number in the array.

let maxElement = numbersArray[0];
let maxIndex = 1;

for (let index = 1; index < numbersArray.length; index++) {
  if (numbersArray[index] > maxElement) {
    maxElement = numbersArray[index];
    maxIndex = index + 1;
  }
}
console.log(maxElement, maxIndex);

// 4 Determine the number of negative values.

let countNegativeNumb = 0;

numbersArray.forEach(function (element) {
  if (element < 0) {
    countNegativeNumb++;
  }
});

console.log(countNegativeNumb);

// 5 Find the amount of uneven positive elements.

let countPositiveNumb = 0;
let sumPositiveNumb = 0;

numbersArray.forEach(function (element) {
  if (element > 0 && element % 2 !== 0) {
    countPositiveNumb++;
    sumPositiveNumb += element;
  }
});

console.log(countPositiveNumb, sumPositiveNumb);

// 6 Find the amount of even positive elements.

const countPositiveEvenNumb = numbersArray.filter(function (element) {
  return element > 0 && element % 2 === 0;
});

console.log(countPositiveEvenNumb.length);
console.log(countPositiveEvenNumb);

// 7 Find the sum of all positive and even elements.

const sumPositiveEven = numbersArray
  .filter(function (element) {
    return element > 0 && element % 2 === 0;
  })
  .reduce((sum, currentValue) => sum + currentValue);

console.log(sumPositiveEven);

//8 Find the sum of all positive and uneven elements.

let countingNumb = 0;

numbersArray.forEach(function (element) {
  if (element > 0 && element % 2 !== 0) {
    countingNumb += element;
  }
});

console.log(countingNumb);

//9 Find the product of all positive values in the array.

const productPositive = numbersArray
  .filter(function (element) {
    return element > 0;
  })
  .reduce((product, eachValue) => product * eachValue);

console.log(productPositive);

//10 Find the biggest value, other values change to zero.

const maxValue = Math.max(...numbersArray);

const UpdateArray = numbersArray.map(function (element) {
  return element === maxValue ? element : 0;
});

console.log(UpdateArray);

for (let newIndex = 0; newIndex < numbersArray.length; newIndex++) {
  if (numbersArray[newIndex] !== maxValue) {
    numbersArray[newIndex] = 0;
  }
}

console.log(numbersArray);

const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(numbersArray);

// 1 Find the sum and the amount of positive elements in the array.

let countNumb = 0;
let sumNumb = 0;
numbersArray.forEach(function (element) {
  if (element > 0) {
    countNumb++;
    sumNumb += element;
  }
});

console.log(
  `Amount of positive numbers: ${countNumb}.\nSum of all postive numbers: ${sumNumb}.`
);

// 2 Find the minimum value and its sequence number in the array.

const minValue = Math.min(...numbersArray);

let minIndex = numbersArray.findIndex(function (item) {
  return item === minValue;
});

console.log(
  `Minimum value: ${minValue}.\nIndex of the minimum number: ${minIndex}. Sequence number: ${
    minIndex + 1
  }.`
);

// 3 Find the biggest value and its sequence number in the array.

let maxElement = numbersArray[0];
let maxIndex = 0;

for (let index = 0; index < numbersArray.length; index++) {
  if (numbersArray[index] > maxElement) {
    maxElement = numbersArray[index];
    maxIndex = index;
  }
}

console.log(
  `Maximum value: ${maxElement}.\nIndex of the maximum number: ${maxIndex}. Sequence number: ${
    maxIndex + 1
  }.`
);

// 4 Find the amount of negative values.

let countNegativeNumb = 0;

numbersArray.forEach(function (element) {
  if (element < 0) {
    countNegativeNumb++;
  }
});

console.log(`Amount of negative values in the array: ${countNegativeNumb}.`);

// 5 Find the amount of uneven positive elements.

let countPositiveNumb = 0;

numbersArray.forEach(function (element) {
  if (element > 0 && element % 2 !== 0) {
    countPositiveNumb++;
  }
});

console.log(`Amount of of uneven positive elements: ${countPositiveNumb}.`);

// 6 Find the amount of even positive elements.

const countPositiveEvenNumb = numbersArray.filter(function (element) {
  return element > 0 && element % 2 === 0;
});

console.log(
  `Amount of even positive elements in the array: ${countPositiveEvenNumb.length}.`
);

// 7 Find the sum of all positive and even elements.

const sumPositiveEven = numbersArray
  .filter(function (element) {
    return element > 0 && element % 2 === 0;
  })
  .reduce((sum, currentValue) => sum + currentValue);

console.log(`Sum of all positive and even elements: ${sumPositiveEven}.`);

//8 Find the sum of all positive and uneven elements.

let positiveUnevenSum = 0;

numbersArray.forEach(function (element) {
  if (element > 0 && element % 2 !== 0) {
    positiveUnevenSum += element;
  }
});

console.log(`Sum of all positive and uneven elements: ${positiveUnevenSum}.`);

//9 Find the product of all positive values in the array.

const productPositive = numbersArray
  .filter(function (element) {
    return element > 0;
  })
  .reduce((product, eachValue) => product * eachValue);

console.log(
  `The product of all positive values in the array: ${productPositive}.`
);

//10 Find the biggest value in the array, other values change to zero.

const maxValue = Math.max(...numbersArray);

const UpdatedArray = numbersArray.map(function (element) {
  return element === maxValue ? element : 0;
});

console.log(
  `New array, with the numbers, that are not equal to maximum, updated to zero: ${UpdatedArray}.`
);

for (let newIndex = 0; newIndex < numbersArray.length; newIndex++) {
  if (numbersArray[newIndex] !== maxValue) {
    numbersArray[newIndex] = 0;
  }
}

console.log(`Initial array with the updated values: ${numbersArray}.`);

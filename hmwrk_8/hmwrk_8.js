// 1. Create the function removeElement(array, item) to remove the element item from the array.

function arrayChecker(array1, array2) {
  return array1.every((element, index) => element === array2[index]);
}

function removeElement(userArray, item) {
  const itemIndex = userArray.findIndex((element) => {
    if (typeof item !== "object" || item !== null) {
      return element === item;
    } else if (typeof item === "object") {
      return typeof element === "object" && arrayChecker(element, item);
    }
  });

  if (itemIndex !== -1) {
    return userArray.splice(itemIndex, 1);
  } else {
    alert(`${item} doesn't exist in the given array!`);
  }
}

const arrayNumbers = [1, 2, 3, 4, 5, 6, [7], 8];
removeElement((userArray = arrayNumbers), (item = [7]));
console.log(arrayNumbers);

// 2. Implement the function generateKey(length, characters) that returns a string of
//random characters from the characters set with the length chosen by the user.

function generateKey(length, characters) {
  const randomIndexes = [];
  for (let i = 0; i < length; i++) {
    randomIndexes.push(Math.floor(Math.random() * characters.length));
  }
  resultArray = randomIndexes.map((element) => characters[element]);
  return resultArray.join("");
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = generateKey(16, characters);
console.log(key);

// Create a function that removes from a string all the characters that are passed as the second argument.
//For example, func("hello world", ['l', 'd']) will return "heo wor".
//The input string and characters to be removed are specified by the user.

function cleaner(line, deleteValues) {
  const newLine = line
    .split("")
    .filter((element) => !deleteValues.includes(element));
  return newLine.join("");
}

console.log(cleaner("hello world", ["l", "d"]));

//4 Write a function that takes one parameter and keeps track of what was passed in the first time and so on, using closures.

const mySum = function (startingValue) {
  function sumReturner(newAddend) {
    return (startingValue += newAddend);
  }
  return sumReturner;
};

const sum = mySum(3);

console.log(sum(5));
console.log(sum(20));

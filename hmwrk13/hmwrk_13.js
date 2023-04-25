// 1

example = ["pro", "product", "procrastination"];

function commonPrefics(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty!");
  }

  //selecting shortest string in the array
  let prefix = arr.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });

  while (prefix.length > 0) {
    //checking if all elements have this prefix
    let updatedArr = arr.filter((element) => element.startsWith(prefix));
    if (updatedArr.length === arr.length) {
      break;
    }
    prefix = prefix.slice(0, -1);
  }

  if (prefix.length === 0) {
    throw new Error("No common prefix!");
  }

  return prefix;
}

// 1.1 

function commonPrefics2(arr) {
  let prefix = "";
  const firstWord = arr[0]
  for (let i = 0; i < firstWord.length; i++) {
    let letter = firstWord[i];
    for (let indx = 1; indx < arr.length; indx++) {
      if (!arr[indx].startsWith(prefix + letter)) {
        if (prefix === "") {
          throw new Error("No common prefix!");
        }
        return prefix;
      }
    }
    prefix += letter;
  }
  return prefix;
}

console.log(commonPrefics2(example));

// 2

function orderChange(array, size) {
  let flatArray = array.flat();
  //number of needed arrays in the final array
  let arraysNumber = Math.ceil(flatArray.length / size);

  let startNumb = 0;

  let resultArray = [];
  for (let i = 0; i < arraysNumber; i++) {
    resultArray.push(flatArray.slice(startNumb, startNumb + size));
    startNumb += size;
  }
  return resultArray;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
];
// yourFunc(arr, 5)

console.log(orderChange(arr, 4));
console.log(orderChange(arr, 5));

// 1

example = ["p", "product", "procrastination"];

function commonPrefics(arr) {
  if (arr.length === 0) {
    return "Array is empty!";
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

console.log(commonPrefics(example));

// 2

function orderChange(array, size) {
  let flatArray = array.flat();
  //number of needed arrays in arrays
  let arraysNumber = Math.ceil(flatArray.length / size);

  let startNumb = 0;

  let resultArray = [];
  for (let i = 0; i < arraysNumber; i++) {
    resultArray.push([flatArray.slice(startNumb, startNumb + size)]);
    startNumb += size;
  }
  return resultArray;
}

console.log(
  orderChange(
    [
      [1, 2, 3],
      [4, 5, 6],
      [1, 3, 4],
      [1, 3, 4],
    ],
    28
  )
);

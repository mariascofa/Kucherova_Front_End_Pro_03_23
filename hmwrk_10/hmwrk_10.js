// 1

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const uniqueValues = (arr) => {
  const uniqueArray = [];
  for (const elem of arr) {
    if (!uniqueArray.includes(elem)) {
      uniqueArray.push(elem);
    }
  }
  return uniqueArray;
};

console.log(uniqueValues(arr2));

// 2

const arr3 = [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5];

const maxCount = (arr) => {
  const amountKeys = {};
  for (const elem of arr) {
    amountKeys[elem] ? amountKeys[elem]++ : (amountKeys[elem] = 1);
  }
  maxValue = Math.max(...Object.values(amountKeys));
  for (const elementObj in amountKeys) {
    if (amountKeys[elementObj] === maxValue) {
      return elementObj;
    }
  }
};

console.log(maxCount(arr3));

//3

let y = 5;
let x = () => y;
//function x() doesn't take any arguments, so it will return global variable y

let z = (t) => {
  let y = 5;
  t();
};
//function z() doesn't return anything

z(x);
// The expression will return undefined, although z(x) will trigger function x, which returns the global variable y,
// the z() function itself doesn't return anything.

// 4

let someFunction = () => {
  console.log("success");
};

// someFunction()


function debounce(func, ms) {
  return () => {
    return setTimeout(() => func(), 10000);
  };
}

// setTimeout( () => someFunction(), 10000);
// setTimeout( () => someFunction(), 1000);
// setTimeout( () => someFunction(), 100);

let f = debounce(someFunction, 1000000);

f(1); // выполняется немедленно
f(2);
f(3);// проигнорирован
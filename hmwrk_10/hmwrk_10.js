// 1

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

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

function debounce(f, ms) {
  let onPause = false;

  return function () {
    console.log("new function started");
    if (onPause) {
      return;
    }

    f();

    onPause = true;

    setTimeout(() => {
      onPause = false;
    }, ms);
  };
}

let f = debounce(alert, 1000);

f(1); // executed
f(2); // ignored

setTimeout(() => f(3), 100); // ignored
setTimeout(() => f(4), 1100); // executed
setTimeout(() => f(5), 1500); // ignored

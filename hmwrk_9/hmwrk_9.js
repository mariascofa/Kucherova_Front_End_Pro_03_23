// 1

const newArray = [[[[8]]]];

function factorialOptionOne(input) {
  if (typeof input === "number") {
    if (input === 1) {
      return input;
    }
    return input * factorialOptionOne(input - 1);
  }
  return factorialOptionOne(input[0]);
}

console.log(factorialOptionOne(newArray));

//Second solution with reaching a number through a while

function factorialOptionTwo(input) {
  let num = input;
  while (Array.isArray(num)) {
    num = num[0];
  }
  if (num === 1) {
    return num;
  }
  return num * factorialOptionTwo(num - 1);
}

console.log(factorialOptionTwo(newArray));

// 2

let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = parseInt(prompt("Please enter first number"));
    this.b = parseInt(prompt("Please enter second number"));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

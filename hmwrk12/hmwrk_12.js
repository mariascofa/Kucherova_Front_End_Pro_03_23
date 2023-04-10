// 1

function alphabetChecker(string) {
  let englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let inputList = string.toLowerCase().split("");
  for (let elem of englishAlphabet.split("")) {
    if (!inputList.includes(elem)) {
      return false;
    }
  }
  return true;
}

console.log(alphabetChecker("wyyga")); // false
console.log(alphabetChecker("qwertyuioplkjhgfdsazxcvbnm")); // true
console.log(alphabetChecker("ejuxggfsts")); // false
console.log(alphabetChecker("qpwoeirutyalskdjfhgmznxbcv")); // true
console.log(alphabetChecker("qqqqqqqqpwoeirutyAlskdjfhgmznxbcv")); // true
console.log(alphabetChecker("0123456789abcdefghijklmnop")); // false

// 2

// function wordsCalculator(arr) {
//   const symbols = /[ ,.!?@#$%^&*()<>`~"'{}\/+_-]+/;
//   let sentenceArray = arr[0].split(symbols).filter(Boolean);
//   let totalLength = sentenceArray.reduce((acc, elem) => acc + elem.length, 0);
//   let averageLen = totalLength / sentenceArray.length;
//   const updatedArray = sentenceArray.filter((elem) => elem.length > averageLen);
//   return updatedArray;
// }

function wordsCalculator(arr) {
  this.allSentencesArr = [];
  arr.forEach((newSentence) => {
    const symbols = /[ ,.!?@#$%^&*()<>`~"'{}\/+_-]+/;
    let sentenceArray = newSentence.split(symbols).filter(Boolean);
    const totalLength = sentenceArray.reduce(
      (acc, elem) => acc + elem.length,
      0
    );
    let averageLen = totalLength / sentenceArray.length;
    let updatedArray = sentenceArray.filter((elem) => elem.length > averageLen);
    this.allSentencesArr.push(updatedArray);
  });
  return allSentencesArr;
}

console.log(
  wordsCalculator(["This is a sample string", "Do, do, do, do... do it!"])
); //expected [["This" "sample" "string"], []]
// console.log(wordsCalculator(["Some another sample"])); //expected ["another" "sample"]
// console.log(wordsCalculator(["Do, do, do, do... do it!"]));

// 3

const dataBase = {
  users: [],
  password: "password123",
};

const admin = {
  adminName: "Admin",
  __proto__: dataBase,
  // dbPassword : dataBase.password,
  email: "admin@gmail.com",
};

const user = {
  adminEmail: admin.email,
};

function Guest(name) {
  this.name = name;
}

Guest.prototype.register = function () {
  dataBase.users.push(this);
  this.__proto__ = user;
};

Bob = new Guest("Bob");
Bob.register();
console.log(dataBase.users);
Sam = new Guest("Sam");
Sam.register();
console.log(dataBase.users);

// 1)Проверьте что строка содержит все символы от "a" до "z"

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

// 2)Вам дано предложение, верните массив из слов,
//которые длинее чем средняя длина всех слов.
//Слова разделены пробелами, если в предложении запятые,они должны быть пропущены

// function wordsCalculator(arr) {
//   const symbols = /[ ,.!?@#$%^&*()<>`~"'{}\/+_-]+/;
//   let sentenceArray = arr[0].split(symbols).filter(Boolean);
//   totalLength = sentenceArray.reduce((acc, elem) => acc + elem.length, 0);
//   let averageLen = totalLength / sentenceArray.length;
//   const updatedArray = sentenceArray.filter((elem) => elem.length > averageLen);
//   return updatedArray;
// }

function wordsCalculator(arr) {
  this.allSentencesArr = [];
  updatedSentences = arr.map((newSentence) => {
    const symbols = /[ ,.!?@#$%^&*()<>`~"'{}\/+_-]+/;
    let sentenceArray = newSentence.split(symbols).filter(Boolean);
    const totalLength = sentenceArray.reduce((acc, elem) => acc + elem.length, 0);
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


// Сделайте 4 объекта - не усложняйте, просто наследование через __proto__
// - Пользователь - Верифицированный пользователь - Гость - База данных -
// База хранит информацию о пользователях
// Пользователи знают мыло админа
// Aдмин знает пароль от базы данных
// Гости могут зарегистрироваться в базе данных
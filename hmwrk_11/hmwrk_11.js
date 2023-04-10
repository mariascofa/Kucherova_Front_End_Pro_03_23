// 1)Найдите числа которые повторяются нечетное количество раз в массиве

function unevenCount(arr) {
  let countDict = {};
  let unevenCountArray = [];

  for (const elem of arr) {
    countDict[elem] ? countDict[elem]++ : (countDict[elem] = 1);
  }

  for (const element in countDict) {
    if (countDict[element] % 2 !== 0) {
      unevenCountArray.push(parseInt(element));
    }
  }
  return unevenCountArray;
}

console.log(unevenCount([12, 23, 34, 12, 12, 23, 12, 45]));

// 1.1

function unevenCountSet(arr) {
  let countSet = new Map();
  let unevenCountArray = [];

  for (const elem of arr) {
    countSet.has(elem)
      ? countSet.set(elem, countSet.get(elem) + 1)
      : countSet.set(elem, 1);
  }

  for (const [key, value] of countSet) {
    if (value % 2 !== 0) {
      unevenCountArray.push(key);
    }
  }
  return unevenCountArray;
}

console.log(unevenCountSet([12, 23, 34, 12, 12, 23, 12, 45]));

// 1.2

function unevenCountFilter(arr) {
  let countDict = {};
  for (const elem of arr) {
    countDict[elem] ? countDict[elem]++ : (countDict[elem] = 1);
  }
  let uniqueArr = Object.keys(countDict);
  let unevenCountArrayStr = uniqueArr.filter(
    (element) => countDict[element] % 2 !== 0
  );
  let unevenCountArrayInt = unevenCountArrayStr.map((element) => parseInt(element));
  return unevenCountArrayInt;
}

console.log(unevenCountFilter([12, 23, 34, 12, 12, 23, 12, 45]));

//2

function ezjQuery(tag) {
  this.firstTag = `<${tag}></${tag}>`;

  this.add = function (newTag, text = null) {
    let updatedTag;
    if (!text) {
      updatedTag = `<${newTag}></${newTag}>`;
    } else {
      updatedTag = `<${newTag}>${text}</${newTag}>`;
    }
    this.firstTag = this.firstTag.replace(`></`, `>${updatedTag}</`);
    return this;
  };
  this.render = function () {
    let renderedTag = this.firstTag;
    this.firstTag = `<${tag}></${tag}>`;
    return renderedTag;
  };
}

const textExample = new ezjQuery("body").add("ul").add("ul", "hello").render();
const textExample2 = new ezjQuery("body").add("div").render();
console.log(textExample2);

//2.1 Class example
class ezjQueryCl {
  constructor(tag) {
    this.tag = tag;
    this.firstTag = `<${tag}></${tag}>`;
  }
  add(newTag, text = null) {
    let updatedTag;
    if (!text) {
      updatedTag = `<${newTag}></${newTag}>`;
    } else {
      updatedTag = `<${newTag}>${text}</${newTag}>`;
    }
    this.firstTag = this.firstTag.replace(`></`, `>${updatedTag}</`);
    return this;
  }
  render = function () {
    let renderedTag = this.firstTag;
    this.firstTag = `<${this.tag}></${this.tag}>`;
    return renderedTag;
  };
}

const clsText = new ezjQueryCl("body").add("ul").add("ul", "hello").render();
console.log(clsText);
const clsText2 = new ezjQueryCl("body").add("div").render();
console.log(clsText2);

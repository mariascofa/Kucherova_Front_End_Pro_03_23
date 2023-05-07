import { nameFunction } from "./support.js";

const yourName = nameFunction();
const answerFunc = () => console.log(`The name is ${yourName}`);

document.getElementById("Name").addEventListener("click", () => answerFunc());

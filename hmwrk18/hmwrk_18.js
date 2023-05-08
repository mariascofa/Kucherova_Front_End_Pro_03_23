const inputDiv = document.querySelector("#inputArea");
const userInput = document.querySelector("#answerInput");

const helpDiv = document.createElement("div");
helpDiv.innerHTML =
  '<p style="color: rgb(21, 92, 76);"> Hint: The answer rhymes with "floor". </p>';

userInput.onfocus = () => {
  inputDiv.appendChild(helpDiv);
};

userInput.onblur = () => {
  if (inputDiv.contains(helpDiv)) {
    inputDiv.removeChild(helpDiv);
  }
  const inputValue = userInput.value;
  if (inputValue) {
    console.log(inputValue);
  }
};

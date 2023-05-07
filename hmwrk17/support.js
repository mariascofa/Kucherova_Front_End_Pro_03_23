const nameFunction = () => {
  let userName = prompt("Please enter your name:");

  if (!userName) {
    alert("You didn't enter a name. Please try again.");
    userName = prompt("Please enter your name:");
  }
  return userName;
};

export { nameFunction };

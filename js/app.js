const numberOfDices = prompt("How many dices you wanna throw buddy ?");
const playerDiv = document.querySelector("#player");
const dealerDiv = document.createElement("div");
dealerDiv.classList.add("board");
dealerDiv.id = "dealer";
playerDiv.parentNode.appendChild(dealerDiv);

for (let i = 0; i < numberOfDices; i++) {
  throwDice(playerDiv);
  throwDice(dealerDiv);
}

function throwDice(target) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("dice");
  target.appendChild(newDiv);
  const randomDice = Math.ceil(Math.random() * 6);
  const randomBackgroundPositionString = (-randomDice * 100).toString() + "px";
  newDiv.style.backgroundPosition = randomBackgroundPositionString;
}

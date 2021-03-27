const number = document.getElementById("number");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");

minus.addEventListener("click", subtract);
plus.addEventListener("click", add);
reset.addEventListener("click", startOver);

function subtract() {
  let currentNumber = number.innerHTML;
  if (currentNumber > 0) {
    number.innerHTML = Number(currentNumber) - 1;
  }
}
function add() {
  let currentNumber = number.innerHTML;
  number.innerHTML = Number(currentNumber) + 1;
}
function startOver() {
  number.innerHTML = 0;
}
document.addEventListener("keydown", keyboard);
function keyboard(event) {
  if (event.key === "a" || event.key === "+") {
    add();
  } else if (event.key === "s" || event.key === "-") {
    subtract();
  } else if (event.key === "r" || event.key === "0") {
    startOver();
  }
}

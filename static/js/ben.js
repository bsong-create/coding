let number = document.getElementById("number");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");


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

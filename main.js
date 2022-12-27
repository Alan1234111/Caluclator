// Uzytkownik wprowadza liczbe
// liczba ta zapisywana jest jako operateNumber
// jesli uzytkownik nacisnie jakis operator
//   do liczby z total zostaje wykonana akcja z operatora
//   w result wyswietlana jest liczba total
//   w inputUser wyswietlana jest liczba total wraz z operatorem

const allButtons = document.querySelectorAll(".buttons button");
const operationsInput = document.querySelector(".operations-input");
const result = document.querySelector(".result");

let operator = [];
let operateNumber = 0;
let total = null;
let mathOperation = "";

function displayOperations() {
  operationsInput.textContent = `${total} ${operator[0]}`;
  result.textContent = total;
}

function displayResult() {
  operationsInput.textContent = mathOperation;
  result.textContent = total;
}

function equals() {
  if (total == null) {
    total = operateNumber;
    operateNumber = 0;
  }

  if (operateNumber == 0) return;

  parseTotal = parseFloat(total);
  parseOperateNumber = parseFloat(operateNumber);

  switch (operator[0]) {
    case "+":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal + parseOperateNumber;
      operateNumber = 0;
      displayOperations();
      break;
    case "-":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal - parseOperateNumber;
      operateNumber = 0;
      displayOperations();
      break;
    case "x":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal * parseOperateNumber;
      operateNumber = 0;
      displayOperations();
      break;
    case "/":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal / parseOperateNumber;
      operateNumber = 0;
      displayOperations();
      break;
    case "%":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal % parseOperateNumber;
      operateNumber = 0;
      displayOperations();

      break;
  }
}

function operate() {
  if (this.dataset.type == "number") {
    operateNumber == 0 ? (operateNumber = this.value) : (operateNumber += this.value);
    result.textContent = operateNumber;
  }

  if (this.dataset.type == "decimal") {
    if (operateNumber.includes(".")) return;
    operateNumber += ".";
    result.textContent = operateNumber;
  }

  if (operateNumber == 0 && this.value == "/") return alert(`You can't divide by 0`);

  if (this.dataset.type == "operator") {
    // debugger;
    switch (this.value) {
      case "+":
        equals();
        operator = [];
        operator.push(this.value);
        equals();
        displayOperations();
        break;
      case "-":
        equals();
        operator = [];
        operator.push(this.value);
        equals();
        displayOperations();
        break;
      case "x":
        equals();
        operator = [];
        operator.push(this.value);
        equals();
        displayOperations();
        break;
      case "/":
        equals();
        operator = [];
        operator.push(this.value);
        equals();
        displayOperations();
        break;
      case "%":
        equals();
        operator = [];
        operator.push(this.value);
        equals();
        displayOperations();
        break;
    }
  }

  if (this.dataset.type == "equals") {
    if (operateNumber == 0 && operator[0] == "/") return alert(`You can't divide by 0`);
    mathOperation = "";
    equals();
    displayResult();
  }

  if (this.dataset.type == "reset") {
    operator = [];
    operateNumber = 0;
    total = null;
    mathOperation = "";
    displayResult();
  }

  if (this.dataset.type == "clear") {
    if (operateNumber == 0) return;
    operateNumber = operateNumber.slice(0, -1);
    result.textContent = operateNumber;
  }
}

allButtons.forEach((button) => button.addEventListener("click", operate));

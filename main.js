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
let operateNumber = null;
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
    operateNumber = null;
  }

  if (operateNumber == null) return;

  parseTotal = parseInt(total);
  parseOperateNumber = parseInt(operateNumber);

  switch (operator[0]) {
    case "+":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal + parseOperateNumber;
      operateNumber = null;
      displayOperations();
      break;
    case "-":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal - parseOperateNumber;
      operateNumber = null;
      displayOperations();
      break;
    case "x":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal * parseOperateNumber;
      operateNumber = null;
      displayOperations();
      break;
    case "/":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal / parseOperateNumber;
      operateNumber = null;
      displayOperations();
      break;
    case "%":
      mathOperation = `${total} ${operator[0]} ${operateNumber} =`;
      total = parseTotal % parseOperateNumber;
      operateNumber = null;
      displayOperations();

      break;
  }
}

function operate() {
  if (this.dataset.type == "number") {
    operateNumber == null ? (operateNumber = this.value) : (operateNumber += this.value);
    result.textContent = operateNumber;
  }

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
    mathOperation = "";
    equals();
    displayResult();
  }
}

allButtons.forEach((button) => button.addEventListener("click", operate));

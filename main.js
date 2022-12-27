//   operate
//    1. sprawdza jaka uzytkownik wprowadzil 1 liczbe i zapisz w tablicy
//    2. jesli jest to liczba dodaj ja jako total
//    3. jesli jest to operator sprawdz jaki
//    4. odowolaj do zewnetrznej funkcji

///  add
//    1. jesli nie ma podancyh dwoch liczb zwraca

const allButtons = document.querySelectorAll(".buttons button");
const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");

let operateNumber = 0;
let total = 0;

function displayResult() {
  result.textContent = total;
}

function add() {
  if (operateNumber === 0) return;

  total += parseInt(operateNumber);
  displayResult();
}

function substract() {}

// 1. Sprawdza jaki to jest typ buttona
// 2.  Jesli jest to number
//     a) dodaje do operateNumber
// 3.  jesli jest to operator
//     a) sprawdza jaki jest ot operator\
//     b) do kazdego operatora przypisuje jakas funkcje
//     d) resetuje operateNumber

function operate() {
  if (this.dataset.type === "number") {
    operateNumber == 0 ? (operateNumber = this.value) : (operateNumber += this.value);
    console.log(operateNumber);
  }

  if (this.dataset.type === "operator") {
    if (total === 0) {
      total = parseInt(operateNumber);
      operateNumber = 0;
    }

    add();
    operateNumber = 0;
  }
}

allButtons.forEach((button) => button.addEventListener("click", operate));

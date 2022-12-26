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

let numbersArray = [];
let operateNumber = 0;
let total = 0;

function displayResult() {
  result.textContent = total;
}

function add() {
  // if (total == 0) return;

  total = numbersArray.reduce((total, number) => {
    return (total += number);
  });
  displayResult();
}

function operate() {
  const buttonType = this.dataset.type;

  if (buttonType === "number") {
    operateNumber == 0 ? (operateNumber = this.value) : (operateNumber += this.value);
  }
  numbersArray[0] = parseInt(operateNumber);
  numbersArray[1] = parseInt(total);

  console.log(total);
  console.log(numbersArray);
  userInput.textContent = operateNumber;

  if (buttonType === "operator") {
    operateNumber = 0;
    switch (this.value) {
      case "+":
        add();
        break;
      case "-":
        console.log("+");
        break;
      case "x":
        console.log("+");
        break;
      case "/":
        console.log("+");
        break;
      case "%":
        console.log("+");
        break;
    }
    operationNumber = 0;
  }

  if (buttonType === "equals") equals();
}

// let total = 0;
// let operationNumber = 0;
// let parseNumber = 0;

// function equals() {
//   result.textContent(total);
// }

// function add() {
//   if (total === 0) {
//     total = parseNumber;
//     parseNumber = 0;
//   }

//   total += parseNumber;
// }

allButtons.forEach((button) => button.addEventListener("click", operate));

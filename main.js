// reduce works on an array

// if operations === *
//   return total * number

//take all buttons
// if user click the button operation
//     add number to an array

const allButtons = document.querySelectorAll(".buttons button");

const numberToOperate = [2, 5, 6];
const operations = ["+", "*"];

// numberToOperate.reduce((total, numbers) => {});
function operate() {
  console.log("dzial");
}

allButtons.forEach((button) => button.addEventListener("click", operate));

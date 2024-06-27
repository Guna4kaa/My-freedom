// Задание 1
// const inputField = document.getElementById('textInput');
// const keyList = document.getElementById('keyList');

// inputField.addEventListener('keydown', function(event) {
//     const newItem = document.createElement('li');
//     newItem.textContent = event.key;
//     keyList.appendChild(newItem);
// });

// Задание 2
// const inputField = document.getElementById('textInput');

// inputField.addEventListener('keyup', function() {
//     console.log(inputField.value);
// });

// Задание 3
// const inputField = document.getElementById("textInput");
// const keyList = document.getElementById("keyList");
// const form = document.getElementById("textInputForm");

// form.addEventListener("submit", function () {
//   event.preventDefault();
//   const textValue = inputField.value.trim();
//  if (textValue !== "") {
//     const newItem = document.createElement("li");
//     newItem.textContent = textValue;
//     keyList.appendChild(newItem);
//   }

//    inputField.value = "";
// });

// Задание 4
// // 1. с помощью IF
// const form = document.getElementById("calculatorForm");
// const num1Input = document.getElementById("num1");
// const num2Input = document.getElementById("num2");
// const operationSelect = document.getElementById("operation");
// const resultDiv = document.getElementById("result");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const num1 = parseFloat(num1Input.value);
//   const num2 = parseFloat(num2Input.value);
//   const operation = operationSelect.value;

//   let result;

//   if (operation === "add") {
//     result = num1 + num2;
//   } else if (operation === "subtract") {
//     result = num1 - num2;
//   } else if (operation === "multiply") {
//     result = num1 * num2;
//   } else if (operation === "divide") {
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Деление на ноль!";
//     }
//   } else {
//     result = "Выберите операцию";
//   }

//   resultDiv.textContent = `Результат: ${result}`;
// });

// // 2. с помощью eval
// const formEval = document.getElementById("calculatorFormEval");
// const num1InputEval = document.getElementById("num1Eval");
// const num2InputEval = document.getElementById("num2Eval");
// const operationSelectEval = document.getElementById("operationEval");
// const resultDivEval = document.getElementById("resultEval");

// formEval.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const num1 = parseFloat(num1InputEval.value);
//   const num2 = parseFloat(num2InputEval.value);
//   const operation = operationSelectEval.value;

//   let result;

//   try {
//     result = eval(`${num1} ${operation} ${num2}`);
//     resultDivEval.textContent = `Результат: ${result}`;
//   } catch (error) {
//     resultDivEval.textContent = "Ошибка в вычислениях";
//   }
// });

// Задание 5
// function changeColorAndRotate(button) {
//     const randomColor = getRandomColor();
//     button.style.backgroundColor = randomColor;

//     const randomAngle = getRandomAngle();
//     button.style.transform = `rotate(${randomAngle}deg)`;
//     button.classList.add('rotate'); 
// }

// function rotateBack(button) {
//     button.style.transform = ''; 
//     button.classList.remove('rotate'); 
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function getRandomAngle() {
//     return Math.floor(Math.random() * 361) - 180; 
// }
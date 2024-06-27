// Домашнее задание по уроку "2. Циклы. Функции"


// Задание 1 (2)
// let country = 'Sweden';
// let access;
// access = (country == 'Sweden') ? 'true' : 'false'
// console.log(access);


// Задание 2
// let a = 10
// for(let i = 0; i<10; i++){
//     console.log(a);
//     a ++;
// }
// console.log(a)


// Задание 3
// for(let i = 0; i <= 8; i +=2 ){
//     const num1 = +prompt ('Input number')
//     console.log(num1 === 10 ? 'Равно 10' : 'Не равно 10');
// }


// Задание 4
// for(let i = 0; i <= 9; i++) {
//     let a = +prompt ('Input number')
//     console.log(a**2);
// }


// Задание 5
// for (let i=0; i<=100; i++){
//     console.log(i);
//     if(i % 3 == 0){
//         console.log('Fizz');
//     }
//     else if (i % 5 == 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log('FizzBuzz');
//     }
// }


// Задание 6
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//     }

// let i = 0
// while (i<3){
//     alert( `number ${i}!` );
//     i++
// }


// Задание 7 
// function perfectSquare(min, max) {
 //   for(let i = min; i <= max; i++) {
//     console.log(`Квадрат числа - ` + i + " равно: ", i**2);
//   }
// }
// const min = parseInt(prompt("Введите начальное значение (min):"));
// const max = parseInt(prompt("Введите конечное значение (max):"));
// perfectSquare(min, max);


// Задание 8
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }

// function generateRGBcolor (num1, num2, num3){
//     return `rgb(${num1}, ${num2}, ${num3})`
// }

// const randomNum1 = getRandomInteger (0, 255)
// const randomNum2 = getRandomInteger (0, 255)
// const randomNum3 = getRandomInteger (0, 255)

// const result = generateRGBcolor (randomNum1, randomNum2, randomNum3)
// console.log(result);


// Задание 9
// function checkIntegralNum(num1) {
//   for (let i = 1; i < num1; i += 0.5) 
//   if (i % 1 == 0) {
//     console.log(i + ' integer');
//   }
//   else {
//     console.log(i + ' decimal');
//   }
  
// }
// checkIntegralNum(5);


// Задание 10
// function calcPrice (price, day){
//     let result = price * day
//     if (day >= 7){
//         let sum = result - 50
//         console.log(`Итоговая сумма за ${day} дней составялет ${result}.`, 
//         `С учетом скидки 50$ итоговая сумма составляет: `, sum, `$`);
//     }
//     else if (day >= 3 ){
//         let sum1 = result - 20
//         console.log(`Итоговая сумма за ${day} дней составялет ${result}.`, 
//         `С учетом скидки 20$ итоговая сумма составляет: `, sum1, `$`);
//     }
//     else {  
//         console.log(`Итоговая сумма за ${day} дней составялет ${result}.`);
//     }
// }
// calcPrice (40, 1)
// calcPrice (40, 2)
// calcPrice (40, 3)
// calcPrice (40, 5)
// calcPrice (40, 7)
// calcPrice (40, 10)
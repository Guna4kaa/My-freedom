// Тернарный оператор (сокращенный if else)
// let age = 16
// // if (age >= 18) {
// //     console.log("Welcome");
// // }
// // else {
// //     console.log('You are too young')
// // }

// // Можно сократить до этих варинатов:
// // 1.
// // console.log((age>=18) ? 'Welcome' : 'You are too young');
// // 2.
// age>=18 ? console.log('Welcome') : console.log('You are too young');

// Можно хранить значения в переменной
// let age = 18
// let result = (age>=18) ? 'Welcome' : 'You are too young'
// console.log(result); 


// Задание 1 (2)
// let country = 'Sweden';
// let access;
// access = (country == 'Sweden') ? 'true' : 'false'
// console.log(access);


// Циклы

// 1. FOR
// for(let i = 0; i<10; i = i+2) { //можно сократить: i += 1 or i++ (i--)
//     console.log('Hello');
// }

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


// 2. Цикл "while" и "do...while"
    
// "while"
// let i = 0
// while (i < 10){
//     console.log('Hello');
//     i++
// }

// "do...while"
// let i = 0
// do {
//         console.log('Hello');
//         i++
//     } while (i < 10)


// Задание 6
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//     }

// let i = 0
// while (i<3){
//     alert( `number ${i}!` );
//     i++
// }    


// 3. Функции

// 1
// function sayHello (myName = 'Неизвестно', mySurname = 'Неизвестно'){
//     console.log(`Hello, ${myName} ${mySurname}!`);
// }

// sayHello('Guna', 'Assubekova')
// sayHello('Gulnar')
// sayHello('Anar', 'Assubekova')
// sayHello('Dauren', 'Serik')

// 2
// function sayHello (myName = 'Неизвестно', mySurname = 'Неизвестно'){
//     return `Hello, ${myName} ${mySurname}!`;
// }

// const result1 = sayHello('Guna', 'Assubekova')
// const result2 = sayHello('Gulnar')
// const result3 = sayHello('Anar', 'Assubekova')
// const result4 = sayHello('Dauren', 'Serik')

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// Задание (Создать калькулятор)
// function calculate(num1, operator, num2){
//     if (operator === "+"){
//         console.log(num1+num2);
//     }
//     else if(operator === "-"){
//         console.log(num1-num2);
//     }
//     else if(operator === "*"){
//         console.log(num1*num2);
//     }
//     else{
//         console.log('оператор не найден');
//     }
// }

// calculate(5,'/',10)

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
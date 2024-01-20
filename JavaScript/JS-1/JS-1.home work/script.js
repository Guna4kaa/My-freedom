//Задание 1
// const yourName = prompt ('Ваше имя') 
// alert (`Привет, ${yourName}!`)
// console.log(yourName)

//Задание 2
// const number = prompt ('Введите число') 
// const exponent = prompt ('В какую степень вывести число?')
// console.log(number ** exponent)


// Задание 4
// let myText = "my text"
// if (myText === "some text") {
//     myText = 'another text'
// }
// else {
//     myText = 'some text'
// }
// console.log(myText);

//Задание 5
// let number = 2
// if(number === 0) {
//     number = 1
// }
// else if (number < 0) {
//     number = 'less then zero'
// }
// else if (number > 0) {
//     number = number *=10
// }

// console.log(number);

// Задание 6
// const num1 = +prompt ('Input number')
// let result
// if (num1<5) {
//     result = 0
// }
// else {
//     result = 1
// }
// console.log(result);

// Задание 7
// const num1 = +prompt ('Input num1')
// const num2 = +prompt ('Input num2')
// if (num1>num2) {
//     console.log('Большее число:' + num1);
// }
// else if (num1<num2) {
//     console.log('Большее число:' + num2)
// }
// else {
//     console.log('Числа равны')}

// Задание 8
// const num1 = +prompt ('Input num1')
// const num2 = +prompt ('Input num2')
// console.log(num1%num2);

// Задание 9
// const gpa = +prompt ('Укажите средний балл аттестата')
// if (gpa>=1 && gpa<=4) {
//     console.log('Двоечник, иди учись');
// }
// else if (gpa >= 5 && gpa <= 8) {
//     console.log ('Неплохо, но давай еще поднажмем!')
// }
// else if (gpa >= 9 && gpa <= 10) {
//     console.log ('Ого, да ты настоящий отличник!')
// }
// else {
//     console.log ('Введите числа от 0 до 10')
// }

// Задание 10
// const gpa = prompt ('Введите балл за экзамен')
// const project = prompt ('Количество выполненных проектов')
// if (gpa >= 90 || project >= 10){
//     console.log(100);
// }
// else if (gpa >= 75 && project >= 5){
//     console.log(90);
// }
// else if (gpa >= 50 && project >= 2){
//     console.log(75);
// }
// else {
//     console.log(0)
// }

// Задание 11
// const rent = +prompt ('Введите количество дней аренды авто')
// const day = 40
// let total

// if (rent >= 7){
//     total = (rent * day)-50
// }
// else if (rent >= 3) {
//     total = (rent * day)-20
// }
// else {
//     total = (rent * day)
// }
// console.log(total);
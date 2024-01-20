// // console.log('First lesson MyFreedom');

// // Создание переменной
// // let myName = "Gulnar"
// // console.log(myName);
// // let - объявлять (создать) переменную (declaration)
// // myName - название переменной
// // = "" - присваивание значений

// // camelCase - myName


// // ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ (простые)
// // 1. STRING (строка, текст)
// const text1 = "some text"

// // 2. NUMBER (число)
// const num1 = 5
// const num2 = 1000
// const num3 = 0.5

// // 3. BOOLEAN (булевое, правда, ложь)
// const isHeSmart = true
// const isHeNotSmart = false

// // 4. UNDEFINED (неопределено)
// let someUndefinedVariable

// // 5. BIG INT (большие числа)
// const bigInt = 21324324112313n
// console.log(typeof 5)
// console.log(5)
// console.log(typeof bigInt)
// console.log(bigInt)

// // 6. SYMBOL 
// const symb = Symbol("hello")
// console.log(symb)



// НЕ РИМИТИВНЫЕ ТИПЫ ДАННЫХ (сложные)
// 1. OBJECT 
// const user = {
//     name: "Gulnar",
//     surname: "Assubekova",
//     age: "35",
//     sayHello: () => {console.log ('hello')} функция
// }
// console.log(user.sayHello ());

// 1.1 - ARRAY (массив, список)
// const students = ['Sabit', 'Gulnar', 'Serik']
// console.log(students);
// console.log(students [1]);

// 2. NULL (объект, пустота)
// const num1 = undefined
// const num2 = null



// РАБОТА С БРАУЗЕРОМ
// ALERT (окно с дефолтным сообщением)
// alert('HELLO WORLD')

// PROMPT (окно с заполнением)
// const age = prompt('Your age')
// console.log(age);
  //если надо значение отобразить в числовом формате, то добавить "Number" или "+":
// console.log(Number(age));
// console.log(+age);

// CONFIRM (возвращает булеан тру/фолс)
// const isStudent = confirm('Are you a student?')
// console.log(isStudent);



// ОПЕРАТОРЫ
// 1. Арифметические операторы
// +, -, *, %

// +
// console.log(5+10);
// console.log('5'+'10')
// console.log('5'+10) //при плюсе цифры и строки, выходит строка: 510
// console.log('Guna'+' '+'Assubekova')
// // -
// console.log(5-10);
// console.log('5'-'10') //при минусе строк, выходит цифра: -5
// console.log('5'+10) //при минусе цифры и строки, выходит цифра: -5
// console.log('Guna'-' Assubekova') //выйдет NaN

// // "/"
// console.log(5/10);
// console.log(5/0) //выйдет infinity

// // "*"
// console.log(5*10);
// console.log(5*0) //выйдет "0"

// // "%" - модуль (остаток)
// console.log(5%10);
// console.log(13%5) //выйдет "3"


// 2. Логические операторы
// "==" (boolean)
// console.log(5 == 5); //true
// console.log(7 == 5); //false
// console.log(5 >= 5); //true
// console.log(5 != 5); //false
// console.log(10 != 5); //true

// console.log(5 == '5'); //true
// console.log(5 === '5'); //false
// console.log(5 !== '5'); //true
// console.log(undefined == null); //true
// console.log(undefined === null); //false

// СЛОЖЕНИЕ С ПРИСВАИВАНИЕМ
// let num = 5
// num = num + 5 //or num += 5
// num = num + 5
// console.log(num);


// КОНКАТЕНАЦИЯ СТРОК ("строка" + "строка")
// const myName = 'Gulnar'
// console.log('Hello, ' + myName + "!");
// console.log(`Hello, ${myName}!`);

// console.log(`\t hello,\n "Zhanna"`)
// console.log("Hello, \"Sasha\"");


// ОПЕРАТОРЫ "И"/"ИЛИ"
//&& - and - оба сравниваемых значения должны быть одинаковыми
// console.log(true && true); //true
// console.log(false && true); //false
// console.log(true && false); //false
// console.log(false && false); //false
// // || - or - из обоих сравниваемых значений, хотя бы одно должно совпадать 
// console.log(true || true); //true
// console.log(false || true); //true
// console.log(true || false); //true
// console.log(false || false); //false



// IF ELSE (УСЛОВИЯ)

// if = (false)
// if (5>7) { //если if = (false) -> ничего не будет работать
//     console.log('верно');
// }

// if = (true)
// if (5<7) { //если if = (true) -> консоль выдаст верное сообщение
//     console.log('верно');
// }

// if, else
// if (5<7) { //если if = (false) -> ничего не будет работать
//     console.log('верно');
// }
// else {
//     console.log('Не верно')
// }

// if, if else, else
// let num1 = 7
// let num2 = 7

// if (num1 < num2) { 
//     console.log(`${num1} < ${num2}`);
// }
// else if (num1 > num2) {
//     console.log (`${num1}>${num2}`)
// }
// else {
//     console.log(`Числа равны`)
// }
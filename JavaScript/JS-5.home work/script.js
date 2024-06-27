// Домашнее задание по уроку "5. Методы строк и массивов"

// Задание 1 - (Написать функцию, которая принимает два параметра и складывает их.)
// function sumElements (num1, num2){
//     if (num1 == undefined || num2 == undefined){
//         return "введите два параметра";
//     }
//     else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return "введенные данные не являются числами";
//     }
//     return num1 + num2
// }
// console.log(sumElements (2, 4));
// console.log(sumElements ('d', 4));
// console.log(sumElements (4));
// console.log(sumElements());
// console.log(sumElements(0, 0));


// Задание 2
// function square(a) {
//     if (a === undefined){
//         return `Uncaught Error: Функция "square" не может быть вызвана без аргумента`
//     }
//     return a * a
//   }
  
//   console.log(square(10));
//   console.log(square());


// Задание 3
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }

// const d = prompt ('Введите число')
// const guessNum = (a,b) => (a,b)
 
// const randomNum1 = getRandomInteger (1, 10)
// const randomNum2 = getRandomInteger (1, 10)

// const result = guessNum (randomNum1, randomNum2)
// console.log(result);

// if (d == result){
//     console.log('Вы выиграли');
// }
// else {console.log(`Вы не угадали, ваше число -  ${d},  а выпало число ${result}`);}


// Задание 4
// const citiesArr = ['Astana', 'Almaty', 'Taldykorgan', 'Shymkent', 'Taraz', 'Karagandy']
// // methodMap
// const newCitiesArr = citiesArr.map (value => value)
// console.log(newCitiesArr);

// // methodForEach
// const newCitiesArr2 = []
// citiesArr.forEach(Element => newCitiesArr2.push (Element))
// console.log(newCitiesArr2);


// Задание 5
// methodMap
// const names = ['Anna', 'Oleg', 'Rashid', 'Petr', 'Magzhan', 'Gulnar']
// const newNames = names.map (value => `Hello, ${value}`)
// console.log(newNames);

// // methodForEach
// const helloNames = []
// names.forEach(value => helloNames.push (`Hello, ${value}!`));
// console.log(helloNames);


// Задание 6
// const users = [
//     {
//         name: 'Anna',
//         age: 26,
//         email: 'anna@mail.ru'
//     },
//     {
//         name: 'Dan',
//         age: 36,
//         email: 'dan@mail.ru'
//     },
//     {
//         name: 'Oleg',
//         age: 50,
//         email: 'oleg@mail.ru'
//     },
//     {
//         name: 'Maria',
//         age: 18,
//         email: 'maria@mail.ru'
//     }
// ]
// // methodForEach
// const newUsers = []
// users.forEach (value => newUsers.push (value.name))
// console.log(newUsers);

// // methodMap
// const namesUsers = users.map (value => value.name)
// console.log(namesUsers);


// Задание 8
// const ucFirst = (str) => {
//     const firstLetter = str[0]
//     const firstLetterUpper = firstLetter.toUpperCase()
//     const stringSlice = str.slice(1)
//     const result = firstLetterUpper + stringSlice

//     console.log(firstLetter);
//     console.log(firstLetterUpper);
//     console.log(stringSlice);
//     console.log(result);
// }
// ucFirst('привет')

// можно сократить до:
// const ucFirst = (str) => str[0].toUpperCase() + str.slice(1)



// Задание 9
// const checkSpam = (str) => {
//     const strRegister = str.toLowerCase()
//     return strRegister.includes('badword') || strRegister.includes('xxx')
    
// }
// console.log(checkSpam('Здравствуйте, вас приветствует bAdword.'))


// Задание 10
// const str = 'привет, Женя'

// const strReverse = (str) => {
//     let reverseStr = ''
//     for (let i = str.length - 1; i >= 0;  i--){
//         reverseStr += str[i]
//     }
//     return reverseStr
// }
// console.log(strReverse(str))


// Задание 11
// const stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly',
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
//     ];
// // 1-й вариант:
//     for (const station of stations) {
//         const code = station.slice(0,3)
//         const stationName = station.split(';')[1]
//         console.log(`${code}: ${stationName}`);
//     }
    
// // 2-й вариант:
// for (const station of stations) {
//     const code = station.slice(0,3)
//     const stationName = station.slice(station.indexOf(';')+1)
//     console.log(`${code}: ${stationName}`);
// }


// Задание 12
// const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// const uniq = strings.reduce((acc, item) => {
//         if (acc.includes(item)) {
//             return acc;
//           }
//           return [...acc, item];
//     }, []); 
// console.log(uniq);


// Задание 13 - НАДО ДОДЕЛАТЬ!!!
// const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]

// const  verifyCats = () => {
//     for (const ages of catsJane) {
//         console.log(ages);
//     }
//     catsJane2.push ((catsJane.pop() && catsJane.shift))
    
//     return catsJane2
// }
// verifyCats()

// console.log(catsJane2);



// Задание 14
// let arr = [5, 4, 3, 8, 0];
// const filterFor = (arr, a) => {
//     const filteredArr = arr.filter ((element) => element >= a)
//     return filteredArr
// }
// console.log(filterFor (arr, 5))
// console.log(filterFor (arr, 10))
// console.log(filterFor (arr, 3.11))



// Задание 15
// const filterArrayByStringLength = (arr) => {
//     const filteredArr = arr.filter ((element) => element.length >= 3)
//     return filteredArr
// }
// console.log(filterArrayByStringLength(['yes', 'hello', 'no', 'easycode', 'what']));

// Задание 16
// const nums = [ 
//     [14, 45], 
//     [1], 
//     ['a', 'c', 'd'] 
// ]

// const sortedNums = nums.sort((a,b) => a.length - b.length) 
// console.log(sortedNums);
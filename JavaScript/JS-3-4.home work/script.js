// Домашнее задание по уроку "3-4. Объекты и массивы"

// Задание 2
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000,
//     Guna: 10000
//     }
// for (let property in engineers){
//     console.log('Заработная плата ' + property + ' составляет ' + engineers [property] + ' рублей.');
// }

// Задание 3
// const alhpabet = ['a', 'b', 'c', 'd', 'e']
//     for(let i = 0; i < alhpabet.length; i+=2){
//         console.log(alhpabet[i]);
//     }

// Задание 4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// for (let i = 0; i < numbers.length; i++){
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
// }

// Задание 5
// const questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//   },
// ];

// for (const value of questions) {
//     value.usersAnswer = null
     
// }
// console.log(questions);


// Задание 6
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 6.1 - (Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком)
// for (const elements of numbers) {
//     console.log(elements);   
// }

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


// 6.2 - (Посчитать и вывести в консоль сумму элементов в массиве)
// let sum = 0
// for (let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i]
// }
// console.log(sum);


// 6.3 - (Посчитать и вывести в консоль сумму только четных чисел в массиве)
// let sum = 0
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 == 0){
//         sum = sum + numbers[i]
//         console.log(sum);
//     }
// }


// 6.4 - (Найти и вывести в консоль максимальное число массива)
// function max (arrayOfNumbers){
//     let maxResult = arrayOfNumbers [0]
//     for (const number of arrayOfNumbers) {
//         if (number > maxResult){
//             maxResult = number
//         }
//     }
//     return maxResult
// }


// console.log(max(numbers));


// 6.5 - (Определить и вывести в консоль индекс максимального числа массива )
// function maxIndex (arrayOfNumbers){
//     let maxResult = arrayOfNumbers[0];
//     let index = 0;
//     for (let i = 0; i<arrayOfNumbers.length; i++) {
//         if (maxResult < arrayOfNumbers[i]){
//             maxResult = arrayOfNumbers[i];
//             index = i
//         }
//     }
//     return index
// }
// console.log(maxIndex(numbers));


// 2-й вариант
// let maxNumber = numbers[0]
// let maxIndexes = []

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] === maxNumber)
//     maxIndexes.push(i)

// else if (numbers[i] > maxNumber){
//     maxNumber = numbers[i]
//     maxIndexes = [i]
// }
// }
// console.log(maxNumber);
// console.log(maxIndexes);



// Задание 7
// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// let newArr = []

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] >= 0){
//             newArr.push(arr[i])
//         }
//     }

// console.log(arr);
// console.log(newArr);



// Задание 8
// const nums = [5, 4, 3, 8, 0]
// let limit = 5
// let moreThanLimit = []

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] >= limit){
//         moreThanLimit.push(nums[i])        
//     }
// }
// console.log(nums);
// console.log(moreThanLimit);


// Задание 9 - (Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15)
// const users = [
//     {name: 'Vasya', age: 23}, 
//     {name: 'Olya', age: 12}, 
//     {name: 'Anna', age: 22}, 
//     {name: 'Alex', age: 18}, 
//     {name: 'Valery', age: 8}
// ]

// for (const data of users) {
//     if (data.age > 15){
//         console.log(data.name);
//     }
// }


// Задание 10
// const vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// let newArray = []

// for (let i = 0; i < vegetables.length; i++){
//     let string = vegetables[i]
//     let objects = {word: vegetables[i], length: string.length}
    
//     newArray.push(objects)
// }
// console.log(newArray);

// for (const objects of newArray) {
//     console.log(objects.word + "-" + objects.length);    
// }


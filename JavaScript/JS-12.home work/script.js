// Задание 1

// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// const [firstName, secondName, ...otherNames] = names;

// console.log(`Первое имя: ${firstName}`);
// console.log(`Второе имя: ${secondName}`);

// console.log('Остальные имена:');
// otherNames.forEach(name => console.log(name));


// Задание 2
// const names = ['Alice', 'Bob', 'Charlie'];

// function printNames([first, second, third]) {
//   console.log(`Первое имя: ${first}`);
//   console.log(`Второе имя: ${second}`);
//   console.log(`Третье имя: ${third}`);
// }

// printNames(names);

// Задание 3
// Задание объекта с полями
// const obj = {
//     field1: 'Value 1',
//     field2: 'Value 2',
//     field3: 'Value 3',
//     field4: 'Value 4'
//   };
  
//   const { field1 = 1, field2 = 2, ...fields } = obj;
//   console.log(`Переменная field1: ${field1}`);
//   console.log(`Переменная field2: ${field2}`);
//   console.log('Остальные поля объекта:');
//   console.log(fields);
  
// Задание 4
// function meanScore(...args) {
//     const allNumbers = args.every(arg => typeof arg === 'number');
  
//     if (!allNumbers) {
//       return("Все аргументы в вызове функции должны быть числами!");
      
//     }
  
//     const sum = args.reduce((acc, val) => acc + val, 0);
//     const average = sum / args.length;
  
//     return parseFloat(average.toFixed(2));
//   }
  
  
//   console.log(meanScore(4, 5, 6)); //  5
//   console.log(meanScore(1, 2, 3, 4, 5));  // 3
//   console.log(meanScore(2.5, 3.5, 4.5));  // 3.5
//   console.log(meanScore(1)); //  1
//   console.log(meanScore()); //  NaN (no arguments)
  
//   console.log(meanScore(1, '2', 3)); // "Все аргументы в вызове функции должны быть числами!"
  
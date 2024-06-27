// Домашнее задание по уроку "6. Встроенные объекты. Повторение и обобщение изученного"

// Задание 1
// 5.4, 5.5, 5.6
console.log(Math.round(5.4))
console.log(Math.round(5.5))
console.log(Math.round(5.6))

console.log(Math.ceil(5.4))
console.log(Math.ceil(5.5))
console.log(Math.ceil(5.6))

console.log(Math.floor(5.4))
console.log(Math.floor(5.5))
console.log(Math.floor(5.6))


// Задание 2
let now = new Date()
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
let hour = now.getHours()
let minute = now.getMinutes()

console.log(`Сегодня ${now.toLocaleString('ru-RU', options)}`);
console.log(`${hour} часов ${minute} минут`);
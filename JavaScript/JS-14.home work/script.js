// Задание 1
// function printMessage(message, delay) {
//     setTimeout(function() {
//         console.log(message);
//     }, delay);
// }

// printMessage("Сообщение номер 1", 2000);
// printMessage("Сообщение номер 2", 4000);
// printMessage("Сообщение номер 3", 6000);
// printMessage("Сообщение номер 4", 8000);
// printMessage("Сообщение номер 5", 10000);

// Задание 2
// document.addEventListener('DOMContentLoaded', function() {
//     function updateClock() {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');
//         const timeString = hours + ':' + minutes + ':' + seconds;
//         const clockElement = document.getElementById("clock");
//             if (clockElement) {
//             clockElement.textContent = timeString;
//         } else {
//             console.log("Элемент с id 'clock' не найден");
//         }
//     }

//     setInterval(updateClock, 1000);
// });

// Задание 3
// document.addEventListener('DOMContentLoaded', () => {
//     const xhr = new XMLHttpRequest();
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';

//     xhr.open('GET', url, true);

//     xhr.onload = () => {
//         if (xhr.status >= 200 && xhr.status < 400) {
//             const response = JSON.parse(xhr.responseText);
//             const taskTitle = response.title;
//             document.getElementById('taskTitle').textContent = taskTitle;
//         } else {
//             console.error('Не удалось получить данные. Статус запроса:', xhr.status);
//         }
//     };

//     xhr.onerror = () => {
//         console.error('Произошла ошибка при выполнении запроса');
//     };

//     xhr.send();
// });

// Задание 4
// document.addEventListener('DOMContentLoaded', () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos';
//     const limit = 20;

//     fetch(`${url}?_limit=${limit}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Не удалось получить данные');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const taskListElement = document.getElementById('taskList');
//             data.forEach(task => {
//                 const li = document.createElement('li');
//                 li.textContent = task.title;
//                 taskListElement.appendChild(li);
//             });
//         })
//         .catch(error => {
//             console.error('Ошибка:', error.message);
//         });
// });


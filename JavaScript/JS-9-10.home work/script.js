// Задание 1
// const taskForm = document.getElementById('taskForm');
//         const taskInput = document.getElementById('taskInput');
//         const taskList = document.getElementById('taskList');

//         taskForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const taskText = taskInput.value.trim();

//             if (taskText !== '') {
//                 const taskItem = document.createElement('li');
//                 taskItem.classList.add('list-group-item', 'task-item');
//                 taskItem.textContent = taskText;

//                 const checkbox = document.createElement('input');
//                 checkbox.type = 'checkbox';
//                 checkbox.classList.add('form-check-input', 'mr-2');
//                 taskItem.prepend(checkbox);

//                 checkbox.addEventListener('change', function() {
//                     if (checkbox.checked) {
//                         taskItem.classList.add('completed');
//                     } else {
//                         taskItem.classList.remove('completed');
//                     }
//                 });

//                 const deleteButton = document.createElement('button');
//                 deleteButton.type = 'button';
//                 deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
//                 deleteButton.textContent = 'Удалить';
//                 deleteButton.addEventListener('click', function() {
//                     taskItem.remove();
//                 });
//                 taskItem.appendChild(deleteButton);

//                 taskList.appendChild(taskItem);

//                 taskInput.value = '';
//             }
//         });

// Задание 2
// document.addEventListener('DOMContentLoaded', function() {
//     const openModalBtn = document.getElementById('openModalBtn');
//     const closeModalBtn = document.getElementById('closeModalBtn');
//     const overlay = document.getElementById('overlay');
//     const modal = document.getElementById('modal');

//     // Открытие модального окна
//     openModalBtn.addEventListener('click', function() {
//         overlay.style.display = 'block';
//         modal.style.display = 'block';
//     });

//     // Закрытие модального окна по кнопке-крестик
//     closeModalBtn.addEventListener('click', function() {
//         closeModal();
//     });

//     // Закрытие модального окна по клику на затемненный фон
//     overlay.addEventListener('click', function(event) {
//         if (event.target === overlay) {
//             closeModal();
//         }
//     });

//     // Функция закрытия модального окна
//     function closeModal() {
//         overlay.style.display = 'none';
//         modal.style.display = 'none';
//     }
// });
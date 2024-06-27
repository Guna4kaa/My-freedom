// BOM

// Задание 1
// console.log(`На компьютере с ОС ${navigator.appVersion} с помощью браузера ${navigator.appCodeName} я открыл страничку ${location.href}`);

// DOM

// Задание 2
// 2.1
// console.log(list.innerText);

// 2.2
// const list = document.querySelectorAll('li')
// let num = 0

// list.forEach (el=>{
//     el.textContent = num++
// })

// Задание 3
// const forRemove = document.querySelector('.forRemove')
// console.log(forRemove);
// forRemove.remove()

// Задание 4
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eos laborum quod possimus velit perspiciatis repellat voluptas ad odio quos. Voluptatem ullam commodi inventore nobis! Quos nisi cupiditate repudiandae omnis.";
// text.style.fontSize = "36px";
// text.style.fontWeight = "bold";
// text.style.color  = 'violet'
// console.log(text);

// document.body.append(text);

// Задание 5
// const createEl = (nameTag, nameColor, content) => {
//     const element = document.createElement(nameTag)
//     element.style.color = nameColor
//     element.innerHTML = content

//     return element
//   }
//     const element1 = createEl('p', 'orange', 'Hello world')
//     const element2 = createEl('h2', 'brown', 'PERFECT LIFE')
//     const element3 = createEl('a', 'blue', 'ссылка')
//     const element4 = createEl('button', 'red', 'PUSH ME')

//     element3.href = 'https://www.google.com/'
//     console.log(element1, element2, element3, element4);
//   document.body.append(element1, element2, element3, element4)

// Задание 6
// Получаем ссылку на элемент <select> по его id
// const selectElement = document.getElementById('year-select');

// for (let year = 1960; year <= 2020; year++) {
//   const option = document.createElement('option');
//   option.text = year;
//   option.value = year;
//   selectElement.appendChild(option);
// }

// Задание 7
// const clients = [

//   {name: "Женя", order: true},
//   {name: "Кристина", order: true},
//   {name: "Павел", order: false},
//   {name: "Виолетта", order: false},
//   {name: "Костя", order: true},
//   {name: "Darina", order: false}

//   ]

//   const liElements = clients.map(client => {
//     const liElement = document.createElement('li')
//     liElement.innerText = `Клиент ${client.name} ${client.order ? 'оплатил/а' : 'отменил/а'} заказ`
//     return liElement
//   })

//   const ulElement = document.getElementById('myList');
//   ulElement.append(...liElements)
//   document.body.append(ulElement)

// Задание 8
// let linksArr = [
//   "https://www.amazon.com/",
//   "https://www.youtube.com/",
//   "https://devby.io/",
//   "https://www.google.com/",
//   "https://apple.com/",
// ];
// const divElement = document.createElement("div");
// divElement.style.backgroundColor = "pink";
// divElement.style.padding = "20px";
// divElement.style.margin = "20px";

// linksArr.forEach(link => {
//   const anchorElement = document.createElement('a');
//   anchorElement.href = link;
//   anchorElement.textContent = link;
//   anchorElement.target = '_blank';
//   divElement.appendChild(anchorElement);
// });

// document.body.appendChild(divElement)

// Задание 9
// const users = [
//   {name: 'Mark', age: 12},
//   {name: 'Olga', age: 30},
//   {name:'Tom', age: 25},
//   {name:'Den', age: 43}
//   ]
//   const tbody = document.querySelector('#user-table tbody');
//   users.forEach(user => {
//     const row = document.createElement('tr');
//     const nameCell = document.createElement('td');
//     nameCell.textContent = user.name;
//     nameCell.classList.add('name-cell');
//     row.appendChild(nameCell);
//     const ageCell = document.createElement('td');
//     ageCell.textContent = user.age;
//     ageCell.classList.add('age-cell');
//     row.appendChild(ageCell);
//     tbody.appendChild(row);
// });
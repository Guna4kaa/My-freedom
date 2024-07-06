// Задание 1
// function Car(model) {
//     this.model = model;

//     this.drive = function() {
//         console.log(`Driving the ${this.model} car.`);
//     };
// }

// const myCar = new Car("Toyota");
// const anotherCar = new Car("BMW");

// myCar.drive(); 
// anotherCar.drive(); 

// Задание 2
// function Shop(title, address) {
//     this.title = title;
//     this.address = address;
// }
// const Green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
// const ProStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
// const shops = [Green, ProStore];
// console.log(shops);
// const addresses = shops.map(shop => shop.address);
// console.log(addresses);

// Задание 3
// class Calculator {
//     constructor() {
//         this.number1 = Number(prompt("Введите первое число:"));
//         this.number2 = Number(prompt("Введите второе число:"));
//     }

//     sum() {
//         return this.number1 + this.number2;
//     }

//     mul() {
//         return this.number1 * this.number2;
//     }
// }

// const calc = new Calculator();

// console.log(`Сумма: ${calc.sum()}`);
// console.log(`Произведение: ${calc.mul()}`);

// Задание 4

class Logo {
  
    top = 0;
    left = 0;
    width = 200;
    height = 200;
    element = null;
    constructor(url) {
    this.imgUrl = url;
  }

  init() {
    // метод должен создать тег img
    const img = document.createElement('img')
    // вложить в него src картинки (this.imgUrl)
    img.src = this.imgUrl
    // и записать в this.element
    this.element = img
    // + дергаем render
    this.render()

    // + странице должен залится фон черным
    document.body.style.backgroundColor = 'black'
  }
  
  render() {
    // метод должен отрисовать изображение (this.element) на странице
    document.body.appendChild(this.element)
    // применить фиксированное позиционирование
    this.element.style.position = 'fixed'
    // использовать this.top и this.left для указания позиции
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    // использовать this.width для указания ширины
    this.element.width = this.width
    // использовать this.height для указания высоты
    this.element.height = this.height
    this.element.style.objectFit = 'cover'
    // округляем this.element
    this.element.style.borderRadius = '50%'
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    this.top -= 20
    // + дергаем render
    this.render()
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    this.top += 20
    // + дергаем render
    this.render()
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    this.left -=20
    // + дергаем render
    this.render()
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    this.right +=20
    // + дергаем render
    this.render()
  }
}

const logo1 = new Logo('https://cs13.pikabu.ru/post_img/2023/09/11/5/1694416670162565263.jpg')
const logo2 = new Logo('https://masterpiecer-images.s3.yandex.net/505cfa23621d11eea5826a0259d7362a:upscaled')
logo2.left = 250

setTimeout(() => {
    logo1.init()
}, 1000)
setTimeout(() => {
  logo2.init()
}, 2000)

class Circle {
  element = null
  constructor(size, color){
  this.size = size
  this.color = color
  }
  init() {
    const circle = document.createElement('div')
    circle.style.backgroundColor = this.color
    circle.style.width = `${this.size.width}px`
    circle.style.height = `${this.size.height}px`
    circle.style.borderRadius = '50%'
    this.element = circle
    this.render()
  }
  render() {
    document.body.appendChild(this.element)
  }
}

const circle1 = new Circle({width:200, height: 200}, 'red')
const circle2 = new Circle({width: 400, height: 300}, 'green')
circle1.init()
circle2.init()
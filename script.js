// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let array = [1, 5, 7, 10, 12, 13, 15, 20, -3, 0, 14, 22, 45, 5, 9, 6, 7, 2, 1, 2];
// console.log(array.sort((first, second) => {
//     return first - second;
// }));
// console.log(array.sort((a, b) => b - a));
// let filtered_array = array.filter(value => value % 3 === 0);
// console.log(filtered_array)
// let second_filtered = array.filter(value => value % 10 === 0);
// console.log(second_filtered)
// second_filtered.forEach(element => console.log(element));
// let tripled_array = array.map(value => value * 3);
// console.log(tripled_array);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let words = ['hello', 'my', 'name', 'is', 'Ruslan', 'and', 'I', 'am', 'going', 'to', 'become', 'a', 'computer', 'programmer', 'yeaah'];
// words = words.map(value => value.toLowerCase());
// words.sort();
// console.log(words)
// words.reverse();
// console.log(words);
// let filtered = words.filter(value => value.length < 4);
// console.log(filtered)
// let mapped = words.map(value => value + "!");
// console.log(mapped);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];
// users.sort((a, b) => a.age - b.age);
// console.log(users)
// users.reverse();
// console.log(users);
// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);
// users.reverse();
// let unique = 1;
// users = users.map(value => {
//     value.id = unique++;
//     return value;
// });
// users.sort((a, b) => a.id - b.id);
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator (number1, number2, callback) {
//     return callback(number1, number2);
// }
//
// console.log(calculator(1, 2, (number1, number2) => {
//     return number1 + number2;
// }))


// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator2(number1, number2, number3, callback) {
//     return callback(number1, number2, number3)
// }
//
// console.log(calculator2(1, 3, 5, (a, b, c) => {
//     return a - b - c;
// }));;

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let users = [{name: 'vasya', age: 31, experience: 2}, {name: 'petya', age: 30, experience: 2}, {
//     name: 'kolya',
//     age: 29,
//     experience: 2
// }, {name: 'olya', age: 28, experience: 2}, {name: 'max', age: 30, experience: 2}, {
//     name: 'anya',
//     age: 31,
//     experience: 2
// }, {name: 'oleg', age: 28, experience: 2}];
// class Car {
//     constructor(model, power, driver, price, year) {
//         this.model = model;
//         this.power = power;
//         this.driver = driver;
//         this.price = price;
//         this.year = year;
//     }
// }
// let cars = [new Car('Lada', '1000', users[0], 50, 1999),
//     new Car('Volkswagen', '1400', users[1], 100, 2015),
//     new Car('Mercedes', '1300', users[2], 20, 2010),
//     new Car('Bentley', '1100', users[3], 30, 2003),
//     new Car('Skoda', '1900', users[4], 40, 2005),
//     new Car('Pegeouth', '1900', users[5], 80, 2000),
//     new Car('Toyota', '1000', users[6], 100, 2010)]
// let filtered = cars.filter((value, index) => {
//     if (index < cars.length / 2) {
//         return value;
//     }
// });
// filtered = filtered.map(value => {
//     value.power *= 1.1;
//     value.price *= 1.05;
//     value.price = value.price.toFixed(0);
//     value.power = value.power.toFixed(0);
//     value.driver = users[Math.round(Math.random() * 7)];
//     return value;
// })
//
// users.map(value => {
//     if (value.experience < 5 && value.age > 25) {
//         value.experience += 1;
//     }
//     return value;
// });
// console.log(cars);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// let array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// let findIndexes = (number, array) => {
//     let minIndex = 0;
//     let maxIndex = 0;
//     let firstTime = true;
//     for (let i = 0; i < array.length; i++) {
//         if (number === array[i]) {
//             minIndex = firstTime ? i : minIndex;
//             maxIndex = i;
//             firstTime = false;
//         }
//     }
//     console.log("min index = " + minIndex);
//     console.log("max index = " + maxIndex);
// }
// findIndexes(7, array);


// найти приопущенную букву в массиве:
//
//     ["a","b","c","d","f"] -> "e"
//     ["O","Q","R","S"] -> "P"
// let array = ["O","Q","R","S"];
// let findLetter = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].charCodeAt(0) !== array[i + 1].charCodeAt(0) - 1) {
//             console.log(String.fromCharCode(array[i].charCodeAt(0) + 1));
//             break;
//         }
//     }
// }
// findLetter(array);


// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
// let numberToString = (number) => {
//     let string = '';
//     let numberStr = String(number);
//     for (let i = 0; i < numberStr.length; i++) {
//         string += numberStr[i] + '0'.repeat(numberStr.length - (i + 1)) + ' + ';
//     }
//     return string.slice(0, string.length - 3);
// }
// console.log(numberToString(3275))


// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// let array = [1,6,89,0,17,88,4,7];
// console.log(array.reduce((accum, current) => {
//     return Math.max(accum, current);
// }));

//
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
// let string = '217649194758610012321321';
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//     if (string[i] === '0' && string[i + 1] === '0') {
//         break;
//     }
//     if (string[i] === '1') {
//         count++;
//     }
// }
// console.log(count);



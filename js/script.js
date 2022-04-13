"use strict"; // работаем в современном режиме

// let number = 5; // переменная изменяема

// const leftBorderWidth = 1; // значение поменять не можем

// number = 10;
// console.log(number);

// const obj = { прямых констант в js не бывает
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan'; устаревшее обьявление

// {
//     var result = 50; // переменная видна только в скобках
// }

// console.log(result);

// всего 8 типов данных простых

// let number = 4.6;
// console.log(-4/0);
// console.log('string' * 9);

// const persone = `5`;

// const bool = false;
// console.log(something);

// let und;
// console.log(und);


// const obj = { // тип данных object
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // тип данных массив - частный случай объекта у него ключами являются номера по порядку 0 1 2 3 4 5
// console.log(arr[0]);

// alert('Hello!');

// const result = confirm('Are you here?');

// console.log(result);


// const answer = prompt('Are you 18 years old?', '18'); // пустые кавычки для поддержки IE, вся информация от пользователя это строка

// console.log(answer);
// console.log(typeof(answer)); // проверяем тип данных
// console.log(answer + 5);


// const answerNum = +prompt('Are you 18 years old?', ''); // ствим плюс для перевода строки в число

// console.log(answerNum + 5); // проверяем тип данных



// const answers = []; // пустой массив
// answers[0] = prompt('Как ваше имя?', ''); // консоль не знает что такое prompt, alert, confirm они только внутри браузера работают
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');


// document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null));

//интерполяция
// const category = 'toys';
// console.log('https://someurl.com/' + category + '/' + '4'); //ранее до стандарта ES6 так делали
// console.log(`https://someurl.com/${category}/5`); // используем бэктики 
// const user = 'Ivan';
// alert(`Привет, ${user}`);

//операторы

console.log(4 + +'5'); // унарный плюс перед 5-кой - переводит строку в число

let incr = 10,
    decr = 10;

// incr++; // увеличиваем число на 1 - постфиксная запись
// decr--; // уменьшаем число на 1


// console.log(incr);
// console.log(decr);


// ++incr; // префиксная запись
// --decr; 


// console.log(incr++); // сначала возращает старое значение
// console.log(decr--);

console.log(++incr); 
console.log(--decr);

console.log(5%2);

console.log(2*4 == '8');


console.log(2*4 === '8'); // это строгое сравнение

const isChecked = false,
        isClose = false;
    
console.log(isChecked && isClose); // и

console.log(isChecked || !isClose); // или, оператор отрицания

// порядок выполнения операторов

console.log(2 + 2 * 2 !== '6'); 

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));
alert(`Вы ввели ${firstNumber}, ${secondNumber}`);

// Вариант №1
/*
let sum = Number(firstNumber) + Number(secondNumber);
alert(`Сумма чисел ${sum}`);

let subtraction = Number(firstNumber) - Number(secondNumber);
alert(`Вычитание чисел ${subtraction}`);

let multiplication = Number(firstNumber) * Number(secondNumber);
alert(`Умножение чисел ${multiplication}`);

let division = Number(firstNumber) / Number(secondNumber);
alert(`Деление чисел ${division}`);
*/
//Вариант №2

alert(`Сумма чисел ${firstNumber + secondNumber}\nВычитание чисел ${firstNumber - secondNumber}\nУмножение чисел ${firstNumber * secondNumber}\nДеление чисел ${firstNumber / secondNumber}`);
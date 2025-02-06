// let firstNumber = prompt('Enter a num1:');
// let secondNumber = prompt('Enter a num2:');
// let operation = prompt('Enter operation(+,-,*,/,**):');

let num1 = 'fdf';
let num2 = '0';
let operation = '(';

console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);
console.log(`operation = ${operation}`);

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;
if (operation == '+')
    result = num1 + num2;
else if (operation == '-')
    result = num1 - num2;
else if (operation == '*')
    result = num1 * num2;
else if (operation == '/')
    result = num1 / num2;
else if (operation == '**')
    result = num1 ** num2;

if(result == undefined)
    console.log('operation is incorrect');
if (num2 === 0)
    console.log('you cannot divide by zero');
if (isNaN(num1))
    console.log('num1 is incorrect');
if (isNaN(num2))
    console.log('num2 is incorrect');
if (isNaN(result))
    console.log('operation not possible');
else
    console.log(`result is ${result}`);


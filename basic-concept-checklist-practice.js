// question no 1
let number = 12;
let string = 'My name is Hasib';
let boolean = 'true or false';

// question no 2
let numbers = 12;
console.log(numbers);
numbers = 13;
console.log(numbers);

const numbeers = 36;
console.log(numbeers);

// question no 3

// addition
var num1 = 36;
var num2 = 72;
var sum = num1 + num2;
console.log(sum);

// subtraction
var num1 = 36;
var num2 = 72;
var subtraction = num1 - num2;
console.log(subtraction);

// multiplication
var num1 = 36;
var num2 = 72;
var multiplication = num1 * num2;
console.log(multiplication);

// division
var num1 = 36;
var num2 = 72;
var division = num1 / num2;
console.log(division);

// remainder
var num1 = 36;
var num2 = 73;
var modulo = num1 % num2;
console.log(modulo);

// question no 4

// less than
var num01 = 10;
var num02 = 7;
console.log(num01 < num02);

// greater than
var num01 = 10;
var num02 = 7;
console.log(num01 > num02);

// equal to
var num01 = 10;
var num02 = 7;
console.log(num01 === num02);

// not equal to
var num01 = 10;
var num02 = 7;
console.log(num01 !== num02);

// less than or equal to
var num01 = 10;
var num02 = 7;
console.log(num01 <= num02);

// greater than or equal to
var num01 = 10;
var num02 = 7;
console.log(num01 >= num02);

// question no 5

// fulfilling all conditions
var firstNum = 20
var secondNum = 5;
if (firstNum > secondNum && firstNum === secondNum) {
    console.log('its ok');
} 
else {
    console.log("it's not ok");
}

// fulfilling at least one condition
var firstNum = 20
var secondNum = 5;
if (firstNum > secondNum || firstNum === secondNum) {
    console.log('its ok');
} 
else {
    console.log("it's not ok");
}

// question no 7

// example no 1
var baby = 0;
while (baby <= 4) {
    console.log('I will stop here');
    baby++;
}

// example no 2
var atif = 0;
while (atif < 10) {
    console.log('He will continue singing');
    atif++ 
}

// example no 3
var oddNumbers = 7;
while (oddNumbers <= 19) {
    console.log(oddNumbers);
    oddNumbers += 2
}

// question no 8
let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(arr);
console.log(arr.length);
arr[4] = 25
console.log(arr);
arr.unshift(36, 72);
console.log(arr);
arr.push(18, 54);
console.log(arr);
arr.shift()
console.log(arr);
arr.pop()
console.log(arr);

// question no 9

// data type number
let arr2 = [7, 8, 9, 10, 11, 13, 15]
for(let i = 0; i < arr2.length; i++){
    const arr1 = arr2[i];
    console.log(arr1);
}

// data type string
let items = ['watch', 'bottle', 'torch', 'pen', 'notebook', 'mouse', 'lighter', 'calculator'];
for(let i=0; i<items.length; i++){
    const item = items[i]
    console.log(item);
}

// question no 10
function displayElderNums(something){
    for(let i = 0; i < something.length; i++){
        const index = i;
        const element = something[index];
        if(element > 80){
            console.log(index ,element);
        }
    }
}

let something = [100, 20, 30, 85, 90, 45, 80];
let daki = displayElderNums(something)

// question no 11
function multiplicationOfNumbers(num1, num2, num3){
    let result = num1*num2*num3;
    return result;
}

let output = multiplicationOfNumbers(10, 10, 10);
console.log(output);
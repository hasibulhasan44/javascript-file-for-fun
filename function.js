// practicing single parameter
function bringTaka(money){
    console.log("wake up and get freshed.");
    console.log("get dressed and head to bank.");
    console.log("communicate to the manager");
    console.log("get information about your bank account");
    console.log("taka nai", money)
}

var money = 0;
bringTaka(money);

// practicing multiple parameters
function value(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
    
    var value = a+b+c+d+e+f;
    console.log(value);

    var average = value/6;
    console.log(average)
}

value(32, 20, 36, 99, 58, 60);

function add(a, b, c, d, e, f, g, h){
    var sum = a+b+c+d+e+f+g+h;
    return sum;
}

var total = add(8, 89, 85, 87, 4, 5, 412, 12);
console.log(total)

// converting inch to feet
function inchToFeet(inch){
    var feet = inch/12;
    feet = feet.toFixed(2)
    feet = parseFloat(feet)
    return feet;
}

const inch = 122;
const givenInch = inchToFeet(inch)
console.log(givenInch);

// converting mile to kilomiter
function milesToKilometer(miles){
    const kilomiter = miles*1.61
    return kilomiter;
}

const miles = 22;
const givenMiles = milesToKilometer(miles);
console.log(givenMiles);

// converting meter to centimeter
function meterToCm(meter){
    const centimeter = meter*100; 
    return centimeter;
}

const meter = 20;
const givenmeters = meterToCm(meter);
console.log(givenmeters);

// check even or odd number
function evenOrOdd(numbers){
    const even = numbers % 2;
    if(even == 0){
        return true;
    }
    else{
        return false
    }
}

const checkNumber = 22
const callF = evenOrOdd(checkNumber);
console.log(callF)

// checking whether a year is leap year or not
function isLeapYear(years){
    const yes = years % 4;
    if(yes === 0){
        return true;
    }
    else{
        return false;
    }
}

const givenYear = 2020;
const need = isLeapYear(givenYear)
console.log(need);

// Homework
function maxNumber(){
    
    if(num1 > num2 && num1 > num3){
        return ('num1 is the maximum');
    }
    else if (num2 > num1 && num2 > num3) {
        return ('num2 is the maximum');
    }
    else{
        return ('num3 is the maximum');
    }
}

let num1 = 575;
let num2 = 445;
let num3 = 1113;
let givenNumber = maxNumber(num1, num2, num3);
console.log(givenNumber);

// same homework with Math property
console.log(Math.max(752, 1222, 12));
console.log(Math.min(12, -9, 45, -99));

// who is the tallest competition
let Tom = 167;
let friend1 = 190;
let friend2 = 120;
let friend3 = 1365;
let friend4 = 137;

function tallestFriend(){
    if (Tom > friend1 && Tom>friend2 && Tom>friend3 && Tom>friend4) {
        return ('tom is the tallest')
    }
    else if(friend1> Tom && friend1>friend2 && friend1>friend3 && friend1>friend4) {
        return ('friend1 is the tallest')
    }
    else if(friend2> Tom && friend2>friend1 && friend2>friend3 && friend2>friend4) {
        return ('friend2 is the tallest')
    }
    else if(friend3> Tom && friend3>friend1 && friend3>friend2 && friend3>friend4) {
        return ('friend3 is the tallest')
    }
    else if(friend4> Tom && friend4>friend1 && friend4>friend2 && friend4>friend3) {
        return ('friend4 is the tallest')
    }
}

let givenHeights = tallestFriend(Tom, friend1, friend2, friend3, friend4)
console.log(givenHeights);
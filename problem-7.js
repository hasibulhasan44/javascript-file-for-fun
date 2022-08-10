// 7) You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is

// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using
// if-else.

// function checkingResults(marks){
//     for(let i = 0; i < marks.length; i++){
//         let index = i;
//         let element = marks[index]
//         if(element > 80){
//             return 'A Grade'
//         }
//         // else if(element > 60){
//         //     return 'B Grade'
//         // }
//         // else if(element > 50){
//         //     return 'C Grade'
//         // }
//         // else if(element > 40){
//         //     return 'D Grade'
//         // }
//         // else if(element <= 39){
//         //     return 'F Grade'
//         // }
//     }
// }
function checkingResults(marks){
    if(marks>=80){
        return'Grade A';
    }
    else if(marks>=60){
    return 'Grade B';
    }
    else if(marks>=50){
    return'Grade C';
    }
    else if(marks>=40){
    return'Grade D';
    }
    else if(marks<=39){
    return'Grade F';
    }
}
let mine = 85;
let tom = 66;
let Jane = 95;
let Peter = 56;
let John = 25;
let grade = checkingResults(Jane);
console.log(grade);

//8.
function findTheLargest(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
   else if(num2>num1 && num2>num3){
    return num2;
    }
   else if(num3>num1 && num3>num2){
    return num3;
    }
}
const numbers=findTheLargest(130, 790, 450)
console.log(numbers);
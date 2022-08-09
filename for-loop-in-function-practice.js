// question no 10
function displayElderNums(something){
    for(let i = 0; i < something.length; i++){
        const index = i;
        const element = something[index];
        if(element % 2 !== 1){
            console.log(index ,element);
        }
    }
}

let something = [100, 20, 30, 85, 90, 45, 80];
let daki = displayElderNums(something)
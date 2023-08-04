/*add more return*/

function add (num1,num2){
    const total = num1 + num2;
    return total ;

}

const result1 = add (30,50);
const result2 = add (60,70);
const result3 = add (result1 , result2);
console.log(result3)
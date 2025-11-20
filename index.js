// // console.log("samikshya");
//variable in javascript
let program="HELLO";
console.log(program);

//constant in java script
const pi=3.14;
console.log(pi);

let x=10;
if(true){
    let x=20;
    console.log("Inside:",x);
}
console.log("output:",x);


//Function in javascript
//a function is a reusable block of code that perform a specific task
//It helps avoid repetiton and make code organized 

function add(a,b){
    return a+b;
}
console.log(add(5,3));

function double(num){
    return num*2;
}
console.log(double(5));

function isEven(number){
    if (number %2==0){
        return `${number} is even`;
    }else{
        return`${number} is odd`;
    }
}

function isEven(num){
    return num % 2===0;
}
console.log(isEven(6));
console.log(isOdd(7));

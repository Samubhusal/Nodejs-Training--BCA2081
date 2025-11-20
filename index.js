// // // console.log("samikshya");
// //variable in javascript
// let program="HELLO";
// console.log(program);

// //constant in java script
// const pi=3.14;
// console.log(pi);

// let x1=10;
// if(true){
//     let x=20;
//     console.log("Inside:",x);
// }
// console.log("output:",x);


//Function in javascript
//a function is a reusable block of code that perform a specific task
//It helps avoid repetiton and make code organized 

// function add(a,b){
//     return a+b;
// }
// console.log(add(5,3));

// function double(num){
//     return num*2;
// }
// console.log(double(5));

// function isEven(number){
//     if (number %2==0){
//         return `${number} is even`;
//     }else{
//         return`${number} is odd`;
//     }
// }

// function isEven(num){
//     return num % 2===0;
// }
// console.log(isEven(6));
// console.log(isOdd(7));


//scope in javascript

//scope means where your variable is allowed to live and where it can be used
//think of it like borders: some variables 

// let x=10;
// function test(){
//     let y=5;
//     console.log(x);//allowed
//     console.log(y);//allowed
// }
// console.log(x);//allowed
// console.log(y);//not allowed

let x=5;
function rest(){
    let y=10;
    console.log(x);
    console.log(y);
}
rest();
console.log(x);
console.log(y);


// 🧠 What are Functions?
// Function Declarations
// Parameters vs Arguments
// Return Values
// 🧰 Function Expressions
// 🏹 Arrow Functions
// Default + Rest + Spread
// First-Class Functions
// 🧠 Higher-Order Functions (HOF)
// 🔐 Closures & Lexical Scope
// ⚡ IIFE – Immediately Invoked Function Expression
// 🚀 Hoisting: Declarations vs Expressions


// function 
// i want ki code likh dun but execute baaad mai karun 


// 1st way (// function declaration )
// function ("kuch bh naam likh lo "){
//     statement , command 
// }



// // 2nd way (// function expression )
// let name = function(){
//     kaam likh lo 
// }
// is case mai name ki jagha kuch bhi rakh do or woh function ka name ban jiyga 

// let myName = function(){
//     console.log(" parakram tomar ");
// }
// // now call the function 
// myName() ; 


// 3rd way (// fat  arrow function )
// let myName = () =>{
//      console.log("my name is  parakram tomar ");
// }
// myName() ; // call the functions 
// topic 1 finish  


// now parameters and arguments 
// function printName (name){
//     console.log ("my name is "+ name  )
// }
// giver your name and then call fuunctions 
// printName("parakram tomar ")
// printName (" sarthak mishra ")
// printName (" anshul mishra ")

// taking input 
// x = prompt("enter your name ") ;
//console.log(x);
// adding 2 numbers 
// create function 
// let addition = function(num1,num2){
//     let sum  = num1+num2 ; 
//     console.log("sum is = ", sum);
// }

// // first take the input from user}
// let num1 = parseInt(prompt("enter first number ")) ;
// let num2 = parseInt(prompt("enter second number ")) ;
// // call the function 
// addition(num1 , num2) ; 

//LETS  UNDERSTAND THE WHAT IS DEFAULT 
// SO IF I ADD 2 NUMBER BUT DID NOT INPUT THE VALUE IN THE VARIABLE , JS WILL NOT GIVE ME THE ERROR IINSTEAD IT WILL CONSIDER IT AS UNDEFINED .
// AND UNDEFINED + UNDEFINED = NaN(NOT A NUMBER )
// // EXAMPLE -:
// let add = function(v1 , v2){
//     let sum = v1+ v2 ;
//     console.log("sum is = ", sum);
// }
// call function 
//add() //==> sum is =  NaN
// v1 , v2 = undefined bocz humne value nhi di 

// ab agar hume NaN se baachna hai tohhum default value de sakte hain 
// now the function becomes 
// let sum = (v1 = 0 , v2 = 0) =>{
//     let sum = v1 + v2 ;
//     console.log("sum is = ", sum);
// }
// now if we call the function without any value it will give us 0
// sum() //==> sum is =  0


// let talk about rest and spread operator
// let fcn =( ...inp )=>{
//     console.log(...inp) ; 

// }
// fcn(1,2,3,4,5) ; // it will print 1 2 3 4 5
// parameter se bachne ke liye use karte hain 
// agar (...)function ke beech mai laga hai toh woh rest operator hoga 
// or agar (...)  arrays and objects  ke beech mai laga hai toh wo spread operator bann jiyga 
// spred array mai dekhinge 



// understanding return 
// iska matlab hota hai ki jahan se value aai hai udhar waps daal dena 
// let x = () =>{
//     return 12 ;
// }
// val = x() ; 
// console.log(val);
// value print nhi karwate but value humare paas aa chuki hai , or jab uska kaam hoga tab hum usko use kar linge 


// first class functions ==> hu m functions ko as a variable treat  kar sakte hain 
function me(you){
    you()
}

me(function(){
    console.log("world is nice ");
    
})

you()

// //function --->
// //function is block of code to perform a specifec task 
// //uses--->resuablity,avoid repitation of code,break complex code into simplar code
// //easy to test and debug


// function greet (){
    
//     for(i=1; i<=10;i++){
//     console.log("hello Function")}
// }
// greet();



// function addition (){
//     let a=10;
//     let b=20;
//     let addion=a+b;
//     console.log(`Addition ${a} & ${ b} is: ${addion}`)
// }
// addition();



// //function with paramaters 
// function hello(username){
//     console.log(`hello........${username}`)
// }
// hello("abhijit");



// function additon(a,b){
//     let c=a+b;
//     console.log(`Addition is ${c}`);
    
// }
// additon(10,20);





// function checkNumber(num) {
//   if (num % 2 === 0) {
//     console.log(num + " is Even");
//   } else {
//     console.log(num + " is Odd");
//   }
// }

// checkNumber(10)

// ///function with return type

// ///argument pass nhi ki to undefindefind print hota hey
// function m1(a=10,b=10){
//     return a*b;
// }
// let ret = m1(45,45);
// console.log(ret);

// //paramiter with difalit value
// function gup( name="hii"){
//     console.log(`hello ,goodmorning${name}`);
    
// }
// gup(" Abhijit");


// //rest parameter---->rest parameter uses three dot ...
// //
// function numbr(...num){
//     console.log(num);
    
// }
// numbr(2,4,6,8,10,12)



function numbar(...num){
   let  sum=0;
   for( let i=0; i<=num.length; i++){
    console.log(num[i])
    sum+=num[i]
   }
   console.log(`total of numbar :${sum}`);
   return sum;
   
}
numbar(2,4,6,8,10,12);



///with out name anomous function
///function with expresion----------

let addition = (num1 ,num2)=>
{
    return num1+num2;

}
let result = addition(100,200)
console.log(result);



let demo =()=>"hello abhi Good morning"
console.log("helo");
let re= demo()
console.log(re);



let grret = function(num){
    return num


}
console.log(grret(100));


///call back function --------->ek fuction sey dusara function

function deva(name,callback){
    console.log("hello abhi lets hard");
    callback();
}
function sayby(){
    console.log("yry yo contionous study");
} 

deva("Abhi" );


//Animous function call bak functionkey sath









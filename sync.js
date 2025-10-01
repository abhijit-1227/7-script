// console.log("abhi");
// console.log("abhi");
// console.log("abhi");

// //time out function
// function hello(){
//     console.log("hello Abhi");
    
// }
// setTimeout(hello,2000)



// //arrey function 
// setTimeout(() => {
//     console.log("hello abhijit");
    
// }, 4000);
// console.log("abhi");
// ///this is scronous function
// //callback is another function



// //callback hell-------->
// function getdata(dataId){
//     setTimeout(() =>{console.log("data",dataId)},2000)
    
    
// }




(function (){
    console.log("hello");
    
}());
function outer (){
   
     console.log(" outer function");
    
    function inner(){
        console.log("inner function");
        
    }
    inner()
}
outer();




function outer1 (x,y){
   let z=x+y;
     console.log(z);
    
    function inner1(x,y){
        let c=x-y;
        console.log(c);
        
    }
    inner1(45,84)
}
outer1(10,20 );
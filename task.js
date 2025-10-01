function sum(a ,b){
    
    console.log(`Additon of ${a} + ${b} = ${a+b}`);
    
}
function sub(a ,b){
    
    console.log(`Substraction of ${a} - ${b} = ${a-b}`);
    
}
function mul(a ,b){
    
    console.log(`Additon of ${a} * ${b} = ${a*b}`);
    
}
function div(a ,b){
    
    console.log(`Additon of ${a} / ${b} = ${a/b}`);
    
}
function table(num){
    for(let i=1; i<=10;i++)
    console.log(`division ${num} * ${1} = ${num*i}`);
    
}
function oddeven(num){
    if(num%2===0){
    console.log(`${num} is even`);}

    
    else(console.log(`${num } num is odd`))
    
}



let chioce=1;
switch(chioce){
case 1:sum(100,200);
break;

case 2:sub(100,200);
break;


case 3:mul(100,200);
break;


case 4:div(100,200);
break;


case 5:table(10);
break;


case 6:sum(55);
break;
}
let num =100;
let arrey =[100,200,300,400,500,600]
console.log(arrey.length);
console.log(arrey);
console.log(arrey[1]);
for (i = 0 ; i<arrey.length;i++){
    console.log(arrey[i]);
    
}
for ( let item of arrey){
    console.log(item);
    
}
arrey.push(700);// lastadd
arrey.unshift(50);//first add
arrey.shift()//remove from begain
 arrey.pop()//remove from end

console.log( "arrey length"+arrey.length);




// // let students = {
// //     name :"abhi",
// //     age:12,
// // city:"majalgoan",
// // marks :65,
// // greet :function(){
// //     console.log("hello abhi good mornug");
    
// // }
// // }
// // students.greet();
// // console.log(students.age);
// // console.log(students.city);

// // for (let key in students){
// //     console.log(students[key]);
    
// // }





// //with constructer
// function students( id,name,age,city){
//     this.id=id;
//     this.name=name;
//     this.age=age;
//     this.city=city;
//     this.greet = function(){
//     console.log(`hello ${this.name} id is:${this.id}`);
// }


    
// }
// const std1 =new students(101,"abhi",22,"majalgoan");
// const std2 =new students(102,"Athrav",22,"majalgoan");
// const std3 =new students(103,"upay",22,"majalgoan");

// std1.greet()
 class students{
    constructor( id,name,age,city){
    this.id=id;
    this.name=name;
    this.age=age;
    this.city=city;
    this.greet = function(){
    console.log(`hello ${this.name} id is:${this.id}`);
}
    }
}
const std1 =new students(101,"abhi",22,"majalgoan");
const std2 =new students(102,"Athrav",22,"majalgoan");
const std3 =new students(103,"upay",22,"majalgoan");
std1.greet()

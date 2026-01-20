var a = "temp"; //variable -- temp data store (ex amozon & flipkart)
var _123 = "Hello";
var $123 = "Hello";
//var 123 ="number"
b=22;//never use
//let
// let temp ="abc"
const temp_const = "Hello world !!";

var d;//declare
var temp_d =12;//declare & initialize 
// var add value into winddow
//var is function scoped
//var can be redeclared and reassigend
var name ="user name";
var name1 ="user name";

//reassignment, redeclaration
var temp=12;
temp ="number"; //reassigment
var temp ="text"; //redeclaration let temp ="text"; //redeclaration

//let temp_a =24;
//var temp_a =34; //you can't redeclare let variable

const temp_b="name"
// temp_b = "username"//you can't reassign let variable


//scope (global,Block, functional)

let f= 23;//global
console.log("Globle scope " +f)
{
    let f= 25;//block
console.log("block scope " +f)
}
function abc(){
    var f= 30;//functional 
console.log("functional scope " +f)
}

abc();
console.log("outside var variable" + f);


//scope (global,Block, functional)

var e= 23;//global
console.log("Globle scope " +e)
{
    var e= 25;//block
console.log("block scope " +e)
}
function abc(){
    var e= 30;//functional 
console.log("functional scope " +e)
}

abc();
console.log("outside let variable" + e);


//temporal Dead Zone(TDZ)
console.log(temp_d);
var temp_d=24;

//console.log(g);
// console.log(j);
// let j = 12;

//Hosting  Imapact
//hoisting --> when your create a variable into js that braek 
// into js that braek into two part first is declare part that go to up and
//  there initialization part that go dwon

var temp_d =12;
//var temp_d; -->undefined; -->that go to up
//temp_d = 12;--> that go to dwon (means stuck into line 66)
//if you use console.log before initializatio0n that gove you iundefined;

let temp_d_let =24;
//let variable not use before initializationn
//if you use console.log before initialization that give you error;
//Hosting Impact on var,let,const
/*
var --> hoist -->undesined
let --> hoist --> error
const --> hoist --> error
*/


//Example of team 1 to 5

// 1.example
// console.log(nm);
// let nm = "name";


// 2. example
// console.log(b);
// var b = "username";



// 3.exmple
// var x = 1;
// {
//    var x = 2;
// }
// console.log(x);


// 4.example
// let radhe = 10;
// {
//    let radhe = 20;
//    console.log("Inside:", radhe);
// }
// console.log("Outside:", radhe);


// 5.example
const person = { name: "demo" };

person.name = "user";  
// person = {};           
console.log(person.name)
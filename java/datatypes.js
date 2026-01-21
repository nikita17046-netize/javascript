//data types:
//two types of data types
// 1. primirive data types
//copy -->real value 
let a =5;
let b=a;

//types: string, number, boolean, null,
//undefined,symbol, bigint

//2. non-primitive data types(reference
//dara types) [],(),{}
// copy --> give refrence of parent
let c = [1,2,3];
let e = c;

//types:arrays[], objects{} , function()

//<------------Primitive data types ---------------->
//types: string, number, boolean, null,
//undefined,symbol, bigint
//string:
//'' -single quotes
//""-double quotes
//`` -backticks
let d = "name";
d="username";
d= `firstname`

//number:
let f= 12;
f=12.25;
f=-25;

//boolean
let g=true;
g=false;

//null
//you give a value 
let h= null;

//undefind
//you don't give a value,by defulat value
let i;


//symbol:
//uniqe immutable value 
let u1 =Symbol("uid");
let u2 =Symbol("uid");
//check u1 == u2
let obj ={uid:1,name:"text",email:"text@text.com"};
let u3="uid";
let u4 = Symbol("uid");
//obj[u3]="001";

//bight:
//check range of number, number.MAX_SAFE_INTEGER
let number = 541203698745125;
number=number+6;
let num2 = 541203698745125n;
num2+ 4n;

// <----- Non-Primitive Data Types ----->
// types: arrays [], objects {}, functions ()

let temp_array = ["user1", "user2", "user3"];
let temp_obj = {  name: "test", age: 9, phone_number: 55899854 };
let profiles = [
  { name: "test1", age: 10, phone_number: 98989775 },
  { name: "test2", age: 15, phone_number: 989888775 },
  { name: "test3", age: 11, phone_number: 9898975575 }
];
function name(params) {}


// Dynamic Typing
let u_name = "username"; //string
u_name = 123; //number
u_name = {};//object

// javascript --> typescript(ts)

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 === "1"
// why typeof NaN --> number
// NaN is a failed number operations that why that type is number
// ex. "hello" - 5 --> NaN




// type coercion
// "5" + 1 // --> Valid and Coercion (Mix)
// "5" - 1

// Truthy vs Falsy Values
// 0, false, "", null, undefined, NaN, document.all, -- false
// ex. !!0 --> check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true

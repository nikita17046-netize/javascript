//function
//what--> A function is a block of code designed to perform a particular task.
//why-->to avoid repetition and to make code reusable
//how-->funtion keyword ,name,parameters,body,return

//types of function
//1. Function Declaration
//function name(parameters){body}
function abc(){}
//2. Function Expression
// let fnc = function name(parameters){body}
let fnc = function() {};
//3. Arrow Function
let fnc1 = () => {};


function temp_cart(){
    console.log("adding product");
}
temp_cart();
temp_cart();
temp_cart();    



//parameters vs arguments
//parameters are the names listed in the function definition
//arguments are the real values passed to the function
function cart(product){
    //product is parameter
    console.log("product",product);
}
cart("laptop"); //laptop is argument
cart("mobile");
cart("tv"); 


//convert into funtion expression
//let cart = function(){}
let cart1 = function(product){
    console.log("function expression product",product);
}
cart1("headphones");
cart1("smartwatch");
cart1("tablet");


//convert into arrow function
// let cart = (parameters) => {}
let cart2 = (product) => {
    console.log("arrow function product",product);
}   
cart2("camera");
cart2("printer");
cart2("monitor");


//defult,rest and spread parameters in functions
//default parameter
function abc(v1,v2){
    console.log(v1,v2);
}
abc(10); //10 undefined
abc(10,20); //10 20

function cart3(product="default product",price="default price"){
    console.log("product",product,"price",price);
}
cart3();
cart3("laptop",50000);
cart3("mobile",20000);



//rest parameter -->multiple values as array
function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){
    console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
}

abcd(1,2,3,4,5,6,7,8,9,10);

//2

function cart4(...product){
    console.log(product);
}
cart4(1,2,3,4,5,6,7,8,9,10);

//3

function cart4(a,b,...product){
    console.log(a,b,product);
}
cart4(1,2,3,4,5,6,7,8,9,10);


//return or early return
//return --> function can return a value using return keyword
//early return --> to exit from function before it reaches the end
function getvalue(values){
    if(values < 50) return"value is less than 50";
    if(values > 75) return"value is greater than 75";
    return "value is 100 or more";
}
let result = getvalue(80);
console.log(result);

//first-class functions
//function are treated as variables

//function can be passed as arguments to other functions

//function can be returned from other functions
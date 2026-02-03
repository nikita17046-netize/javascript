Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: ( Error: Cannot access 'nm' before initialization) </p>
<p>Why :  Because let is hoisted but stays in the Temporal Dead Zone (TDZ) until it is initialized. So you cannot use it before declaration. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error:  (Output: undefined) </p>
<p>Why : Because var is hoisted and initialized as undefined by default. So before assignment, its value is undefined, not an error.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: (Output: 2)</p>
<p>Why :  Because var is function-scoped, not block-scoped. The inner var x = 2 overwrites the outer value.</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: (Output : Inside: 20  & Outside: 10)</p>
<p>Why :  Because let is block-scoped. The a = 20 inside the block is a different variable than the outer a = 10. </p>
</div>  
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error:   Output: "user"</p>
<p>Why : Because const does not make the object immutable. It only prevents reassigning the variable person to a new object.</p>
</div>
 
 

 <!-- Javascript Datatype: -->
<h2>Javascript Datatype:</h2>

<div>
  <h3>Example 1 :</h3>
  <p>true + false</p>
  <p>Answer: 1</p>
  <p>Why: true is treated as 1 and false as 0, so 1 + 0 = 1</p>
</div>

<div>
  <h3>Example 2 :</h3>
  <p>null + 1</p>
  <p>Answer: 1</p>
  <p>Why: null is converted to 0 in numeric operations</p>
</div>

<div>
  <h3>Example 3 :</h3>
  <p>"12" + 12</p>
  <p>Answer: "1212"</p>
  <p>Why: the + operator performs string concatenation</p>
</div>

<div>
  <h3>Example 4 :</h3>
  <p>!!undefined</p>
  <p>Answer: false</p>
  <p>Why: undefined is a falsy value and !! converts it to boolean</p>
</div>

<div>
  <h3>Example 5 :</h3>
  <p>"12" - 1</p>
  <p>Answer: 11</p>
  <p>Why: the - operator converts the string into a number</p>
</div>

<div>
  <p>Why typeof NaN --> number</p>
  <p>Answer: typeof NaN = "number"</p>
  <p>Why: NaN is the result of a failed numeric operation</p>
  <p>Example: "hello" - 5 --> NaN</p>
</div>

<div>
  <p>Undefined vs Null</p>
  <p>let x;</p>
  <p>console.log(x);</p>
  <p>Output: undefined</p>

  <p>let y = null;</p>
  <p>console.log(y);</p>
  <p>Output: null</p>

  <p>Difference: undefined means a variable has been declared but not assigned a value, while null means an intentional empty value</p>
</div>




<!-- example of looping  -->
<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=10; i++){
    console.log(i);
}
</p>

<p><b>Why:</b></p>
<p>
The for loop starts from 1 and increases the value by 1 each time.
It keeps running until the value becomes greater than 10.
</p>
</div>


<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>

<p><b>Answer:</b></p>
<p>
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}
</p>

<p><b>Why:</b></p>
<p>
The while loop runs as long as the condition is true.
Here, the value starts from 10 and decreases by 1 each time.
</p>
</div>


<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
</p>

<p><b>Why:</b></p>
<p>
Even numbers are divisible by 2.
The condition i % 2 === 0 checks whether the number is even.
</p>
</div>


<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>

<p><b>Answer:</b></p>
<p>
let i = 1;
while(i <= 15){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}
</p>

<p><b>Why:</b></p>
<p>
Odd numbers are not divisible by 2.
The condition i % 2 !== 0 checks for odd numbers.
</p>
</div>


<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>

<p><b>Why:</b></p>
<p>
The loop runs from 1 to 10 and multiplies 5 with each number
to print the table of 5.
</p>
</div>


<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>

<p><b>Answer:</b></p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    sum = sum + i;
}
console.log(sum);
</p>

<p><b>Why:</b></p>
<p>
Each number from 1 to 100 is added to the sum variable.
Finally, the total sum is printed.
</p>
</div>


<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=50; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}
</p>

<p><b>Why:</b></p>
<p>
A number divisible by 3 gives a remainder of 0.
The condition checks this and prints the number.
</p>
</div>


<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>

<p><b>Answer:</b></p>
<p>
let num = prompt("Give a number");
for(let i=1; i<=num; i++){
    if(i % 2 === 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}
</p>

<p><b>Why:</b></p>
<p>
The number is taken from the user.
The loop checks each number and prints whether it is even or odd.
</p>
</div>


<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>

<p><b>Answer:</b></p>
<p>
let count = 0;
for(let i=1; i<=100; i++){
    if(i % 3 === 0 || i % 5 === 0){
        count++;
    }
}
console.log(count);
</p>

<p><b>Why:</b></p>
<p>
If a number is divisible by 3 or 5, the counter is increased.
At the end, the total count is printed.
</p>
</div>


<div>
<h1>(Break) Example 10:</h1>
<p>Stop at First Multiple of 7</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i % 7 === 0){
        break;
    }
}
</p>

<p><b>Why:</b></p>
<p>
When the first multiple of 7 is found, the break statement
stops the loop completely.
</p>
</div>


<div>
<h1>(Continue) Example 11:</h1>
<p>Skip Multiples of 3</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}
</p>

<p><b>Why:</b></p>
<p>
The continue statement skips the current iteration.
So, multiples of 3 are not printed.
</p>
</div>


<div>
<h1>(Break + Continue) Example 12:</h1>
<p>Print First 5 Odd Numbers</p>

<p><b>Answer:</b></p>
<p>
let count = 0;
for(let i=1; i<=100; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
    count++;
    if(count === 5){
        break;
    }
}
</p>

<p><b>Why:</b></p>
<p>
Even numbers are skipped using continue.
Each odd number increases the counter.
When 5 odd numbers are printed, break stops the loop.
</p>
</div>










<!-- ====================================================================================================================================-->

<div>
<h1>Example 1:</h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>

<p><b>Answer:</b></p>
<p>
Function Declaration is fully hoisted, so it can be called before it is defined.
Function Expression is NOT hoisted completely, so it cannot be called before definition.
</p>

<p>Why:</p>
<p>
JavaScript moves function declarations to the top of the scope during hoisting.
But function expressions are stored in variables, and variables are not initialized during hoisting.
</p>
</div>


<div>
<h1>Example 2:</h1>
<p>greet();</p>
<p>
function greet(){
    console.log("Hello!");
}
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello!
</p>

<p><b>Error:</b></p>
<p>
No Error
</p>

<p><b>Why:</b></p>
<p>
This is a function declaration, which is hoisted.
So the function can be called before its definition.
</p>
</div>


<div>
<h1>Example 3:</h1>
<p>Convert normal function to Arrow Function</p>

<p><b>Answer:</b></p>
<p>
const add = (a, b) => {
    return a + b;
};
</p>

<p><b>How:</b></p>
<p>
Arrow functions use => syntax.
The function keyword is removed and parameters are written before =>.
</p>
</div>


<div>
<h1>Example 4:</h1>
<p>Identify what is params and what is args</p>

<p>
function welcome(name){
    console.log("Welcome " + name);
}
welcome("user");
</p>

<p><b>Answer:</b></p>
<p>
Parameter: name  
Argument: "user"
</p>

<p><b>Why:</b></p>
<p>
Parameters are variables defined in the function definition.
Arguments are the actual values passed while calling the function.
</p>
</div>


<div>
<h1>Example 5:</h1>
<p>how many parameters and args</p>

<p>
function temp (a, b, c){
    console.log(a,b,c);
}
temp(1, 2)
</p>

<p><b>Answer:</b></p>
<p>
Parameters: 3 (a, b, c)  
Arguments: 2 (1, 2)
</p>

<p><b>Error:</b></p>
<p>
No Error
</p>

<p><b>Why:</b></p>
<p>
JavaScript allows fewer arguments than parameters.
Missing arguments get the value undefined.
So c will be undefined.
</p>
</div>


<div>
<h1>Example 6:</h1>
<p>Predict the output</p>

<p>
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();
</p>

<p><b>Answer:</b></p>
<p>
Output: Hello Guest
</p>

<p><b>Error:</b></p>
<p>
No Error
</p>

<p><b>Why:</b></p>
<p>
If no argument is passed, the default parameter value "Guest" is used.
</p>
</div>


<div>
<h1>Example 7:</h1>
<p>what is ... operator and why use it in function</p>

<p>
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5)
</p>

<p><b>Answer:</b></p>
<p>
Output: [1, 2, 3, 4, 5]
</p>

<p><b>Error:</b></p>
<p>
No Error
</p>

<p><b>Why:</b></p>
<p>
The ... operator is called the Rest Operator.
It collects all arguments into a single array.
It is used when we do not know how many arguments will be passed.
</p>
</div>


<div>
<h1>Example 8:</h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>

<p><b>Answer:</b></p>
<p>
let sumtotal = calculateTotal(10, 20, 30, 40, 50);
</p>

<p><b>Error:</b></p>
<p>
The first function has an error.
</p>

<p><b>Why:</b></p>
<p>
In the first function, the loop condition is wrong:
i <= scores.length causes undefined addition.
The second function using forEach is correct and safely adds all values.
</p>
</div>


<div>
<h1>Example 9:</h1>
<p>Fix the function using early return</p>

<p><b>Answer:</b></p>
<p>
function checkAge(age){
    if(age < 18){
        return "Too Young";
    }
    return "Access Granted";
}
</p>

<p><b>How:</b></p>
<p>
Early return stops the function as soon as a condition is met.
This makes the code cleaner and easier to read.
</p>
</div>


<div>
<h1>Example 10:</h1>
<p>What is the return value of below function</p>

<p>
function f(){ 
    return;
}
</p>

<p><b>Answer:</b></p>
<p>
Return value: undefined
</p>

<p><b>Why:</b></p>
<p>
When a function uses return without a value,
JavaScript automatically returns undefined.
</p>
</div>


<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>

<p><b>Ans:</b></p>
<p>
Functions are treated like normal values in JavaScript.
</p>

<p><b>Why:</b></p>
<p>
Functions can be stored in variables, passed as arguments,
and returned from other functions.
</p>
</div>


<div>
<h1> Example 12: </h1>
<p>Can you assign a function to a variable and then call it?</p>

<p>
let a = function(){ console.log("Hello"); }
a();
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello
</p>

<p><b>Why:</b></p>
<p>
The function is stored inside variable <b>a</b>.
Calling <b>a()</b> executes the function.
</p>
</div>


<div>
<h1> Example 13: </h1>
<p>Pass a function into another function and execute it.</p>

<p>
function abcd(val){ val(); }
abcd(function(){ console.log("Hello") })
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello
</p>

<p><b>Why:</b></p>
<p>
A function is passed as an argument and executed inside another function.
</p>

<p><b>How:</b></p>
<p>
The argument <b>val</b> holds a function, and calling <b>val()</b> runs it.
</p>
</div>


<div>
<h1> Example 14: </h1>
<p>What is higher order function?</p>

<p><b>Ans:</b></p>
<p>
A function that takes another function as an argument
or returns a function.
</p>

<p><b>Why:</b></p>
<p>
It helps in writing reusable and flexible code.
</p>
</div>


<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>

<p>
let total = 5;
function num(num){
  total += num;
}
num(3);
</p>

<p><b>Ans:</b></p>
<p>
This is an <b>Impure Function</b>.
</p>

<p><b>Why:</b></p>
<p>
It uses and modifies an external variable (<b>total</b>),
so it has side effects.
</p>
</div>


<div>
<h1> Example 17: </h1>
<p>Convert example 16 function into pure function?</p>

<p><b>Ans:</b></p>
<p>
function num(total, num){
  return total + num;
}
num(5, 3);
</p>

<p><b>Why:</b></p>
<p>
The function does not depend on external variables
and always returns the same output for the same input.
</p>
</div>


<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>

<p><b>Ans:</b></p>
<p>
Closure is created when a function remembers variables
from its outer scope.
</p>

<p><b>Example:</b></p>
<p>
function outer(){
  let x = 10;
  return function(){
    console.log(x);
  }
}
</p>
</div>


<div>
<h1> Example 19: </h1>
<p>What's logged?</p>

<p>
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
</p>

<p><b>Ans:</b></p>
<p>
1<br>
2
</p>

<p><b>Error:</b></p>
<p>
No Error
</p>

<p><b>Why:</b></p>
<p>
The inner function forms a closure and remembers
the same <b>count</b> variable.
</p>
</div>


<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>

<p><b>Ans:</b></p>
<p>
(function(){
  console.log("Initialized");
})();
</p>

<p><b>Why:</b></p>
<p>
IIFE runs immediately and avoids polluting the global scope.
</p>
</div>


<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>

<p><b>Ans:</b></p>
<p>
Used for data privacy and encapsulation.
</p>

<p><b>Why:</b></p>
<p>
Variables inside IIFE are private and cannot be accessed directly.
Used in modules and counters.
</p>
</div>


<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>

<p>
temp_var();
var temp_var = function(){
    console.log("Hello");
}
</p>

<p><b>Ans:</b></p>
<p>
Error: temp_var is not a function
</p>

<p><b>Why:</b></p>
<p>
Function expressions are not hoisted.
The variable exists but its value is undefined.
</p>
</div>


<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>

<p>
temp_var();
function temp_var(){
    console.log("Hello");
}
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello
</p>

<p><b>Why:</b></p>
<p>
Function declarations are fully hoisted,
so they can be called before definition.
</p>
</div>

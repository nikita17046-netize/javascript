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




array examples 

<!-- ================= Array Method : push, pop, swift, unswift, splice, slice, reverse ================= -->

<!-- ================= Q1 ================= -->
<p><b>Q1. push()</b></p>
<p>You are building a to-do app. Add a new task 'Buy milk' to the tasks array.</p>

<pre>
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
</pre>

<p><b>Ans:</b></p>
<p>
['Wake up','Brush teeth','Buy milk']
</p>

<p><b>Why:</b></p>
<p>
push() array ke end me new element add karta hai.
</p>


<!-- ================= Q2 ================= -->
<p><b>Q2. pop()</b></p>
<p> Remove the last notification from the notifications array.</p>

<pre>
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
</pre>

<p><b>Ans:</b></p>
<p>
['Email','Message']
</p>

<p><b>Why:</b></p>
<p>
pop() last element remove karta hai.
</p>


<!-- ================= Q3 ================= -->
<p><b>Q3. shift()</b></p>
<p>A queue system removes the first customer. Remove the first customer.</p>

<pre>
let customers = ['Customer1','Customer2','Customer3'];
customers.shift();
</pre>

<p><b>Ans:</b></p>
<p>
['Customer2','Customer3']
</p>

<p><b>Why:</b></p>
<p>
shift() first element delete karta hai.
</p>


<!-- ================= Q4 ================= -->
<p><b>Q4. unshift()</b></p>
<p> A new song is added to the beginning of the playlist.</p>

<pre>
let playlist = ['Song B','Song C'];
playlist.unshift('Song A');
</pre>

<p><b>Ans:</b></p>
<p>
['Song A','Song B','Song C']
</p>

<p><b>Why:</b></p>
<p>
unshift() starting me element add karta hai.
</p>


<!-- ================= Q5 ================= -->
<p><b>Q5. splice()</b></p>
<p>In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.</p>

<pre>
let students = ['Mike','Alex','Emma','Sophia'];
students.splice(1,1,'John','Sara');
</pre>

<p><b>Ans:</b></p>
<p>
['Mike','John','Sara','Emma','Sophia']
</p>

<p><b>Why:</b></p>
<p>
Alex remove hua aur uski jagah John aur Sara aaye.
</p>


<!-- ================= Q6 ================= -->
<p><b>Q6. splice()</b></p>
<p>From the menu, remove 2 items starting from index 1.</p>

<pre>
let menu = ['Burger','Pizza','Pasta','Salad'];
menu.splice(1,2);
</pre>

<p><b>Ans:</b></p>
<p>
['Burger','Salad']
</p>

<p><b>Why:</b></p>
<p>
Index 1 se 2 items delete hue.
</p>


<!-- ================= Q7 ================= -->
<p><b>Q7. slice()</b></p>
<p>Create a new array that contains only weekend days.</p>

<pre>
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let weekend = days.slice(5);
</pre>

<p><b>Ans:</b></p>
<p>
['Saturday','Sunday']
</p>

<p><b>Why:</b></p>
<p>
slice() new array banata hai, original change nahi hota.
</p>


<!-- ================= Q8 ================= -->
<p><b>Q8. reverse()</b></p>
<p>Reverse the order of levels in a game.</p>

<pre>
let levels = ['Easy','Medium','Hard'];
levels.reverse();
</pre>

<p><b>Ans:</b></p>
<p>
['Hard','Medium','Easy']
</p>

<p><b>Why:</b></p>
<p>
reverse() array ko ulta kar deta hai.
</p>


<!-- ================= Q9 ================= -->
<p><b>Q9. sort()</b></p>
<p>Sort the scores in ascending order.</p>

<pre>
let scores = [45,12,78,34,89];
scores.sort((a,b)=>a-b);
</pre>

<p><b>Ans:</b></p>
<p>
[12,34,45,78,89]
</p>

<p><b>Why:</b></p>
<p>
Compare function number sorting ke liye use hota hai.
</p>


<!-- ================= Q10 ================= -->
<p><b>Q10. sort() numbers</b></p>
<p>Sort the prices from lowest to highest.</p>

<pre>
let prices = [199,49,999,299,149];
prices.sort((a,b)=>a-b);
</pre>

<p><b>Ans:</b></p>
<p>
[49,149,199,299,999]
</p>

<p><b>Why:</b></p>
<p>
Without compare function galat sort hota.
</p>


<!-- ================= Q11 ================= -->
<p><b>Q11. slice()</b></p>
<p>From the array, create a new array of the first 3 items WITHOUT changing the original array.</p>

<pre>
let products = ['Laptop','Phone','Tablet','Monitor','Keyboard'];
let first3 = products.slice(0,3);
</pre>

<p><b>Ans:</b></p>
<p>
['Laptop','Phone','Tablet']
</p>

<p><b>Why:</b></p>
<p>
slice() original array ko change nahi karta.
</p>


<!-- ================= Q12 ================= -->
<p><b>Q12. splice()</b></p>
<p>In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position</p>

<pre>
let colors = ['Red','Green','Blue','Yellow'];
colors.splice(2,1,'Purple','Orange');
</pre>

<p><b>Ans:</b></p>
<p>
['Red','Green','Purple','Orange','Yellow']
</p>

<p><b>Why:</b></p>
<p>
Blue remove hua aur naye colors add hue.
</p>


<!-- ================= Q13 ================= -->
<p><b>Q13. reverse + push</b></p>
<p> Reverse the array and then add 'Final Step' at the end.</p>

<pre>
let steps = ['Step 1','Step 2','Step 3'];
steps.reverse();
steps.push('Final Step');
</pre>

<p><b>Ans:</b></p>
<p>
['Step 3','Step 2','Step 1','Final Step']
</p>

<p><b>Why:</b></p>
<p>
Pehle reverse hua fir push hua.
</p>


<!-- ================= Q14 ================= -->
<p><b>Q14. sort strings</b></p>
<p> Sort names alphabetically, ignoring case sensitivity.</p>

<pre>
let names = ['alice','Bob','charlie','David'];
names.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
</pre>

<p><b>Ans:</b></p>
<p>
['alice','Bob','charlie','David']
</p>

<p><b>Why:</b></p>
<p>
Case ignore karke sort hota.
</p>


<!-- ================= Q15 ================= -->
<p><b>Q15. Combination Question</b></p>
<p>You are managing a movie watchlist:
 1. Add 'Inception'
 2. Remove the first movie
 3. Sort the list alphabetically</p>

<pre>
let movies = ['Avatar','Titanic','Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
</pre>

<p><b>Ans:</b></p>
<p>
['Gladiator','Inception','Titanic']
</p>

<p><b>Why:</b></p>
<p>
Push, shift, sort teenon use hue.
</p>


<!-- ================= Q16 ================= -->
<p><b>Q16. splice() return value</b></p>
<p> What does the splice method return in this case?</p>

<pre>
let nums1 = [1,2,3,4];
let removed = nums1.splice(1,2);
</pre>

<p><b>Ans:</b></p>
<p>
Removed: [2,3]
</p>

<p><b>Why:</b></p>
<p>
splice removed elements return karta hai.
</p>


<!-- ================= Q17 ================= -->
<p><b>Q17. slice immutability check</b></p>
<p>After executing slice, does the original array change?</p>

<pre>
let nums2 = [10,20,30,40];
let result = nums2.slice(1,3);
</pre>

<p><b>Ans:</b></p>
<p>
Result: [20,30]
<br>nums2 unchanged
</p>

<p><b>Why:</b></p>
<p>
slice non-mutating hai.
</p>


<!-- ================= Q19 ================= -->
<p><b>Q19. reverse mutation</b></p>
<p>After reversing, what happens to the original array reference?</p>

<pre>
let letters = ['a','b','c'];
let reversed = letters.reverse();
</pre>

<p><b>Ans:</b></p>
<p>
['c','b','a']
</p>

<p><b>Why:</b></p>
<p>
reverse original array change karta hai.
</p>


<!-- ================= Q21 ================= -->
<p><b>Q21. splice deleteCount 0</b></p>
<p>What happens if deleteCount is 0?</p>

<pre>
let arr = ['x','y','z'];
arr.splice(1,0,'new');
</pre>

<p><b>Ans:</b></p>
<p>
['x','new','y','z']
</p>

<p><b>Why:</b></p>
<p>
0 means delete nahi, sirf insert.
</p>


<!-- ================= Q23 ================= -->
<p><b>Q23. slice negative</b></p>
<p> What elements are returned?</p>

<pre>
let values = [100,200,300,400,500];
let sliced = values.slice(-3,-1);
</pre>

<p><b>Ans:</b></p>
<p>
[300,400]
</p>

<p><b>Why:</b></p>
<p>
Negative index end se count karta hai.
</p>


<!-- ================= Q24 ================= -->
<p><b>Q24. slice vs splice</b></p>
<p>Which method would you use if you want to:
// a. Update the original array
// b. Keep the original array unchanged</p>

<p><b>Ans:</b></p>
<p>
a. splice()<br>
b. slice()
</p>

<p><b>Why:</b></p>
<p>
splice change karta hai, slice nahi.
</p>


<!-- ================= Q25 ================= -->
<p><b>Q25. Chained methods</b></p>
<p>What is the final value of arr?</p>

<pre>
let arr2 = [1,2,3];
arr2.push(arr2.shift());
</pre>

<p><b>Ans:</b></p>
<p>
[2,3,1]
</p>

<p><b>Why:</b></p>
<p>
shift first element hata kar push me daal deta hai.
</p>



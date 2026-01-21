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

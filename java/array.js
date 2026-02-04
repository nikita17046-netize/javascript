//array --hold multiple values at same time
//["mobile","laptop","tablet",5000,25,588]
//["a","b","hello"]

// create 
//variable_name=[values]
let arr=[1,2,3,4];

//access
//position[0 1 2 3]
//access
//array_name[position/index]
arr[0]

//modify
//array_name[position]=new value
arr[0]=10;
arr[1]=20;
arr[2]=30;
arr[3]=40;

//array Method;
//push,pop,shift,unshift,splice,indexof,includes,length
//push-->enter new value into array--place it into last
let a=[1,2,3,4,5];
//varible|| function.method--> koi variable ke funcxtion in puchh
a.push(700);
//use case -- enter new produvts into existing prdoduct list

//pop-->remove last value into array
let b=[10,20,30,40];
b.pop();
//use case --- remove last product you add into your list


//shift-->remove first value from array
let c=[100,200,300,400];
c.shift();
//use case -- remove old product automatic after somtimes

//unshift -- add value into array --first
let d =[52,35,65,85];
d.unshift();
//use case -- add a valur into top of that data you receive

// splice – remove value into array –– specific position and
// specific number of values
// into () – first index(position), how many value you want to
// remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case –– select msg and remove multiple msg at on click

// slice – copy values from array –– specific position and
// specific number of values
// new variable = array_name.slice(start index, end index)
// start index –– include into copy
// end index –– not include into copy
let f = [100, 50, 25, 0];
// let new_f = f.slice(1, 3);
// use case –– copy specific data and save it into new variable
//generate a report based on date and generate a file or save the file into your local machine


//spilce vs slice
//splice -- remove value into ,main array ot modify new array
//slice --copy value from main array and create a new array that hold the value that you can into

//revese -- reverse the array values
let g=[25,30,35,40,85];
//g.reverse();
//use case -- show latest  updates first into your frontend

//sort --- set into ascending order
let h =[50,20,80,10,40];
h.sort();
//let h =[11,62,3,4,25];
// let sr = h.sort(function(a,b){
//     return a- b;// ascending order
// })



// ================================== example of array Q1 to 25 ==================================================

// <!-- Q1 -->
let tasks = ['Wake up', 'Brush teeth'];
// tasks.push('Buy milk');

// <!-- Q2 -->
let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop();

// <!-- Q3 -->
let customers = ['Customer1','Customer2','Customer3'];
// customers.shift();

// <!-- Q4 -->
let playlist = ['Song B','Song C'];
playlist.unshift('Song A');

// <!-- Q5 -->
let students = ['Mike','Alex','Emma','Sophia'];
// students.splice(1,1,'John','Sara');

// <!-- Q6 -->
let menu = ['Burger','Pizza','Pasta','Salad'];
menu.splice(1,2);

// <!-- Q7 -->
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let weekend = days.slice(5);

// <!-- Q8 -->
let levels = ['Easy','Medium','Hard'];
levels.reverse();

// <!-- Q9 -->
let scores = [45,12,78,34,89];
scores.sort((a,b)=>a-b);

// <!-- Q10 -->
let prices = [199,49,999,299,149];
prices.sort((a,b)=>a-b);

// <!-- Q11 -->
let products = ['Laptop','Phone','Tablet','Monitor','Keyboard'];
let first3 = products.slice(0,3);

// <!-- Q12 -->
let colors = ['Red','Green','Blue','Yellow'];
colors.splice(2,1,'Purple','Orange');

// <!-- Q13 -->
let steps = ['Step 1','Step 2','Step 3'];
steps.reverse();
steps.push('Final Step');

// <!-- Q14 -->
let names = ['alice','Bob','charlie','David'];
names.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));

// <!-- Q15 -->
let movies = ['Avatar','Titanic','Gladiator'];
movies.push('Inception');
movies.shift();


// <!-- Q16 -->
let nums1 = [1,2,3,4];
let removed = nums1.splice(1,2);

// <!-- Q17 -->
let nums2 = [10,20,30,40];
let result = nums2.slice(1,3);

// <!-- Q19 -->
let letters = ['a','b','c'];
let reversed = letters.reverse();

// <!-- Q21 -->
let array = ['x','y','z'];
array.splice(1,0,'new');

// <!-- Q23 -->
let values = [100,200,300,400,500];
let sliced = values.slice(-3,-1);

// <!-- Q24 -->
// a) splice()
// b) slice()

// <!-- Q25 -->
let arr2 = [1,2,3];
arr2.push(arr2.shift());


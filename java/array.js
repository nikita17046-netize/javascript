// //array --hold multiple values at same time
// //["mobile","laptop","tablet",5000,25,588]
// //["a","b","hello"]

// // create 
// //variable_name=[values]
// let arr=[1,2,3,4];

// //access
// //position[0 1 2 3]
// //access
// //array_name[position/index]
// arr[0]

// //modify
// //array_name[position]=new value
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;

// //array Method;
// //push,pop,shift,unshift,splice,indexof,includes,length
// //push-->enter new value into array--place it into last
// let a=[1,2,3,4,5];
// //varible|| function.method--> koi variable ke funcxtion in puchh
// a.push(700);
// //use case -- enter new produvts into existing prdoduct list

// //pop-->remove last value into array
// let b=[10,20,30,40];
// b.pop();
// //use case --- remove last product you add into your list


// //shift-->remove first value from array
// let c=[100,200,300,400];
// c.shift();
// //use case -- remove old product automatic after somtimes

// //unshift -- add value into array --first
// let d =[52,35,65,85];
// d.unshift();
// //use case -- add a valur into top of that data you receive

// // splice – remove value into array –– specific position and
// // specific number of values
// // into () – first index(position), how many value you want to
// // remove
// let e = [50, 60, 30, 40, 10];
// e.splice(3, 2);
// // e.splice(3, 0, 50, 100)
// // use case –– select msg and remove multiple msg at on click

// // slice – copy values from array –– specific position and
// // specific number of values
// // new variable = array_name.slice(start index, end index)
// // start index –– include into copy
// // end index –– not include into copy
// let f = [100, 50, 25, 0];
// // let new_f = f.slice(1, 3);
// // use case –– copy specific data and save it into new variable
// //generate a report based on date and generate a file or save the file into your local machine


// //spilce vs slice
// //splice -- remove value into ,main array ot modify new array
// //slice --copy value from main array and create a new array that hold the value that you can into

// //revese -- reverse the array values
// let g=[25,30,35,40,85];
// //g.reverse();
// //use case -- show latest  updates first into your frontend

// //sort --- set into ascending order
// let h =[50,20,80,10,40];
// h.sort();
// //let h =[11,62,3,4,25];
// // let sr = h.sort(function(a,b){
// //     return a- b;// ascending order
// // })



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






















//For each loop
// for Each -- array in darek value mate loop chalse

let i =[10,35,40,68];

i.forEach((val)=>{
    let new_val =val+10;
    console.log(new_val);

});
[5,58,42,"hello"].forEach(val=>{
    let new_arr=val +4;
    console.log(new_arr)
});

//important 
//.map()Method:
//map tyare j use karva ke jayare ek new arrat crate karo che
//first map create a black array -- only for understanding
let data =[10,20,50,40,15];
//same like a for each loop but map return a new array
let temp_data=data.map((val) =>{
    if(val>20){
        return val;
    }
});
//use case --data ma thi specific data new arrat ma store karva hoy
//ex. product ma thi specific category na product new array ma store karva hot
//if  you want to show only electronics product on your homepage
let marks=[10,5,20,25,15]
let final_marks=marks.map((val)=>{
    if (val==5){
        return val+4;
    }
    return val;
})

//filter
//filter tyare use karva ke jayare ek new arrat create karvo che with condition
//in return true/false
// if true -->addd into new array
//if else(false)--> not add into0 new array
let laptops_price=[15000,20000,30000,65000,99000,45000];
let expensive_leptop= laptops_price.filter((price)=>{
    if (price>30000)return true;
});
// je value 30000 thi vathare che te new arrat ma add thase and biji value ne array ma add nahi kare

//use case-- data ma thi specific data new array ma store karvo goy based on condition
//ex. product ma thi specific price na product new arrrat ma store karva hoy
//if you want to show only expensive product on your homepage
//if you want to filter product based on price

let product_tyoe =["moblie","Tablet","leptop","mouse","keybord"];
let filter_product_type = product_tyoe.filter((type)=>{
    if (type==="tablet"||type==="mobile")return true;
});


//reduce 
//reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price=[10,68,45,20,52,48];
let final_price=total_price.reduce((accumulator,val)=>{
    return accumulator+val;

},0); //initial value of accumulator

//0+10 => 10
//10+68 => 78
//78 + 45 => 123

console.log("Final price:",final_price)
//acc-->je value function ma return thase te acc ma store thase -->acc name change kari sako cho
//val --> array ni darek value
//use case --data ma thi ek gingle value calulate karvi hoy
//ex. product ma thi total price calculate karvi hoy 




// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself --not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet",
"Desktop", "Smart Watch"];
let find_product = product.find(function (item) {
if (item === "Tablet") {
  return true;
} else if (item === "Mobile") {
  return true;
} else {
  return false;
  // console.log("can't find product"); not working
 // why??
}
});

// use case -- data ma thi ek value find karvi hoy based on condition
// ex. producat ma thi specific producat find karvo hoy based on name
// find vs filter
// Real-life Scenario: Shopping Mall Security
// you are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna","David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
let person = people.find((name) => name === "Sara");
console.log(person);

// filter --> you want to find all visitors named "sara" in the list(all data check kare and list na end suthi check kare)
let allsara=people.filter((name) =>name ==="sara");
console.log(allsara);


//some
//check satisfy che ke array ma koi pan ek item condition satisfy kare ke nahi
// condition true aave tyare stop kare
// some() vs find() ---> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some(function (val) {
    if (val > 85) return true;
    // if(val < 85) return "need improvement";
});
// use case -- check if some product are out of stock in your cart



//every
// check kare chhe ke array ma baddha j item condition satisfy kare chhe ke nahi
// true -- baddha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 40, 50];
let num = def.every(function (val) {
    return val < 60;
});

// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some()   --> item === "Mobile"  --> true
// .find()   --> item === "Mobile"  --> "Mobile"
// .filter() --> item === "Mobile"  --> ["Mobile", "Mobile"]
// .every()  --> item === "Mobile"  --> false



 // Destructuring operator -- give value to variable (ex. we don't use every time arr[1], just save it into variable let [ , k] = arr)
let arr4 = [1, 2, 3, 4, 5];
let [j, k] = arr4; // --> destructuring
// let [j, , k] = arr;
console.log(k);
let temp_a =arr4[4]
let temp_b =arr4[2]
let temp_c =arr4[1]
let user_data =["text","text@gmail.com","male","surat"]


// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3; // --> just give reference not
// copy value(when you change into arr4 that will be
// change arr3 too)

let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spread --> into Array and Object

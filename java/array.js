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

// // <!-- Q1 -->
// let tasks = ['Wake up', 'Brush teeth'];
// // tasks.push('Buy milk');

// // <!-- Q2 -->
// let notifications = ['Email', 'Message', 'Reminder'];
// // notifications.pop();

// // <!-- Q3 -->
// let customers = ['Customer1','Customer2','Customer3'];
// // customers.shift();

// // <!-- Q4 -->
// let playlist = ['Song B','Song C'];
// playlist.unshift('Song A');

// // <!-- Q5 -->
// let students = ['Mike','Alex','Emma','Sophia'];
// // students.splice(1,1,'John','Sara');

// // <!-- Q6 -->
// let menu = ['Burger','Pizza','Pasta','Salad'];
// menu.splice(1,2);

// // <!-- Q7 -->
// let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// let weekend = days.slice(5);

// // <!-- Q8 -->
// let levels = ['Easy','Medium','Hard'];
// levels.reverse();

// // <!-- Q9 -->
// let scores = [45,12,78,34,89];
// scores.sort((a,b)=>a-b);

// // <!-- Q10 -->
// let prices = [199,49,999,299,149];
// prices.sort((a,b)=>a-b);

// // <!-- Q11 -->
// let products = ['Laptop','Phone','Tablet','Monitor','Keyboard'];
// let first3 = products.slice(0,3);

// // <!-- Q12 -->
// let colors = ['Red','Green','Blue','Yellow'];
// colors.splice(2,1,'Purple','Orange');

// // <!-- Q13 -->
// let steps = ['Step 1','Step 2','Step 3'];
// steps.reverse();
// steps.push('Final Step');

// // <!-- Q14 -->
// let names = ['alice','Bob','charlie','David'];
// names.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));

// // <!-- Q15 -->
// let movies = ['Avatar','Titanic','Gladiator'];
// movies.push('Inception');
// movies.shift();


// // <!-- Q16 -->
// let nums1 = [1,2,3,4];
// let removed = nums1.splice(1,2);

// // <!-- Q17 -->
// let nums2 = [10,20,30,40];
// let result = nums2.slice(1,3);

// // <!-- Q19 -->
// let letters = ['a','b','c'];
// let reversed = letters.reverse();

// // <!-- Q21 -->
// let array = ['x','y','z'];
// array.splice(1,0,'new');

// // <!-- Q23 -->
// let values = [100,200,300,400,500];
// let sliced = values.slice(-3,-1);

// // <!-- Q24 -->
// // a) splice()
// // b) slice()

// // <!-- Q25 -->
// let arr2 = [1,2,3];
// arr2.push(arr2.shift());






















// //For each loop
// // for Each -- array in darek value mate loop chalse

// let i =[10,35,40,68];

// i.forEach((val)=>{
//     let new_val =val+10;
//     console.log(new_val);

// });
// [5,58,42,"hello"].forEach(val=>{
//     let new_arr=val +4;
//     console.log(new_arr)
// });

// //important 
// //.map()Method:
// //map tyare j use karva ke jayare ek new arrat crate karo che
// //first map create a black array -- only for understanding
// let data =[10,20,50,40,15];
// //same like a for each loop but map return a new array
// let temp_data=data.map((val) =>{
//     if(val>20){
//         return val;
//     }
// });
// //use case --data ma thi specific data new arrat ma store karva hoy
// //ex. product ma thi specific category na product new array ma store karva hot
// //if  you want to show only electronics product on your homepage
// let marks=[10,5,20,25,15]
// let final_marks=marks.map((val)=>{
//     if (val==5){
//         return val+4;
//     }
//     return val;
// })

// //filter
// //filter tyare use karva ke jayare ek new arrat create karvo che with condition
// //in return true/false
// // if true -->addd into new array
// //if else(false)--> not add into0 new array
// let laptops_price=[15000,20000,30000,65000,99000,45000];
// let expensive_leptop= laptops_price.filter((price)=>{
//     if (price>30000)return true;
// });
// // je value 30000 thi vathare che te new arrat ma add thase and biji value ne array ma add nahi kare

// //use case-- data ma thi specific data new array ma store karvo goy based on condition
// //ex. product ma thi specific price na product new arrrat ma store karva hoy
// //if you want to show only expensive product on your homepage
// //if you want to filter product based on price

// let product_tyoe =["moblie","Tablet","leptop","mouse","keybord"];
// let filter_product_type = product_tyoe.filter((type)=>{
//     if (type==="tablet"||type==="mobile")return true;
// });


// //reduce 
// //reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
// let total_price=[10,68,45,20,52,48];
// let final_price=total_price.reduce((accumulator,val)=>{
//     return accumulator+val;

// },0); //initial value of accumulator

// //0+10 => 10
// //10+68 => 78
// //78 + 45 => 123

// console.log("Final price:",final_price)
// //acc-->je value function ma return thase te acc ma store thase -->acc name change kari sako cho
// //val --> array ni darek value
// //use case --data ma thi ek gingle value calulate karvi hoy
// //ex. product ma thi total price calculate karvi hoy 




// // find
// // find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// // find() return kare chhe array no element --> callback no return value nahi
// // never returns what you return inside it
// // returns the array element itself --not return array
// // .find() stops at the first match
// // It does not continue looping

// let product = ["Laptop", "Mobile", "Tablet",
// "Desktop", "Smart Watch"];
// let find_product = product.find(function (item) {
// if (item === "Tablet") {
//   return true;
// } else if (item === "Mobile") {
//   return true;
// } else {
//   return false;
//   // console.log("can't find product"); not working
//  // why??
// }
// });

// // use case -- data ma thi ek value find karvi hoy based on condition
// // ex. producat ma thi specific producat find karvo hoy based on name
// // find vs filter
// // Real-life Scenario: Shopping Mall Security
// // you are a security guard at a shopping mall
// // chack the list of visitors
// let people = ["John", "Sara", "Mike", "Anna","David", "Sara"];
// // find --> you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
// let person = people.find((name) => name === "Sara");
// console.log(person);

// // filter --> you want to find all visitors named "sara" in the list(all data check kare and list na end suthi check kare)
// let allsara=people.filter((name) =>name ==="sara");
// console.log(allsara);


// //some
// //check satisfy che ke array ma koi pan ek item condition satisfy kare ke nahi
// // condition true aave tyare stop kare
// // some() vs find() ---> some() can't return you value its return true or false, find() return value of array
// // give ans in true and false
// let marks1 = [10, 20, 35, 90];
// let any = marks1.some(function (val) {
//     if (val > 85) return true;
//     // if(val < 85) return "need improvement";
// });
// // use case -- check if some product are out of stock in your cart



// //every
// // check kare chhe ke array ma baddha j item condition satisfy kare chhe ke nahi
// // true -- baddha items condition match kare
// // false -- ek pan fail thay to
// let def = [20, 30, 40, 50];
// let num = def.every(function (val) {
//     return val < 60;
// });

// // use case --> check all student is pass or not

// // some(), find(), filter(), every()
// // let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// // method --> condition --> output
// // .some()   --> item === "Mobile"  --> true
// // .find()   --> item === "Mobile"  --> "Mobile"
// // .filter() --> item === "Mobile"  --> ["Mobile", "Mobile"]
// // .every()  --> item === "Mobile"  --> false



//  // Destructuring operator -- give value to variable (ex. we don't use every time arr[1], just save it into variable let [ , k] = arr)
// let arr4 = [1, 2, 3, 4, 5];
// let [j, k] = arr4; // --> destructuring
// // let [j, , k] = arr;
// console.log(k);
// let temp_a =arr4[4]
// let temp_b =arr4[2]
// let temp_c =arr4[1]
// let user_data =["text","text@gmail.com","male","surat"]


// // spread oprator -- copy value from main array
// let arr8 = [1, 2, 3, 4, 5, 6, 7];

// // let arr4 = arr3; // --> just give reference not
// // copy value(when you change into arr4 that will be
// // change arr3 too)

// let arr9 = [...arr8];

// // ... --> rest --> into function
// // ... --> spread --> into Array and Object

// // Example 1: Double daily steps count
// const Steps = [1000, 2000, 3000];
// const newSteps = Steps.map(step => step * 2);

// // Example 2: Convert minutes to seconds
// const minutes = [1, 5, 10];
// const seconds = minutes.map(min => min * 60);

// // Example 3: Add ₹50 delivery charge
// const prices1 = [200, 350, 500];
// const finalPrices = prices1.map(price => price + 50);

// // Example 4: Convert exam marks to grades
// const mark1 = [35, 72, 88, 40];
// const grades = mark1.map(mark => mark >= 40 ? 'Pass' : 'Fail');

// // Example 5: Capitalize names
// const name = ['rahul', 'neha', 'amit'];
// const formattedNames = names.map(name => name[0].toUpperCase() + name.slice(1));

// // Example 6: Apply 10% discount
// const prices2 = [500, 1000, 1500];
// const discounted = prices2.map(price => price - price * 0.10);

// // Example 7: Add bonus points to scores
// const score = [45, 60, 85];
// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });

// // Example 8: Convert Celsius to Fahrenheit
// const celsius = [0, 20, 30];
// const fahrenheit = celsius.map(temp => (temp * 9 / 5) + 32);

// // Example 9: Generate table of two
// const numbers = [1, 2, 3, 4];
// const tableOfTwo = numbers.map(num => num * 2);

// // Example 10: Format balance messages
// const balances = [500, 1200, 300];
// const messages = balances.map(balance => `Your balance is ₹${balance}`);


// // Example 1: Get even numbers
// const numbers1 = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers1.filter(num => num % 2 === 0);

// // Example 2: Filter adults
// const ages = [2, 1, 10, 16, 5];
// const adults = ages.filter(age => age >= 18);

// // Example 3: Remove empty items
// const inputs = ['Hello', '', 'World', '', 'JS'];
// const validInputs = inputs.filter(text => text !== '');

// // Example 4: Filter passing marks
// const mark = [35, 72, 88, 40, 25];
// const passedStudents = mark.filter(mark => mark >= 40);

// // Example 5: Get affordable prices
// const price = [199, 499, 999, 1499, 299];
// const affordable = price.filter(price => price <= 500);

// // Example 6: Filter long words
// const word = ['hi', 'hello', 'javascript', 'ok'];
// const longWords = word.filter(word => word.length > 3);

// // Example 7: Filter positive numbers
// const transaction = [200, -100, 500, -50, 300];
// const credits = transaction.filter(amount => amount > 0);

// // Example 8: Filter numbers within a range
// const scoree = [45, 60, 85, 30, 90];
// const selectedScores = scoree.filter(score => score >= 50 && score <= 90);


// // =======================
// // JAVASCRIPT REDUCE EXAMPLES
// // =======================

// // 1. Total money in wallet
// // Real life: Add all cash amounts
// const money = [100, 200, 50];
// const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// console.log('Total money:', totalMoney); // 350

// // --------------------------------------------------

// // 2. Total steps walked in a week
// // Real life: Fitness tracker
// const step = [3000, 5000, 4000, 6000];
// function addSteps(total, step) {
//   return total + step;
// }
// const weeklySteps = steps.reduce(addSteps, 0);
// console.log('Weekly steps:', weeklySteps); // 18000

// // --------------------------------------------------

// // 3. Find total cart price
// // Real life: Shopping bill
// const Prices = [499, 299, 199];
// const totalPrice = Prices.reduce((total, price) => total + price, 0);
// console.log('Total cart price:', totalPrice); // 997

// // --------------------------------------------------

// // 4. Find maximum score
// // Real life: Highest exam mark
// const Marks = [45, 88, 67, 92];
// const highest = Marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
// console.log('Highest score:', highest); // 92

// // --------------------------------------------------

// // 5. Count total characters
// // Real life: Text length calculation
// const words = ['Hi', 'Hello', 'JS'];
// const totalChars = words.reduce((count, word) => count + word.length, 0);
// console.log('Total characters:', totalChars); // 9

// // --------------------------------------------------

// // 6. Combine words into a sentence
// // Real life: Message builder
// const wordsSentence = ['Learning', 'JavaScript', 'is', 'fun'];
// const sentence = wordsSentence.reduce((text, word) => text + ' ' + word);
// console.log('Sentence:', sentence); // "Learning JavaScript is fun"

// // --------------------------------------------------

// // 7. Count passed students
// // Real life: Result summary
// const examMarks = [35, 72, 88, 40, 25];
// const passCount = examMarks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);
// console.log('Passed students:', passCount); // 3

// // --------------------------------------------------

// // 8. Calculate final balance
// // Real life: Bank account calculation
// const transactions = [1000, -200, -300, 500];
// const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// console.log('Final balance:', finalBalance); // 1000

// // --------------------------------------------------

// // 9. Build comma-separated string
// // Real life: Display values in UI
// const items = ['Pen', 'Book', 'Pencil'];
// const results = items.reduce((text, item) => text + ', ' + item);
// console.log('Comma-separated items:', results); // "Pen, Book, Pencil"



// // ===============================
// // MAP + FILTER + REDUCE PRACTICE
// // ===============================

// // Q1. Shopping App – Discounted Total
// const price1 = [200, 800, 1200, 450, 700];
// const total1 = price1
//   .filter(price => price > 500)
//   .map(price => price * 0.9)
//   .reduce((sum, price) => sum + price, 0);
// console.log('Q1 - Total to pay:', total1); // 2430

// // --------------------------------------------------

// // Q2. Fitness App – Total Active Minutes
// const minute = [20, 45, 60, 15, 90];
// const totalCalories = minute
//   .filter(min => min > 30)
//   .map(min => min * 5)
//   .reduce((total, cal) => total + cal, 0);
// console.log('Q2 - Total calories burned:', totalCalories); // 975

// // --------------------------------------------------

// // Q3. Exam System – Average of Passed Marks
// const markss = [35, 72, 88, 40, 25, 90];
// const passed = markss.filter(mark => mark >= 40);
// const averagePassed = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
// console.log('Q3 - Average of passed marks:', averagePassed); // 72.5

// // --------------------------------------------------

// // Q4. Salary System – Monthly Payout
// const wages = [300, 800, 450, 1000, 600];
// const totalPayout = wages
//   .filter(wage => wage > 500)
//   .map(wage => wage + 100)
//   .reduce((total, wage) => total + wage, 0);
// console.log('Q4 - Total payout:', totalPayout); // 2600

// // --------------------------------------------------

// // Q5. Online Course – Completion Points
// const progress = [20, 50, 75, 40, 100];
// const totalPoints = progress
//   .filter(p => p >= 50)
//   .map(p => p * 2)
//   .reduce((sum, p) => sum + p, 0);
// console.log('Q5 - Total points:', totalPoints); // 450

// // --------------------------------------------------

// // Q6. Bank Transactions – Final Balance
// const transactionss = [1000, -500, 2000, -300, 1500];
// const creditedAmount = transactionss
//   .filter(amount => amount > 0)
//   .map(amount => amount * 1.02)
//   .reduce((total, amount) => total + amount, 0);
// console.log('Q6 - Final credited amount:', creditedAmount); // 4590

// // --------------------------------------------------

// // Q7. Game App – Final Score
// const scoress = [30, 60, 90, 45, 80];
// const finalScore = scoress
//   .filter(score => score > 50)
//   .map(score => score + 10)
//   .reduce((sum, score) => sum + score, 0);
// console.log('Q7 - Final score:', finalScore); // 250

// // --------------------------------------------------

// // Q8. E-commerce – Total Taxed Amount
// const pricess2 = [500, 1200, 3000, 800, 1500];
// const finalAmount = pricess2
//   .filter(price => price > 1000)
//   .map(price => price * 1.18)
//   .reduce((sum, price) => sum + price, 0);
// console.log('Q8 - Final payable amount:', finalAmount); // 6746

// // --------------------------------------------------

// // Q9. Attendance System – Reward Points
// const hours = [6, 8, 9, 7, 10];
// const rewardPoints = hours
//   .filter(hour => hour >= 8)
//   .map(hour => hour * 10)
//   .reduce((sum, point) => sum + point, 0);
// console.log('Q9 - Total reward points:', rewardPoints); // 270

// // --------------------------------------------------

// // Q10. Interview Brain Teaser ⭐
// const numberss = [1, 2, 3, 4, 5, 6];
// const sumOfSquares = numberss
//   .filter(num => num % 2 === 0)
//   .map(num => num * num)
//   .reduce((sum, num) => sum + num, 0);
// console.log('Q10 - Sum of squares of even numbers:', sumOfSquares); // 56



// // ===============================
// // MAP + FILTER + REDUCE – 20 PRACTICE
// // ===============================

// // Q1. Grocery Store – Total Cost
// const pricess1 = [50, 120, 300, 80, 200];
// const totalCost = pricess1
//   .filter(p => p > 100)
//   .map(p => p * 1.05)
//   .reduce((sum, p) => sum + p, 0);
// console.log('Q1 - Total cost:', totalCost); // 735

// // --------------------------------------------------

// // Q2. Fitness App – Weekly Calories
// const minutes2 = [10, 25, 40, 15, 60];
// const totalCalories2 = minutes2
//   .filter(min => min >= 20)
//   .map(min => min * 4)
//   .reduce((sum, cal) => sum + cal, 0);
// console.log('Q2 - Total calories:', totalCalories2); // 520

// // --------------------------------------------------

// // Q3. Exam Results – Total Passed Marks
// const marks3 = [35, 55, 80, 20, 45];
// const totalPassedMarks = marks3
//   .filter(mark => mark >= 40)
//   .reduce((sum, mark) => sum + mark, 0);
// console.log('Q3 - Total passed marks:', totalPassedMarks); // 180

// // --------------------------------------------------

// // Q4. Bank App – Total Credits
// const transactions4 = [500, -200, 1000, -300, 700];
// const totalCredits = transactions4
//   .filter(t => t > 0)
//   .reduce((sum, t) => sum + t, 0);
// console.log('Q4 - Total credits:', totalCredits); // 2200

// // --------------------------------------------------

// // Q5. Online Sale – Discounted Bill
// const prices5 = [800, 1500, 3000, 600, 1200];
// const totalPayable = prices5
//   .filter(p => p > 1000)
//   .map(p => p * 0.85)
//   .reduce((sum, p) => sum + p, 0);
// console.log('Q5 - Total payable amount:', totalPayable); // 5100

// // --------------------------------------------------

// // Q6. Attendance – Reward Points
// const hours6 = [5, 7, 8, 6, 9];
// const totalPoints6 = hours6
//   .filter(h => h >= 7)
//   .map(h => h * 10)
//   .reduce((sum, p) => sum + p, 0);
// console.log('Q6 - Total reward points:', totalPoints6); // 240

// // --------------------------------------------------

// // Q7. Delivery App – Total Distance
// const distances7 = [3, 6, 10, 4, 8];
// const totalDistance7 = distances7
//   .filter(d => d > 5)
//   .map(d => d + 1)
//   .reduce((sum, d) => sum + d, 0);
// console.log('Q7 - Total distance:', totalDistance7); // 26

// // --------------------------------------------------

// // Q8. Salary System – Final Salary
// const salaries8 = [18000, 25000, 30000, 15000];
// const totalSalary = salaries8
//   .filter(s => s > 20000)
//   .map(s => s + 2000)
//   .reduce((sum, s) => sum + s, 0);
// console.log('Q8 - Total salary payout:', totalSalary); // 59000

// // --------------------------------------------------

// // Q9. Study App – Total Study Time
// const hours9 = [0.5, 1.5, 2, 0.75, 3];
// const totalStudyMinutes = hours9
//   .filter(h => h > 1)
//   .map(h => h * 60)
//   .reduce((sum, m) => sum + m, 0);
// console.log('Q9 - Total study minutes:', totalStudyMinutes); // 390

// // --------------------------------------------------

// // Q10. Electricity Usage – Monthly Bill
// const units10 = [80, 120, 200, 90, 150];
// const totalBill = units10
//   .filter(u => u > 100)
//   .map(u => u * 6)
//   .reduce((sum, b) => sum + b, 0);
// console.log('Q10 - Total electricity bill:', totalBill); // 2820

// // --------------------------------------------------

// // Q11. Game Scores – Final Power Score
// const scores11 = [30, 50, 90, 20, 70];
// const totalPowerScore = scores11
//   .filter(s => s > 40)
//   .map(s => s * 2)
//   .reduce((sum, s) => sum + s, 0);
// console.log('Q11 - Total power score:', totalPowerScore); // 420

// // --------------------------------------------------

// // Q12. Travel App – Total Fare
// const rides12 = [5, 12, 20, 8, 15];
// const totalFare = rides12
//   .filter(r => r > 10)
//   .map(r => r + 50)
//   .reduce((sum, r) => sum + r, 0);
// console.log('Q12 - Total fare:', totalFare); // 147

// // --------------------------------------------------

// // Q13. Office Work – Productive Hours
// const hours13 = [4, 6, 8, 5, 9];
// const totalProductiveMinutes = hours13
//   .filter(h => h >= 6)
//   .map(h => h * 60)
//   .reduce((sum, m) => sum + m, 0);
// console.log('Q13 - Total productive minutes:', totalProductiveMinutes); // 1260

// // --------------------------------------------------

// // Q14. Shopping Cart – Reward Coins
// const purchases14 = [300, 800, 1200, 400];
// const totalCoins = purchases14
//   .filter(p => p > 500)
//   .map(p => 10)
//   .reduce((sum, c) => sum + c, 0);
// console.log('Q14 - Total coins earned:', totalCoins); // 20

// // --------------------------------------------------

// // Q15. Fuel App – Total Fuel Cost
// const liters15 = [3, 6, 10, 4, 8];
// const totalFuelCost = liters15
//   .filter(l => l > 5)
//   .map(l => l * 105)
//   .reduce((sum, cost) => sum + cost, 0);
// console.log('Q15 - Total fuel cost:', totalFuelCost); // 2940

// // --------------------------------------------------

// // Q16. Interview Classic – Sum of Cubes
// const numbers16 = [1, 2, 3, 4, 5];
// const sumOfCubes = numbers16
//   .filter(n => n % 2 !== 0)
//   .map(n => n ** 3)
//   .reduce((sum, n) => sum + n, 0);
// console.log('Q16 - Sum of cubes of odd numbers:', sumOfCubes); // 153

// // --------------------------------------------------

// // Q17. Performance Tracking – Bonus Points
// const scores17 = [10, 20, 30, 40, 50];
// const average17 = scores17.reduce((sum, s) => sum + s, 0) / scores17.length;
// const totalBonusScore = scores17
//   .filter(s => s > average17)
//   .map(s => s + 5)
//   .reduce((sum, s) => sum + s, 0);
// console.log('Q17 - Total score with bonus:', totalBonusScore); // 110

// // --------------------------------------------------

// // Q18. Subscription App – Final Bill
// const plans18 = [199, 399, 599, 299];
// const totalBill18 = plans18
//   .filter(p => p > 300)
//   .map(p => p * 1.18)
//   .reduce((sum, p) => sum + p, 0);
// console.log('Q18 - Final subscription bill:', totalBill18); // 1181.18

// // --------------------------------------------------

// // Q19. Learning App – Achievement Score
// const scores19 = [45, 60, 70, 30, 80];
// const totalAchievementScore = scores19
//   .filter(s => s >= 60)
//   .map(s => s ** 2)
//   .reduce((sum, s) => sum + s, 0);
// console.log('Q19 - Total achievement score:', totalAchievementScore); // 15800

// // --------------------------------------------------

// // Q20. Interview Finisher ⭐
// const numbers20 = [3, 6, 9, 10, 12];
// const totalSum20 = numbers20
//   .filter(n => n % 3 === 0)
//   .map(n => n * 10)
//   .reduce((sum, n) => sum + n, 0);
// console.log('Q20 - Total sum:', totalSum20); // 300


// // Array methods: find() vs some()
// // 1. find() – First even number (First available even seat)
// const seats1 = [3, 5, 8, 10, 7];
// const firstEvenSeat = seats1.find(seat => seat % 2 === 0);
// console.log('First even seat:', firstEvenSeat);

// // 2. some() – Any even number? (Any VIP seat)
// const seats2 = [3, 5, 7, 9];
// const hasEvenSeat = seats2.some(seat => seat % 2 === 0);
// console.log('Has even seat:', hasEvenSeat);

// // 3. find() – First passing mark
// const marks1 = [25, 35, 40, 60];
// const firstPass = marks1.find(mark => mark >= 40);
// console.log('First passing mark:', firstPass);

// // 4. some() – Any failed student?
// const marks2 = [60, 70, 55, 30];
// const hasFail = marks2.some(mark => mark < 40);
// console.log('Any failed student:', hasFail);

// // 5. find() – First affordable product
// const prices1 = [1500, 1200, 800, 2000];
// const affordable = prices1.find(price => price <= 1000);
// console.log('First affordable product:', affordable);

// // 6. some() – Any discount item?
// const prices2 = [500, 800, 1200, 300];
// const hasDiscountItem = prices2.some(price => price < 500);
// console.log('Has discount item:', hasDiscountItem);

// // 7. find() – First long word
// const words = ['hi', 'hello', 'javascript', 'ok'];
// const longWord = words.find(word => word.length > 5);
// console.log('First long word:', longWord);

// // 8. some() – Any empty input?
// const inputs = ['name', 'email', '', 'password'];
// const hasEmpty = inputs.some(input => input === '');
// console.log('Has empty input:', hasEmpty);

// // 9. find() – First high transaction
// const transactions = [200, 500, 1200, 3000, 400];
// const highTransaction = transactions.find(amount => amount > 1000);
// console.log('First high transaction:', highTransaction);

// // 10. some() – System alert check
// const temperatures = [30, 32, 35, 42, 36];
// const isOverheated = temperatures.some(temp => temp > 40);
// console.log('System overheated:', isOver)

// // Q1. Shopping List – Price Increase
// const prices1 = [100, 200, 300];
// const updatedPrices = prices1.map(p => p + 20);
// console.log('Q1:', updatedPrices);

// // Q2. Exam Marks – Passing Students
// const marks2 = [35, 60, 45, 20, 80];
// const passingMarks = marks2.filter(m => m >= 40);
// console.log('Q2:', passingMarks);

// // Q3. Attendance Check
// const attendance = [80, 90, 70, 85];
// const lowAttendance = attendance.some(a => a < 75);
// console.log('Q3:', lowAttendance);

// // Q4. Find First Discounted Item
// const prices4 = [1200, 800, 450, 600];
// const discountedItem = prices4.find(p => p < 500);
// console.log('Q4:', discountedItem);

// // Q5. Salary Calculation
// const salaries5 = [18000, 25000, 30000, 15000];
// const totalPayout = salaries5
//   .filter(s => s > 20000)
//   .map(s => s + 2000)
//   .reduce((sum, s) => sum + s, 0);
// console.log('Q5:', totalPayout);

// // Q6. Product Quality Check
// const ratings = [4, 5, 4, 4];
// const allGood = ratings.every(r => r >= 4);
// console.log('Q6:', allGood);

// // Q7. Daily Expenses – Total
// const expenses7 = [200, 150, 300, 100];
// const totalExpenses = expenses7.reduce((sum, e) => sum + e, 0);
// console.log('Q7:', totalExpenses);

// // Q8. Scores Update
// const scores8 = [45, 60, 80, 30, 70];
// const updatedScores = scores8.filter(s => s > 50).map(s => s + 10);
// console.log('Q8:', updatedScores);

// // Q9. Array Destructuring – Top Scores
// const scores9 = [95, 90, 85, 80];
// const [first, second] = scores9;
// console.log('Q9:', first, second);

// // Q10. Shopping Cart Merge
// const cart1 = [200, 400];
// const cart2 = [300, 500];
// const mergedCart = [...cart1, ...cart2];
// console.log('Q10:', mergedCart);

// // Q11. Expense Validation
// const expenses11 = [200, 450, 800, 1200];
// const validExpenses = expenses11.every(e => e < 1000);
// console.log('Q11:', validExpenses);

// // Q12. Transaction Analysis
// const transactions = [500, -200, 1200, 300];
// const firstAbove1000 = transactions.find(t => t > 1000);
// const hasNegative = transactions.some(t => t < 0);
// console.log('Q12:', firstAbove1000, hasNegative);

// // Q13. Student Result Summary
// const marks13 = [30, 45, 60, 25, 80];
// const passing13 = marks13.filter(m => m >= 40);
// const avgMarks = passing13.reduce((s, m) => s + m, 0) / passing13.length;
// console.log('Q13:', avgMarks);

// // Q14. Temperature Alert System
// const temps = [22, 30, 45, 28];
// const exceeds40 = temps.some(t => t > 40);
// const allAbove20 = temps.every(t => t > 20);
// console.log('Q14:', exceeds40, allAbove20);

// // Q15. Spread + Reduce Combo
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const total15 = [...a, ...b].reduce((sum, n) => sum + n, 0);
// console.log('Q15:', total15);

// // Q16. Bonus Eligibility
// const scores16 = [60, 70, 80, 90];
// const avg16 = scores16.reduce((s, n) => s + n, 0) / scores16.length;
// const eligible = scores16.every(s => s > avg16);
// console.log('Q16:', eligible);

// // Q17. First Valid Input
// const inputs = ['', '', 'name', 'email'];
// const firstValid = inputs.find(i => i !== '');
// console.log('Q17:', firstValid);

// // Q18. Salary Spread
// const salaries18 = [20000, 30000, 40000];
// const newSalaries = [...salaries18, 50000];
// console.log('Q18:', newSalaries);

// // Q19. Performance Check
// const performance = [55, 65, 45, 80];
// const anyBelow50 = performance.some(p => p < 50);
// const allAbove60 = performance.every(p => p > 60);
// console.log('Q19:', anyBelow50, allAbove60);

// // Q20. Interview Finisher
// const x = [1, 2, 3];
// const y = [4, 5, 6];
// const result20 = [...x, ...y]
//   .filter(n => n % 2 === 0)
//   .map(n => n * n)
//   .reduce((sum, n) => sum + n, 0);
// console.log('Q20:', result20);
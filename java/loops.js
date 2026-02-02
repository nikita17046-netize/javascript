// loops -- repeating code blocks
// 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7

// for loop
// why use for loop? when you know how many times you want to repaat a block of code.
// print 1 to 10 --> consol.log(1); consol.log(2); ....... consol.log(10);
// kya thi javanu chhe --> kya sudhi javanu che --> kevi rite javanu chhe
// for (ex. 1 -> 50 -> increment by 1)
// (start; end; change)
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let j = 9; j >= 1; j--){
//     console.log (j)
// }

// let k = 5;
// while (k <= 20){
//     console.log("k with while loop :", k);
//     k++;
// }

// let h = 50;
// while (h >= 20){
//     console.log (h);
//     h--;
//     console.log (h);
// }

// let d= "30";
// while (d >= 20){
//     console.log (d);
//     d--;
// }

// do while loop
// do {} while (end);
// start
// do {
// code
// change}
// while(end);
let j = 12; // start
do {
    console.log("do while loop:" , j); // code
    j++; // change (condition)
    }  while (j < 20); // while check after executing code block (end)

let z = 15; // start
do{
    console.log("do while loop error:", z); // code
z++;
} while (z < 20);  // change (condition)
// why:

// break
 for (let k = 1; k <= 201; k++) {
    console.log("loop with break", k);
    if (k === 24){
        break;
    }
 }

//  for (let k = 15; k <= 201; k++){
//     console.log("loop with break 2", k);
//     if (k <= "24"){
//         break;
//     }
//  }


// for (let m = 0; m <= 201; m++) {
//   if (m >= 24) {
//     break;
//   }
//   console.log("loop with break 3", m);
// }

// continue
 for (let a = 1; a <= 10; a++){
    if (a === 5){
        continue;
    }
    console.log(a);
 }

//  for (let a = 1; a <=10; a++){
//     if (a <= 5){
//         continue;
//     }
//     console.log("loop that skip numbers", a);
//  }



//  Example 1
for (let B = 1; B <=10; B++){
    if (B < 11)
        console.log ("loop start", B);
}

// Example 2
for (let C = 10; C >= 1; C--){
        console.log ("loop start 2", C);
    }

// Example 3
for(let i=1; i<=20; i++)
if(i%2 ===0){
console.log(i);
}

// // Example 4
let i = 1;
while (i <= 15) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// example 5
for(let i=1; i<=20; i++){
    console.log(`6 x ${i} = ${6*i}`);
}

// // example 6
let sum = 0;

for(let i=1; i<=100; i++){
    sum = sum + i;
}
console.log(sum);

// // example 7
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}

for(let i=1; i <= 100; i++){
    if(i%2 === 0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
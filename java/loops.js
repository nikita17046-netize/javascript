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

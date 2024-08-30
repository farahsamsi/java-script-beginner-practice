/**
 * ternary --> three parts
 * 
 *      ?       :
 * 
 * condition ? do something when TRUE : do something when FALSE    
 */

const age = 12;


// -----normal if else-----
// if (age >= 18){
//     console.log('You can vote');
// }
// else {
//     console.log('No vote');
// }


// ---simple ternary---
// age >= 18 ? console.log('Vote') : console.log('No vote')

let price = 500;
const isLeader = true;

// if (isLeader === true){
//     price = 0;
// }
// else{
//     price = price +100;
// }


price = isLeader===true? 0 : price+100;
 
console.log(price);
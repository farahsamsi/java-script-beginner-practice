// logical operators


const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;

// ------AND operator-------
// if(salary > 20000 && height > 66){
//     console.log('su----patro');
// }
// else{
//     console.log('onno patro khuji');
// }


// --------OR operator----------
// if (salary > 25000 || height >72 || isBCS == true){
//     console.log('eso baba');
// }
// else{
//     console.log('vaag mokbul')
// }


// complex condition
// if ((salary > 25000 && hasCar == true) || isBCS == true){
//     console.log('eso baba');
// }
// else{
//     console.log('vaag mokbul')
// }

if ((salary > 25000 || hasCar == true) && isBCS == true){
    console.log('eso baba');
}
else{
    console.log('vaag mokbul')
}
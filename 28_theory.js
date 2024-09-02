// const : value will not change
// let : value can change
// var : we should not use

// varriable
const amount = 299;

// condition
if (amount> 100){

}
else{

}

// array 
const numbers=[12, 24, 564, 32];

//while loop
let num=0; //loop variable
while(num<3) {   //loop condition
    console.log(num); //loop statement
    num++;  //loop variable change
}


// do while loop --> at least 1bar output dekhabei
let n=3;
do{
    console.log(n);
    n++;
}
while(n<=5)

// for loop
// for( loop variable declaration ; condition ; change)
for(let num= 0; num<5 ; num++){
    console.log(num);
}

// continue --> skip this one
// continue-->skip rest of the code for this iteration
for (let i=1 ; i<10 ; i++){
    if(i%2===1){
        continue;
    }
    console.log(i);
}
// break --> i am done with this loop, loop end
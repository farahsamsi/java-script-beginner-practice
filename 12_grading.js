// 100-91 -------- A+
// 90-81 --------- A
// 80-71 --------- B
// 70-61 --------- C
// 60-51 --------- D
// 50< ----------- Fail

const mark = 62;

if(mark >= 91){
    console.log('Result A+')
}
else if(mark<=90 && mark >= 81){
    console.log('Result A')
}
else if(mark<=80 && mark >= 71){
    console.log('Result B')
}
else if(mark<=70 && mark >= 61){
    console.log('Result C')
}
else if(mark<=60 && mark >= 51){
    console.log('Result C')
}
else{
    console.log('Result FAIL')
}
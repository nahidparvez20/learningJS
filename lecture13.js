let arr = [5,9,1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];    
// }
// console.log('Sum = ', sum);

let result = arr.reduce((a,b)=>{
    // return a+b;
    // return a*b;
    // return a/b;
    return a-b;
})
console.log('Result = ', result);
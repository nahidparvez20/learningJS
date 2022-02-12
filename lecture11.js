let arr = [5,9,1,2,3,4,5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 == 1 ) {
//         newArr.push(arr[i]);
//     }    
// }
// console.log('New Array = '+ newArr);

//Odd Number..
// let newArr = arr.filter(function(value) {
//     return value % 2 == 1;    
// });
// console.log('New Array Odd = ', newArr)


//Even Number..
// let newArr = arr.filter(function(value) {
//     return value % 2 == 0;    
// });
// console.log('New Array Even Number = ', newArr)


function myFilter(arr, callback) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
        
    }
    return newArr;        
}
let myArr =  myFilter(arr,function (element) {
    return element % 2 == 1; 
    
})

console.log('My Array Filtered Data = ' + myArr);


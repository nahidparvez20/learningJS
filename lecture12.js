let arr = [5,9,1,2,3,4,5];
// let mapedArr = [];
// for (let i = 0; i < arr.length; i++) {
//     mapedArr.push(arr[i] + 2);
    
// }
// console.log('This is Mapped Array =' + mapedArr);

/*let mapedArr = arr.map(function(value) {
    return value +2;
    
})
console.log('This is Map method Array = ' + mapedArr);*/

function myMap(arr, callback){
    let mapedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let data = callback(arr[i]);
        mapedArr.push(data);
        // mapedArr.push(callback(arr[i]));        
    }
    return mapedArr  ;  
}

// let myArr =  myMap(arr, function(value)
let myArr =  myMap(arr, (value) =>{
    return value + (5 - 2 * 3);
})
console.log('My New Array = ' + myArr);
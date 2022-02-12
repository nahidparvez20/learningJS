// let arr = [5,9,1,2,3,4,5];
// arr.forEach(element => {
//     console.log('Element is = ' + element + 'Index is = ' + index);
// });

let arr = [5,9,1,2,3,4,5];
/*arr.forEach(function(element, index, arr){
    console.log('Element is = ' + element + ' Index is = ' + index + ' arr = ', arr);
});*/
function loop(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        callback(arr[i], i);     
    }    
}
loop(arr, function (element, i) {
        console.log('Element is ',element, ' Index is = ' + i );
})


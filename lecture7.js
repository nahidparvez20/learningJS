// function host() {
//     console.log("I am Host Function");
//     return function () {
//         console.log("I am Child Function");
//     }
// }
// var a = host();
// console.log(a());

/*function host() {
    console.log("I am Host Function");
    function Child () {
        console.log("I am Child Function");
    }
    return Child 
}
var a = host();
console.log(a());*/


// function greeting(msg) {
//     return function (name) {
//         console.log(msg+''+name);        
//     }
    
// }

function greeting(msg) {
     function ret (name) {
        console.log(msg+''+name);        
    }
    return ret;
    
}

var salam = greeting('Assalamualaikum WaRahmatullah');
var answer = greeting('Walaikum Assalam Warahmatullah');

salam(' Nahid Tech');
answer(' FurQan ');
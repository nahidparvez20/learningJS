// var name = "Nahid Tech";
// function sayName() {
//     console.log('Hello, ' + name);
// }
// // console.dir(sayName);
// sayName();


function greeting(msg) {
        return function (name) {
            console.log(msg+''+name);        
        }
        
    }

var salam = greeting('Assalamualaikum WaRahmatullah');
// var answer = greeting('Walaikum Assalam Warahmatullah');

salam(' Nahid Tech');
// answer(' FurQan ');
//innner Function

// function outer() {
//     function inner() {
//         console.log("I am Inner Function");
//     }
//     inner();
//     console.log("I am Outer function");
// }


// outer();

function add(a,b) {
   function sum() {
       return a+b;
   }
   function sub() {
       return a-b;
   }
   function times() {
    return a*b;
   }
   function div() {
    return a/b;
   }
   return sum()+sub()+times()+div(); 
}

var result = add(642,9);
console.log(result);

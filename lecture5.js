let arr = [4, 5, 1, 0, 8];

function cbf(a){
    console.log(a);  //callback
    
};

arr.forEach(cbf)

// arr.forEach(a => {
//     console.log(a); //callback
    
// });

function caller() {
    return function (name) {
        return 'caller calling You ! ' +name;
    }
    
}
var x = caller();
x
var Y = x('Nahid Parvez');
Y
var z = x ('Nahid Tech');
z

var a = caller()('Nahid Tech')
a
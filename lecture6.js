// function hello(name) {
//     print(name);
//     print('Somthing Else');
    
// }

// function print(args) {
//     console.log(args);
    
// }
// hello('Nahid Tech');


function hello(name, print) {
    print(name);
  
    
}
// hello('Nahid Tech', print);

// function print(args) {
//     console.log(args);
    
// }

/*
hello('Nahid Tech', function (name) {
    console.log('Hello ' + name);
});

hello('Nahid Tech', function (name) {
    console.log('Hi, How r You ' + name +' ?' );
});
hello('Nahid Parvez', function (name) {
    console.log('Length of ' + name +' is = ' + name.length);
});*/

/*
let me = {
    name: 'Mohammad Nahid Parvez',
    age: 17,
    email: 'tusharparvez@gmail.com',    
}
function printMySelf(person, callback ) {
    console.log('person: ' + person.name + '(' + person.age + ')');
    if (person.age >= 18) {
        callback(person.email);
    }else{
        console.log('You are not Adult');
    }
    
}
printMySelf(me, function (email) {
    console.log('e-mail sent to ' + email);
    
})*/

function print(data, callback1, callback2) {
    console.log('Original Data: ' + data);
    callback1(data);
    callback2(data);
    
}
print('Nahid Tech is awasome technology service for every man', function (data) {
    var data = data.toUpperCase();
    console.log('Uppercase: ' + data);
}, function (data) {
    var data = data.toLowerCase();
    console.log('Lowercase: ' + data);
    console.log('Length:' + data.length);
}) ; 
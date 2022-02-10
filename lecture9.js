/*
let arr = [67,34,21,45,6,29,38,55,76,10];
arr.sort(function (a,b) {
    return a-b;
});
// arr.sort(function (a,b) {
//     return b-a;
// });...reverse sorting

console.log(arr);*/

let people = [
    {name:'Nahid Parvez', age:45},
    {name:'Saeed Parvez', age:48},
    {name:'Rayan Ibn Saeed ', age:21},
    {name:'FurQan Ibn Saeed', age:11},
    {name:'Mahmud', age:24},
    {name:'Hafiz Parvez', age:35},
    {name:'Usama Ibn Zaeed', age:17},
    {name:'Zaeed Ibn Harisa', age:33}
]
// people.sort(function (a,b) {
//     return a.age - b.age;
    
// });
// people.sort(function (a,b) {
//     return b.age - a.age;
    
// });

people.sort(function (a,b) {
    if (a.name > b.name) {
        return 1;        
    } else if (a.name < b.name) {
        return -1;
    }else{
        return 0;
    }   
    
});
console.log(people);
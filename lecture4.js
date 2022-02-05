function originName(firstName, lastName, gender) {
    var output;
    if (gender === 'male') {
        output = 'Mr. ' + firstName + ' ' + lastName;
        
              
    } else if (gender === 'female') {
        output = 'Ms. ' + firstName + ' ' + lastName;        
    }
    return output; 
    
}
var fullName = originName('Nahid', 'Parvez', 'male')
console.log(fullName);
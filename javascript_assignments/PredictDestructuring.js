//For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

//1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//This should print "Tesla" and "Mercedes" but not "Honda" because we are skipping the first element by using the comma operator, and assigning it to the otherRandomCar variable.

//2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
//This should print "undefined" and "Elon" because the name property is not being assigned to the otherName variable, but to the name property of the employee object.
//And we get "Elon" because we are assigning the name property of the employee object to the otherName variable.

//3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//This should print "12345" and "undefined" because the password property is not being assigned to the hashedPassword variable, but to the password property of the person object.

//4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //first is equal to 2
const [,,,second] = numbers; //second is equal to 5
const [,,,,,,,,third] = numbers; //third is equal to 2
//Predict the output
console.log(first == second); 
console.log(first == third);
//This should print "False", then "True" because "first" and "second" are not equal, and "first" and "third" are.

//5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //key is equal to "value"
const { secondKey } = lastTest; //secondKey is equal to [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //willThisWork is equal to 5
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//This should print "value",  "[1, 5, 1, 8, 3, 3]", "1", and "5"

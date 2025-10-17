function EmployeeInfo(name, salary) {
    console.log("Welcome " + name + ". Your monthly salary is " + salary);
}

console.log("This is my first program");

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};

EmpSkills("Java");

const student= require('./StudentInfo')
const person = require('./person') 
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")

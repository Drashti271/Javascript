// Employee Data 

let employees = [
    {
        id : 101, 
        name : "John Doe",
        email : "johndoe@gmail.com",
        age : 25,
        department : "IT Department"
    },
    {
        id : 102, 
        name : "Smith Desai",
        email : "smith@gmail.com",
        age : 27,
        department : "Computer Engeering"
    },
    {
        id : 103, 
        name : "Drashti Bilimoria",
        email : "drashti@gmail.com",
        age : 20,
        department : "Full Stack Development"
    },
    {
        id : 104, 
        name : "Venisha Patel",
        email : "venisha@gmail.com",
        age : 23,
        department : "Accounter"
    },
    {
        id : 105,
        name : "Krishna Patel",
        email : "krishna@gmail.com",
        age : 21,
        department : "UI/UX Designer"
    }
];

console.log(employees);

// Map 

let employeeData1 = employees.map((emp) => {
    return emp.name.toUpperCase();
})

console.log(employeeData1);

// Filter 

let employeeData2 = employees.filter((emp) => {
    return emp.name === "Drashti Bilimoria";
})

console.log(employeeData2);

// Find

// Empid
let employee = employees.find((emp) => emp.id === 105);

console.log(employee);

// EmpName
let empName = employees.find((emp) => emp.name === "Smith Desai");

console.log(empName);

// Empemail

let empEmail = employees.find((emp) => emp.email === "venisha@gmail.com");
console.log(empEmail);

// EmpDepartment 
let empDepartment = employees.find((emp) => emp.department === "IT Department");

console.log(empDepartment);

// FindIndex

let index = employees.findIndex((emp) => emp.id === 103);

console.log(index);
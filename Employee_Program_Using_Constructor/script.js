class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log('constructor called..');
    }
}

class Employee extends Person {
    constructor(name,age,department,salary) {
        super(name,age);
        this.department = department;
        this.salary = salary;
        console.log('sub constructor..');
    }
}

let e1 = new Employee("Drashti",20,"Full Stack Development",20000);
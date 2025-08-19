class Employee {
    constructor(name,age,department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    setName (name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setDepartment(department) {
        this.department = department;
    }
}

let e1 = new Employee();

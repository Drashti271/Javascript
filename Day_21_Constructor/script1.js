class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log('constructor called..');
    }
}

class Student extends Person {
    constructor(name,age,education) {
        super(name,age);
        this.education = education;
        console.log('sub constructor..');
    }
}

let s1 = new Student('Drashti',20,'BCA');
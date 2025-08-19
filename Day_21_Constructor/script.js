class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log('sleep');
    }

    eat() {
        console.log('eat');
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }
}

let p1 = new Person();
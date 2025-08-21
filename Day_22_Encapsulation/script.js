class Car {
    constructor(fule) {
        this.fule = fule;
    }

    BurnFule() {
        this.fule -= 1;
    }

    Start() {
        this.BurnFule();
        console.log('Car Start.');
    }
};

let car = new Car(10);
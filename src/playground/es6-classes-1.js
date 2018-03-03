
class Person {
    constructor(name='Anonymous', surname, age=0) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.location}`;
        }
        return greeting;
    }
}


const p = new Traveller('Vlad', 'Computer Science', 'Kharkiv');
const a = new Traveller(undefined, undefined, 'test');
console.log(p.getGreeting());
console.log(a.getGreeting()); 
interface Person{
    name: string;
    getDetails(): string;
}

interface DogOwner{
    dogName: string;
    getDogDetails(): string;
}

interface Person{
    age: number;
}

interface Employee extends Person{
    employeeId: number;
}

interface Manager extends Person, DogOwner{
    managePeople(): void;
}

const person: Person = {
    name: "Alice",
    age: 30,
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

const employee: Employee = {
    name: "jane",
    age: 28,
    employeeId: 123,
    getDetails(){
        return `Name: ${this.name}, Employee ID: ${this.employeeId}, Age: ${this.age}`;
    }
}

const manager: Manager = {
    name: "Bob",
    age: 40,
    dogName: "Rex",
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Dog Name: ${this.dogName}`;
    },
    getDogDetails(){
        return `Dog Name: ${this.dogName}`;
    },
    managePeople() {
        console.log(`${this.name} is managing people.`);
    },
}


console.log(person.getDetails());
console.log(employee.getDetails());
console.log(manager.getDetails());
console.log(manager.getDogDetails());
// manager.managePeople();
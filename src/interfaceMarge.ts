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

const person: Person = {
    name: "Alice",
    age: 30,
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};


console.log(person.getDetails());
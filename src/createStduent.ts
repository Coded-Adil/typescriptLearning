function createStudent (student: {id:number, name:string}): void {
    console.log(`Welcome ${student.name.toUpperCase()}`);
}

const newStudent = {
    id: 2021,
    name: "Saki"
}

createStudent(newStudent);
createStudent({id:232, name:"Kom"});
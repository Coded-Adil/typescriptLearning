type Employee = {id:number, name:string, department:string};
type Manager = {id:number, name:string, employees: Employee[]};

type Staff = Employee | Manager

function printStuffDetails(staff: Staff): void{
    if('employees' in staff){

    }
    else {
        console.log();
    }
}

const adolf: Employee = {id: 1, name: "Adolf", department: "Army"};
const trump: Employee = {id: 1, name: "Trump", department: "Sales"};

const oda: Manager = {id: 1, name: "Oda", employees: [adolf, trump]};
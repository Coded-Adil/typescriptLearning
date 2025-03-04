type Employee = {id:number, name:string, department:string};
type Manager = {id:number, name:string, employees: Employee[]};

type Staff = Employee | Manager

function printStuffDetails(staff: Staff): void{
    if('employees' in staff){
        console.log(`Manager ${staff.name} has ${staff.employees.length} employees`);
    }
    else {
        console.log(`${staff.name} is employee in the ${staff.department} department`);
    }
}

const adolf: Employee = {id: 1, name: "Adolf", department: "Army"};
const trump: Employee = {id: 1, name: "Trump", department: "Sales"};

const oda: Manager = {id: 1, name: "Oda", employees: [adolf, trump]};

printStuffDetails(adolf);
printStuffDetails(oda);
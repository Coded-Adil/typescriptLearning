const names:string[] = ['Adil', 'Shruty', 'Adrita', 'Lopa', 'Ayra', 'Tusty'];
let isName: boolean = false;

function nameChecker(name: string):string {
    for (const nam of names) {
        if (nam.toUpperCase() === name.toUpperCase()) {
            isName = true;
            break;
        }
        isName = false;
    }

    if (isName) {
        return "Yes";
    }
    return "No";
}

const result = nameChecker("Jon");
console.log(result);
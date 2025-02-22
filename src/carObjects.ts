let car: {brand: string; year: number} = {brand: "toyota", year: 2024};

car.brand = "ford";
// car.color = "blue";

// let van: {brand: string; year: number} = {brand: "audi", year: 2020};

console.log(car);

let book = {title: "DSA", cost: 30}
let pen = {title: "matador", cost: 10}
let notebook = {title: "fresh"}

let items: {title:string; cost?:number}[] = [book, pen, notebook];
items[0].title = "Story"
console.log(items[0]);
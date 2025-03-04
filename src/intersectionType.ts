type Book = {id:number, name:string, price:number};
type DescountedBook = Book & {discount:number};

const book1: Book = {
    id: 1,
    name: "DSA",
    price: 1200
}

const book2: Book = {
    id: 2,
    name: "Python for begginers",
    price: 1800
}

// const descountedBook: Book & {discount: number} = {
    const descountedBook: DescountedBook = {
    id: 3,
    name: "Machine Learning For Babys",
    price: 1700,
    discount: 0.15
}

console.log(book1, book2, descountedBook);

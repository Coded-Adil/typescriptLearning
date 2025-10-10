type Book = {id: number; name: string; price: number};
type DiscountedBook = Book & {discount: number};

const book1: Book = {
    id: 1,
    name: 'The Great Gatsby',
    price: 10.99
};

const book2: Book = {
    id: 2,
    name: '1984',
    price: 8.99,
};

const discountedBook: DiscountedBook = {
    id: 3,
    name: 'To Kill a Mockingbird',
    price: 12.99,
    discount: 0.2 
};

console.log(book1);
console.log(book2);
console.log(discountedBook);
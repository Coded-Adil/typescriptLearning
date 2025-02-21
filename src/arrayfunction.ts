const books = ['2024', 'DSA', '3AM', 'One Piece 1111'];

let foundBook: string | undefined;

for (let book of books) {
    if (book === 'One Piece 1111') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}


console.log(foundBook?.length);
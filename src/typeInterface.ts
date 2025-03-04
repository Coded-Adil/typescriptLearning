interface Book{
    readonly isbn: number,
    title: string,
    author: string,
    genre?: string
}

const deepWork: Book = {
    isbn:123,
    title:'deep work',
    author: 'Cal newport',
    genre: "self-help" 
}

console.log(deepWork);
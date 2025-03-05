interface Book{
    readonly isbn: number,
    title: string,
    author: string,
    genre?: string
    // method
    printAuthor():void
}

const deepWork: Book = {
    isbn:123,
    title:'deep work',
    author: 'Cal newport',
    genre: "self-help",
    printAuthor(){
        console.log(this.author);
    } 
}

deepWork.printAuthor();
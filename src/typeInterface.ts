interface Book{
    readonly isbn: number,
    title: string,
    author: string,
    genre?: string
    // method
    printAuthor():void;
    printTitle(message:string):string;
}

const deepWork: Book = {
    isbn:123,
    title:'deep work',
    author: 'Cal newport',
    genre: "self-help",
    printAuthor(){
        console.log(this.author);
    }, 
    printTitle(message){
        return `${this.title} ${message}`;
    } 
}

deepWork.printAuthor();
const result = deepWork.printTitle('is a nice book');
console.log(result);
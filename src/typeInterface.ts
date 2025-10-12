interface Book{
    readonly id: number,
    name: string,
    author: string,
    genre?: string; // optional property
    // method
    printAuthor():void;
    printTitle(message:string):string;
}

const deepWork: Book = {
    id:123,
    name:'deep work',
    author: 'Cal newport',
    genre: "self-help",
    printAuthor(){
        console.log(this.author);
    }, 
    printTitle(message){
        return `${this.name} ${message}`;
    } 
}

deepWork.printAuthor();
const result = deepWork.printTitle('is a nice book');
console.log(result);
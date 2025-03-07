function processData(input:number | string, config:{reverse:boolean}={reverse:false}):string | number{
    if(typeof(input) === 'number'){
        return input*input;
    }
    else {
        return config.reverse?input.toUpperCase().split('').reverse().join():input.toUpperCase();
    }
}

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", {reverse: true}));
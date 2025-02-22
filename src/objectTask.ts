let bike:{brand: string; year: number} = {brand: 'yamaha', year: 2020};
// bike.year = 'one';
let laptop:{brand: string; year: number} = {brand: 'asus', year: 2022};
// let laptop1:{brand: string; year: number} = {brand: 'dell'};
console.log(bike, laptop);

let product1 = {title: 'shirt', price: 20};
let product2 = {title: 'watch'};
let products: {title: string; price?: number}[] = [product1, product2]
console.log(products);
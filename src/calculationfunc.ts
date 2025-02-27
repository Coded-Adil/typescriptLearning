function calculatePrice (price: number, discount: number) {
    return price - discount;
}

let priceAfterDescount = calculatePrice(100, 20);

console.log(priceAfterDescount);
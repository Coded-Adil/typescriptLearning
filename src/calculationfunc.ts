function calculatePrice (price: number, discount: number): number {
    return price - (discount || 0);
}

let priceAfterDescount = calculatePrice(100, 20);

console.log(priceAfterDescount);
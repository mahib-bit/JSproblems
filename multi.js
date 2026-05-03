function discountedPrice(quantity) {
    if (quantity < 10) {
    return quantity * 100;
    }
    else if (quantity >= 10 && quantity < 20) {
    const discount = quantity * 0.2;
    return quantity * 100 - discount;
    }
    else
    {
        const discount = quantity * 0.3;
        return quantity * 100 - discount;
    } 

}

const total = discountedPrice(23);
const total2 = discountedPrice(5);
const total3 = discountedPrice(15);
console.log(`The price is: ${total}`);
console.log(`The price is: ${total2}`);
console.log(`The price is: ${total3}`);
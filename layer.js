function layeredDiscount(quantity) {
    const first100Discount = 100;
    const second100Discount = 90;
    const above200Discount = 70;  
    
     if(quantity <= 100) {
        const price = quantity * first100Discount;
        return price;
    }
     else if(quantity <= 200) {
        const fist100Price = 100 * first100Discount;
        const remainingQuantity = quantity - 100;
        const remainingPrice = remainingQuantity * second100Discount;
        return first100Discount + remainingPrice;
    }
    else  {
        const fist100Price = 100 * first100Discount;
        const second100Price = 100 * second100Discount;
        const remainingQuantity = quantity - 200;
        const remainingPrice = remainingQuantity * above200Discount;
        return first100Discount + second100Price + remainingPrice;
    }
}

const total = layeredDiscount(250);
console.log(`The price is: ${total}`);
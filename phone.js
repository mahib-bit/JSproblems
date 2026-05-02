const phonePrices = [299, 399, 499, 599, 699];

function cheapestPhone(prices){
    let cheapest = prices[0];
    for(price of prices) {
        if(price < cheapest) {
            cheapest = price;
        }
    }
    return cheapest;
}

const cheapest = cheapestPhone(phonePrices);
console.log(`The cheapest phone price is: ${cheapest}`);
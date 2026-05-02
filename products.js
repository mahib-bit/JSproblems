const products = [
    {name: `shampoo`, price: 120, quantity : 1},
    {name: `soap`, price: 20, quantity : 3},
    {name: `toothpaste`, price: 50, quantity :1},
    {name: `deodorant`, price: 300, quantity : 2},
]

function getShoppingList(products){
    let sum = 0;
    for(product of products) {
        sum += product.price * product.quantity;
        console.log(product);
}
    return sum;
}
const shoppingList  = getShoppingList(products);
console.log(`The shopping cost was: `,shoppingList);
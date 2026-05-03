function fullName(firstName, lastName) {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return  "Both firstName and lastName must be strings.";
    }
    return firstName + " " + lastName;   
}

const full = fullName("John", "Doe");
// console.log(full);

function getPrice(product) {
    if(typeof product !== "object"){
        return "Product name must be a object.";
    }
    return product.price
}
const price = getPrice({name: "Laptop", price: 999.99});
console.log(price);

function getSecond(numbers) {
    if (!Array.isArray(numbers)) {
        return "Input must be an array.";
    }
    return numbers[1];
}
const second = getSecond([1, 23, 423,43,12,42])
console.log(second);
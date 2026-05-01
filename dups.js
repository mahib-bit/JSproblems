const biryaniKhor = ["chicken", "mutton", "egg", "vegetable", "paneer", "fish", "mutton", "egg"];
const numbers = [1, 2, 3, 4, 5,5,2,7,7,91 ,32,];

function noDuplicates(arr) {
    const unique = [];
   for(const item of arr) {
   if(!unique.includes(item)) {
    unique.push(item);
}

}
return unique;
}
const uniqueItems = noDuplicates(biryaniKhor);
console.log(uniqueItems);
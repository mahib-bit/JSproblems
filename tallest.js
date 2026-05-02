const height = [42,12,17,18,24,28,27,25,26,29];

function tallest(numbers) { 
    let max = numbers[0]; // Initialize max to the first element of the array
    for(num of numbers) {
        if(num > max) {
            max = num;
        }
        console.log(num);
    }
    return max;
}
const maxHeight = tallest(height);
console.log(`The tallest height is: ${maxHeight}`);
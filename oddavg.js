function odd_average(numbers) {
    for(const number of numbers) {
    if (number % 2 === 1) {
        console.log(number);
    }
}
}
let sum = 0;
for(const number of numbers) {
    sum += number;
}
const count = numbers.length;
const average = sum / count;
console.log(`The sum of the numbers is: ${sum}`);

const my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = odd_average(my_numbers);
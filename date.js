const today = new Date();
console.log(today);

const specificDate = new Date('2022-0-01');
console.log(specificDate);

// Get components of the date like year, month, day
console.log(today.getFullYear());
console.log(today.getMonth() + 1); // Months are zero-indexed January is 0
console.log(today.getDate());
console.log(today.getDay()); // Days are zero-indexed (0 = Sunday)
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
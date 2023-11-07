const nums = [1,2,3,4,5,6,7,8,7]

nums.forEach(num => {
    console.log(num)
});

nums.forEach(function (num,index) {
    console.log(`${num},and ${index}`)
});

const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

console.log(nums.filter(function (num) {
    return num > 5
}))

// Mapping

// Example 1: Doubling each element in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting Fahrenheit temperatures to Celsius
const fahrenheitTemperatures = [32, 50, 68, 86, 104];
const celsiusTemperatures = fahrenheitTemperatures.map(function (fahrenheit) {
    return Math.round((fahrenheit - 32) * (5 / 9));
});
console.log(celsiusTemperatures); // Output: [0, 10, 20, 30, 40]

/*

Working with Objects in JavaScript
A lot of the information on how to work with objects in JavaScript has already been covered in this course.

The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:

*/
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result)


/*Working with Maps in JavaScript */

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

console.log(bestBoxers.get(1));


/*  Sets */

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
// Add new members to arrays without using the push() method

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits,...berries]
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = { ...flying, ...car }
console.log(flyingCar) // {wings: 2, wheels: 4}


let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
veggies.pop("beetroot")
console.log(veggies);

/**Convert a string to an array using the spread operator */
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

/**Copy either an object or an array into a separate one */

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = { ...car1 }

car1.speed = 201

console.log(car1.speed, car2.speed)


// Example 1: Function with rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Example 2: Destructuring with rest parameter
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

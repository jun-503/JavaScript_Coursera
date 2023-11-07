// Task 1
function logDairy(){
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (const prod of dairy) {
        console.log(prod)
    }
    
}
logDairy()

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const keys of Object.keys(bird)) {
        console.log(`${keys}: ${bird[keys]}`)
    }
}
birdCan()

// Task 3
function animalCan() {
    for (key in bird) {
        console.log(`${key}: ${key.}`)
    }
}
animalCan()
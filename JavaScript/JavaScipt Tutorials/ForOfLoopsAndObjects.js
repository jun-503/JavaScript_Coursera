const car = {
    engine : true,
    steering : true,
    speed : "slow"

}
const sportsCar = Object.create(car)
sportsCar.speed = "fast"
console.log(sportsCar.speed)
console.log(sportsCar)


for(prop in sportsCar){
    console.log(prop)
}

console.log(" Iterating over object and its prototype ")

for (prop of Object.keys(sportsCar)){
    console.log(prop + " : " + sportsCar[prop])
}
console.log(" Iterating only over objects own properties ")


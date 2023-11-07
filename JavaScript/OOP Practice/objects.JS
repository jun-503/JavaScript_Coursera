var storemanager = {
    color : "red",
    name: "ALi",
    role: "Awara",
    health: 100
}
console.log(storemanager.health)

var house = {}
house.rooms = 40
house.marla = 5
house.location = "baghbanpura"
house.windows = 11
house.windows  = 10

console.log(house.windows)

// Use of brackets notation
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

drone.lightsOn = function(){
    console.log("Lights are on")
}

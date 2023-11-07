// try{
//     console.log(a+b)
// } catch (err){
//     console.log(err)
//     console.log(" There was an error")
// }
// console.log(" My program doesn't stop ")

try {
   throw new ReferenceError
} catch (err) {
    console.log(err)
   
}
console.log(" My program doesn't stop ")

var letters = 'abc'
console.log(letters.match(/a/))
let noise = 'wind'
console.log(noise)
noise = 'wanda'
console.log(noise)
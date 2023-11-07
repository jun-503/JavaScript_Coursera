'{"Greeting":"Hello"}'

const jsonStr = '{"Greeting":"Hello"}'
JSON.parse(jsonStr)

const aPlainObj = JSON.parse(jsonStr)
aPlainObj.Greeting = 'hi'

aPlainObj

const data = {
    firstName : "JOHN",
    lastName :  "DOE",
    greeting : "Hello",
}



console.log(JSON.stringify(data))

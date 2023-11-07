

// 1. Block scope example with `let`:

```javascript
let a = 1;
{
    let a = 2;
    console.log(a); // 2
}
console.log(a); // 1
```

// 2. Block scope example with `const`:


const b = 5;
{
    const b = 10;
    console.log(b); // 10
}
console.log(b); // 5


// 3. Function scope example with `var`:


function exampleFunction() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2
}
exampleFunction();


// 4. Block scope within a loop using `let`:


for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError: i is not defined

// 5. Block scope within a function using `var`:


function exampleFunction() {
    for (var j = 0; j < 3; j++) {
        console.log(j); // 0, 1, 2
    }
    console.log(j); // 3
}
exampleFunction();


// Understanding these examples will provide you with a clearer insight into how block scoping and function scoping work in JavaScript.
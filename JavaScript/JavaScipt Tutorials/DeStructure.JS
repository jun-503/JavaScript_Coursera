let {PI} = Math
console.log(PI)



var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

array = [1,2,3,4,5]

array.forEach(items => {
    console.log(items)
});

for (const key in Object.keys(clothingItem)) {
    if (Object.hasOwnProperty.call(clothingItem, key)) {
        const element = clothingItem[key];
        print(element)
        
    }
}

for (const keys of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[keys])
}
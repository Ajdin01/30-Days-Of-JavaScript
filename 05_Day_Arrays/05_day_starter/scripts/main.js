console.log(countries)

//do the level 2 and 3
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.split(' ')
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
console.log(shoppingCart.indexOf("Tea")
);

shoppingCart[3] = 'Green Tea'

console.log(shoppingCart);


  
countries.includes("Ethiopia") ? console.log('ETHIOPIA') : countries.push("Ethiopia")

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

let min = ages[0]
let max = ages[ages.length-1]

console.log(min, max)

let sumAge = 0

for(let i = 0; i < ages.length;i++){
    sumAge += ages[i]
}
let avgAge = sumAge/ages.length
console.log(avgAge);
let ageRange = max - min
console.log(ageRange);


//ages.length % 2 == 0 ? 


// this is your main.js script
//let number = prompt('Enter number', 'number goes here')
console.log(15)

console.log(4>=3)
/*let base = prompt('Enter base', 'base placeholder')
let height = prompt('Enter height', 'height placeholder')

alert(`The area of the triangle is ${0.5*base*height}`)*/

let fName = 'Ajdin'
let lName = 'Junuzovic'

fName.length > lName.length
    ? console.log(`Your first name ${fName} is longer than your last name ${lName}`)
    : console.log('last name longer')


const time = new Date()

const year = time.getFullYear()
const month = time.getMonth() + 1
const day = time.getDate()

const hours = time.getHours()
const minutes = time.getMinutes()

console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
console.log(`${day}-${month}-${year} ${hours}:${minutes}`)
console.log(`${day}/${month}/${year} ${hours}:${minutes}`)


console.log(`${day}/${month}/${year}`,
    (hours <= 9 ? `0${hours}`: `${hours}`) +
    (minutes <= 9 ? `:0${minutes}` : `:${minutes}`)
)
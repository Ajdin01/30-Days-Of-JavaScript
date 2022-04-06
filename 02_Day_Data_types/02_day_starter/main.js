// this is your main.js script

let challenege = '30 Days Of JavaScript'

console.log(challenege)
console.log(challenege.length)

let upperChall = challenege.toUpperCase()
let lowerChall = challenege.toLowerCase()

console.log(upperChall)
console.log(lowerChall)

let firstWord = challenege.substring(0,2)
console.log(firstWord)

console.log(challenege.substring(3))

console.log(challenege.includes('Script'))
console.log(challenege.split(' '))

let corps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(corps.split(","))

console.log(challenege.replace('JavaScript','Python'))

console.log(challenege.charAt(15))

console.log(challenege.charCodeAt(11))

console.log(challenege.indexOf('a'))
console.log(challenege.lastIndexOf('a'))

let sentance = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentance.indexOf('because'))
console.log(sentance.lastIndexOf('because'))

console.log(sentance.search('because'))

let trimChallenege = '   30 Days Of JavaScript   '
console.log(trimChallenege.trim())

console.log(challenege.startsWith('30'))
console.log(challenege.endsWith('Script'))

console.log(challenege.match(/a/gi))

let half = '30 Days Of'
console.log(half.concat(' JavaScript'))

console.log(challenege.repeat(2))

// level 2

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

console.log(typeof('10') == 10)
console.log(typeof('10') == "string")
console.log(parseInt('10') == 10)

console.log(parseFloat('9.8') == 10)
console.log(Math.round(parseFloat('9.8')) == 10)

let stringTest = 'I hope this course is not full of jargon.'
console.log(stringTest.search(/jargon/gi) != null);

let randomNum = Math.random()

console.log(Math.round(randomNum*101));
console.log(Math.round(50+(randomNum*51)))
console.log(Math.round(randomNum*256));

let javaString = 'JavaScript'
let letter = javaString[Math.round(Math.random()*11)]
console.log(javaString[Math.round(Math.random()*11)]);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

let conjuct = 'You cannot end a sentence with because because because is a conjunction'

console.log(conjuct.substr(31,23));

//level 3

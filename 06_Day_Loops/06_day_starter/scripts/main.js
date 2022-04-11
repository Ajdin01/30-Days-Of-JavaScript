
//alert('Open the console and check if the countries has been loaded')

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
/*
  for(let i = 0; i <= 10; i++){
    console.log(i);
  }
  let i = 0;
  while(i<=10){
      console.log(i)
      i++
  }
  i=10;
  do{
    console.log(i)
    i--
  }while(i>=0)*/

  //let x = prompt('enter number', 'number')

  function sumOf(x){
    let sumEvens = 0
    let sumOdd = 0
    
      for(let i = 0;i<=x;i++){
        if(i%2==0){
            sumEvens+=i
        }else{
            sumOdd+=i
        }
      }
      const arr = [sumEvens,sumOdd]
      arr[0]+=1 
      return arr
  }

  function makeCode(x){
    const codeArr = []
    let codeBit
      do{
        let num = Math.round(48+Math.random()*42)
        if(num>57 && num<65){
            continue
        }else{
            codeBit = String.fromCharCode(num).toLowerCase()
            codeArr.push(codeBit)}
      }while(codeArr.length < x)
      let code = codeArr.join('')
      return code
  }

  console.log(makeCode(10));
  console.log(makeCode(20));
  //console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
const countriesUpper = []
const countryLenght = []
for(let i = 0; i < countries.length;i++){
    countriesUpper[i] = countries[i].toUpperCase()
}

for(let i = 0; i < countries.length;i++){
    countryLenght[i] = countries[i].length
}

const countDetails = []


for(let i = 0; i < countries.length;i++){
    const details = []
    details[0] = countries[i]
    details[1] = countries[i].substring(0,3).toLocaleUpperCase()
    details[2] = countries[i].length

    countDetails[i] = details
    
}

console.log(countDetails);
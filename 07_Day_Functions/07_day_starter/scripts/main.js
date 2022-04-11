function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))

  const fullName = (firstName = 'Ajdin', lastName = 'Junuz') => {console.log(`${firstName} ${lastName}`);}

  fullName()
  fullName('Ajdin', 'Junuzoivc ')


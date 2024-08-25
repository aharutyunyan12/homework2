//task3.1

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  }
  
  person.toString = function(){
    return `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`
  }
  
  console.log(String(person))
//task3.4

const obj = {
    0: 'item1',
    1: 'item2',
    2: 'item3'
  }
  
  obj.toString = function(){
    return `${obj[0]}, ${obj[1]}, ${obj[2]}`
  }  
  
  console.log(String(obj))
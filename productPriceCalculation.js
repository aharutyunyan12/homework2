//task3.2

const obj = {
    price: 1000
  }
  
  obj.valueOf = function(){
    return obj.price
  }
  
  console.log(obj + 500)
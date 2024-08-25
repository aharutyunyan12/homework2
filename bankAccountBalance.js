//task3.5

obj = {
    balance: 1000,
    interestRate: 5
  }
  
  obj.valueOf = function(){
    const balance = obj.balance
    const intersetRate = obj.interestRate
    const res = balance * intersetRate/ 100
    const result = balance + res
    return result
  }
  
  console.log(Number(obj))
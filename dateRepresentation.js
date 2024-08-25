//task3.3

const obj = {
    day: 18,
    month: "08",
    year: 2024
  }
  
  obj.toString = function(){
    return `${obj.month}/${obj.day}/${obj.year}`
  }
  
  obj.valueOf = function(){
    const date = new Date(obj.year, +obj.month, obj.day)
    return date.getTime()
  }
  
  console.log(String(obj))
  console.log(Number(obj))
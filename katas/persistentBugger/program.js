function persistence(num) {
  let count = 0
  while (num >= 10) {
    num = eval(num.toString().split('').join('*'))
    count++
  }
  return count
 }
function comp(array1, array2){
  if (array1 === null || array2 === null) return false
  let squared2 = array2.map((number) => Math.sqrt(number)).sort((a,b) => a-b)
  array1.sort((a,b) => a-b)
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] !== squared2[i]) return false
  }
  return true
}
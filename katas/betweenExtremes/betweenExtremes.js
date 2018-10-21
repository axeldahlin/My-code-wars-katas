function betweenExtremes(numbers) {
  numbers.sort((a,b)=>a-b)
  return numbers[numbers.length-1] - numbers[0]
}

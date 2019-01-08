function pigIt(str){
  return str.split(' ').map(word => {
  if (word.match(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g)) { return word }
  let firstLetter = word[0]
  word = word.split('')
  word.shift()
  word.push(firstLetter)
    return word.join('') + 'ay'
  }).join(' ')
}
function firstNonRepeatingLetter(s) {
  if (s.length === 0) return ''
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
      let letterArray = s.filter(letter => letter.toUpperCase() === s[i].toUpperCase())
      if (letterArray.length === 1) return s[i] 
    }
    return ''
  }
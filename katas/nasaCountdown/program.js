function countdown (millisecs) {
  let countingDown = false
  millisecs = millisecs.toString()
  if (millisecs[0] === '-') {
    countingDown = true
    millisecs = millisecs.substr(1);
  }
   let totalSeconds = (millisecs / 1000)
   let hours   = Math.floor(totalSeconds / 3600)
   let minutes = Math.floor((totalSeconds / 60) - (hours * 60))
   let seconds = Math.floor((totalSeconds) - (hours * 3600 + minutes * 60))
   let result = `${hours}:${minutes}:${seconds}`.split(':').map(format => {
     return format.length === 1 ? '0' + format : format
   }).join(':')
    return countingDown ? '-' + result : '+' + result
}
function schedule(movies) {
  if (movies.length === 1) return 1
  let [date, movieCount] = [0,0]
  let sortedMovies = movies.sort((a,b) => a.end - b.end)
  for (let i = 0; i < sortedMovies.length; i++) {
    if (sortedMovies[i].start > date) {
      movieCount++
      date = sortedMovies[i].end
    }
  }
  return movieCount
}
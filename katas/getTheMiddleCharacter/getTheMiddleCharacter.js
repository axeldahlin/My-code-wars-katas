function getMiddle(s) {
  let middle;
  if (s.length % 2 === 0) {
    middle = s.slice(s.length / 2-1, s.length / 2+1);
  } else {
    middle = s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);

  }  
  return  middle;
}
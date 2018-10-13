function solution(number){

  let multiples = 1;
  for (let i = 0; i < number; i++) {
    if (i === 0) continue;

    if (i % 3 === 0 || i % 5 === 0) multiples+=i;
  }

  return multiples;
  
}

console.log(solution(10));



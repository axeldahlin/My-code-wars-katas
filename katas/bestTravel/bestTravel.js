function chooseBestSum(t, k, ls) {
  const sortedArray = ls.sort((a,b) => a-b);


  let bestSum = 0;
  for (let i = sortedArray.length-1; i >= 2; i--) {

    const thisSum = sortedArray[i] + sortedArray[i-1] + sortedArray[i-2];

    if (thisSum > bestSum && thisSum <= t) bestSum = thisSum; 

  }

  return bestSum === 0 ? null : bestSum;
}


var ts = [50, 55, 56, 57, 58]
const test = chooseBestSum(163, 3, ts);

console.log(test);
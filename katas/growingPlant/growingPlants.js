function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let dayCount = 1;
  let height = 0;

  while(desiredHeight >= height) {
    height+= upSpeed;
    if(desiredHeight <= height) return dayCount;
    height-= downSpeed;
    dayCount++;
  }
}

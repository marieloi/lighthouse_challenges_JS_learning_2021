const getAverageSpeed = (firstPosition, secondPosition) => {
  
  let speed = (secondPosition.altitude - firstPosition.altitude) / (secondPosition.time - firstPosition.time)

  return (Math.round(speed * 10) / 10);
};

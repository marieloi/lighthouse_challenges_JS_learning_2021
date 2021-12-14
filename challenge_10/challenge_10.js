const averageWindSpeed = (weatherEntries) => {
  
  let totalWindSpeed = 0;
  let numberOfEntries = 0;
  
  weatherEntries.forEach(function (item) {
    totalWindSpeed = item.windSpeed + totalWindSpeed;
    numberOfEntries = numberOfEntries + 1;
  });
  
  return (Math.round(totalWindSpeed / numberOfEntries));
};

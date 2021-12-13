const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  
  temperature = Math.round((temperature - 32) * 5/9);
  windSpeed = Math.round((windSpeed / 2.237));

  const myWeather = {
    temperature: temperature,
    windSpeed: windSpeed,
    windDirection: windDirection,
    condition: condition
  }
  
  return myWeather;
  
};

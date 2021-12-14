const checkGaugeStatus = (gauge) => {
  
  if (gauge.current < gauge.min || gauge.current > gauge.max)
    return false;
  
  return true;
};

const checkAllGauges = (gaugeList) => {
  
  let checkCondition;
  
  for (let i = 0; i < gaugeList.length; i++) {
    if (gaugeList[i].current <= gaugeList[i].min || gaugeList[i].current >= gaugeList[i].max) {
      checkCondition = false;
    } else {
      checkCondition = true;
    }
  }

  return checkCondition;
};

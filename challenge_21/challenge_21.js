const parseMissionSummary = (exchanges, missionData) => {
  
  let myObject = {};
  myObject.transcript = [];
  myObject.missionData = missionData;

  for(let i = 0; i < exchanges.length; i++){
    myObject.transcript[i] = `${exchanges[i].origin}: ${exchanges[i].message}`;
  }
  
  return myObject;
};

const confirmReentryPlans = (speed, missionData, checks) => {
    
  let doesEverythingMatch = false;
  
  if(speed >= checks.minSpeed && speed <= checks.maxSpeed) {
    for(let i = 0; i < Object.keys(checks.dataEntries).length; i++){
      if (Object.keys(missionData)[i] === Object.keys(checks.dataEntries)[i]) {
        if (Object.values(missionData)[i].length === Object.values(checks.dataEntries)[i]) {
          doesEverythingMatch = true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return doesEverythingMatch;

}

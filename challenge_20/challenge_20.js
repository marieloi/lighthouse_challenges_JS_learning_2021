const confirmReentryPlans = (speed, missionData, checks) => {

  if(speed < checks.minSpeed || speed > checks.maxSpeed) 
     return false;

  for(let i = 0; i < Object.keys(checks.dataEntries).length; i++){
    if (Object.keys(missionData)[i] !== Object.keys(checks.dataEntries)[i] || 
        Object.values(missionData)[i].length !== Object.values(checks.dataEntries)[i]) 
      return false;
  }
  
  return true;
}

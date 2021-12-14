const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!
  let launchDateObject = new Date(launchDate);
  const myObject = {};
  
  let timeLeft_ms = (launchDateObject - today);
  let timeLeft = Math.floor(timeLeft_ms / (1000 * 3600 * 24));
  
  myObject.missionName = missionName;
  myObject.daysRemaining = timeLeft;

  return myObject;
};

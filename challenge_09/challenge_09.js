const listAstronautJobs = (roster) => {
  let myArray = [];
  
  roster.forEach(function (item) {
    myArray.push(item.job);
  });

  return myArray;
};

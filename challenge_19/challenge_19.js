const organizeData = (receivedData) => {
  
  myObject = {};
  
  receivedData.forEach(function (item) {
    if (myObject[item.type] === undefined) {
      myObject[item.type] = [];
      myObject[item.type].push(item.data); 
    } else { 
      myObject[item.type].push(item.data); 
    }
  });

  return myObject;
}

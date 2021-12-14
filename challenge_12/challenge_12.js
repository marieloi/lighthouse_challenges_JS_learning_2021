const parseTranscripts = (messages) => {
  let myArray = [];
  
  messages.forEach(function (item) {
    myArray.push(item.origin + ": " + item.message);
  });

  return myArray;
};

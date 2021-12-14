const chooseLunchWinner = (listOfChoices) => {
  
  let map = {};
  let mostFrequentElement = listOfChoices[0];
  
  for(let i = 0; i<listOfChoices.length; i++){
      if (!map[listOfChoices[i]]) {
          map[listOfChoices[i]] = 1;
      } else {
          ++map[listOfChoices[i]];
          if (map[listOfChoices[i]] > map[mostFrequentElement]) {
            mostFrequentElement = listOfChoices[i];
          }
      }
  }
  
  return mostFrequentElement;
}

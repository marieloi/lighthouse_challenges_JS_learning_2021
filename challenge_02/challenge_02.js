function generateAstronautTag (exampleAstronaut) {
  
  const fullString =
    exampleAstronaut["prefix"] +
    ": " +
    exampleAstronaut["firstName"] +
    ' "' +
    exampleAstronaut["nickname"] +
    '" ' +
    exampleAstronaut["lastName"];

  return fullString;
}

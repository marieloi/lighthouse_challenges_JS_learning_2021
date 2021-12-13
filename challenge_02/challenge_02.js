function generateAstronautTag (exampleAstronaut) {
  const fullString =
    exampleAstronaut["prefix"] +
    ": " +
    exampleAstronaut["firstName"] +
    ' "' +
    exampleAstronaut["nickname"] +
    '" ' +
    exampleAstronaut["lastName"];
  // Remember to return a value!
  console.log(fullString);
  return fullString;
}

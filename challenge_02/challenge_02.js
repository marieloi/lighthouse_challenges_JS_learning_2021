const generateAstronautTag = (exampleAstronaut)  => {
  let fullString = `${exampleAstronaut["prefix"]}: ${exampleAstronaut["firstName"]} "${exampleAstronaut["nickname"]}" ${exampleAstronaut["lastName"]}`;
  return fullString;
}

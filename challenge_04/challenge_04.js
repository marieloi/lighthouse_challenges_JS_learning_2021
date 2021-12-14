const switchToggle = (toggle) => {

  if (toggle.isOn === false) {
    toggle.isOn = true;
  } else {
    toggle.isOn = false;
  }
  
  return(toggle)
}

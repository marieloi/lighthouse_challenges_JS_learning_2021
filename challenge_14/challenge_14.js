const switchAllTogglesOn = (toggleList) => {
  
  toggleList.forEach(function (item) {
    item.isOn = true;
  });
  
  return toggleList;
};

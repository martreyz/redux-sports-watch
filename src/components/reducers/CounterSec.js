//REDUCER COUNTER

const counterMin = (stateSecs = 0, action) => {
  switch (action.type) {
    case "INCSECS":
      if (stateSecs < 59) {
        return stateSecs + 1;
      } else {
        return (stateSecs = 0);
      }

    default:
      return stateSecs;
  }
};

export default counterMin;

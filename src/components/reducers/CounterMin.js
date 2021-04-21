//REDUCER COUNTER

const counterMin = (stateMins = 0, action) => {
  switch (action.type) {
    case "MININC":
      if (stateMins < 59) {
        return stateMins + 1;
      } else {
        return (stateMins = 0);
      }

    default:
      return stateMins;
  }
};

export default counterMin;

//REDUCER COUNTER

const counterMin = (state = 0, action) => {
  switch (action.type) {
    case "MININC":
      if (state < 59) {
        return state + 1;
      } else {
        return (state = 0);
      }
    case "RESTART":
      return (state = 0);

    case "STOP":
      return state + 0;
    default:
      return state;
  }
};

export default counterMin;

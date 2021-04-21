//REDUCER COUNTER

const Stoper = (stateStoper = false, action) => {
  switch (action.type) {
    case "STOP":
      return true;

    default:
      return stateStoper;
  }
};

export default Stoper;

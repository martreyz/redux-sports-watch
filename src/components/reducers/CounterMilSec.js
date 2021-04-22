//REDUCER COUNTER

const counterMilSec = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state < 99) {
        return state + 1;
      } else {
        return (state = 0);
      }
    case "DECREMENT":
      return state - 1;
    case "STOP":
      return state + 0;
    case "RESTART":
      return (state = 0);
    default:
      return state;
  }
};

export default counterMilSec;

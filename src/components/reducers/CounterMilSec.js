//REDUCER COUNTER

const counterMilSec = (stateMilSec = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (stateMilSec < 99) {
        return stateMilSec + 1;
      } else {
        return (stateMilSec = 0);
      }
    case "DECREMENT":
      return stateMilSec - 1;
    default:
      return stateMilSec;
  }
};

export default counterMilSec;

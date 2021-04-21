//Increment counter:
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

//Decrement counter:
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Increment seconds counter:
export const incrementSecs = () => {
  return {
    type: "INCSECS",
  };
};

//Increment minutes counter:
export const incrementMins = () => {
  return {
    type: "MININC",
  };
};

//Stops counter:
export const stopCounter = () => {
  return {
    type: "STOP",
  };
};

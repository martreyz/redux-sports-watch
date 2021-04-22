//Increment counter:
export const increment = (mode) => {
  return {
    type: "INCREMENT",
    run: mode,
  };
};

//Decrement counter:
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Increment seconds counter:
export const incrementSecs = (mode) => {
  return {
    type: "INCSECS",
    run: mode,
  };
};

//Increment minutes counter:
export const incrementMins = (mode) => {
  return {
    type: "MININC",
    run: mode,
  };
};

//Adds lap:
export const addLap = (description) => {
  return {
    type: "ADDLAP",
    payload: {
      id: 1,
      description,
    },
  };
};

//Removes lap:
export const removeLap = (id) => {
  return {
    type: "REMOVELAP",
    payload: {
      id,
    },
  };
};

//Restarts counter:
export const restart = () => {
  return {
    type: "RESTART",
  };
};

//Running counter:
export const running = () => {
  return {
    type: "RUN",
  };
};

//Timeouts saver:
export const addTimeouts = (timeout) => {
  return {
    type: "ADDTIMEOUT",
    payload: {
      timeout,
    },
  };
};

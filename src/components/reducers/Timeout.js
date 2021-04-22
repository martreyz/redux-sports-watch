const timeout = (state = [], action) => {
  switch (action.type) {
    case "ADDTIMEOUT":
      return [action.payload.timeout];
    case "RESTART":
      return [];
    default:
      return state;
  }
};

export default timeout;

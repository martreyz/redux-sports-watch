//REDUCER ADD LAP

let lastID = 0;

const ManageLaps = (state = [], action) => {
  switch (action.type) {
    case "ADDLAP":
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
        },
      ];
    case "REMOVELAP":
      return state.filter((lap) => lap.id !== action.payload.id);
    default:
      return state;
  }
};

export default ManageLaps;

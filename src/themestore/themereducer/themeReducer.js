const darkReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        ...state,
        darktheme: !state.darktheme,
      };
    }
    default:
      return state;
  }
};

export default darkReducer;

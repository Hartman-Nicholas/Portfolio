import * as actionTypes from "../actions/types";

const themeReducer = (state = true, action) => {
  switch (action.type) {
    case actionTypes.THEME_STATE:
      return action.payload || false;
    default:
      return state;
  }
};

export default themeReducer;

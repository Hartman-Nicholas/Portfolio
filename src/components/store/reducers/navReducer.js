import * as actionTypes from "../actions/types";

const navReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.NAV_STATE:
      return action.payload || false;
    default:
      return state;
  }
};

export default navReducer;

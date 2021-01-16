import { combineReducers } from "redux";
import navReducer from "./navReducer";
import formReducer from "./formReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
  nav: navReducer,
  form: formReducer,
  theme: themeReducer,
});

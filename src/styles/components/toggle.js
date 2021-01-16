import React from "react";
import "./toggle.css";
import { useDispatch, useSelector } from "react-redux";
import { updateThemeState } from "../../components/store/actions";

const Toggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input
          onClick={() =>
            theme
              ? dispatch(updateThemeState(false))
              : dispatch(updateThemeState(true))
          }
          type="checkbox"
          id="checkbox"
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default Toggle;

import * as actionTypes from "./types";

export const updateNavState = (state) => ({
  type: actionTypes.NAV_STATE,
  payload: state,
});

export const updateThemeState = (state) => ({
  type: actionTypes.THEME_STATE,
  payload: state,
});

export const updateFormState = (form, state) => ({
  type: actionTypes.UPDATE_FORM_STATE,
  form,
  payload: state,
});

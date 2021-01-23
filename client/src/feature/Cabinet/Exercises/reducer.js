import {
  EXERCISES_REQUEST_PROCESS,
  EXERCISES_REQUEST_ERROR,
  EXERCISES_REQUEST_SUCCESS
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXERCISES_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case EXERCISES_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case EXERCISES_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    default:
      return state;
  }
};

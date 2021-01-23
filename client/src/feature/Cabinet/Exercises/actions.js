import { api } from "../../../helpers/api";

export const EXERCISES_REQUEST_PROCESS = "EXERCISES_REQUEST_PROCESS";
export const EXERCISES_REQUEST_ERROR = "EXERCISES_REQUEST_ERROR";
export const EXERCISES_REQUEST_SUCCESS = "EXERCISES_REQUEST_SUCCESS";

export const exercisesRequestProcess = () => ({
  type: EXERCISES_REQUEST_PROCESS
});

export const exercisesRequestSuccess = data => ({
  type: EXERCISES_REQUEST_SUCCESS,
  data
});

export const exercisesRequestError = error => ({
  type: EXERCISES_REQUEST_ERROR,
  error
});

export const exercisesFetchRequest = () => async dispatch => {
  try {
    dispatch(exercisesRequestProcess());

    const data = await api("get", "exercises");

    dispatch(exercisesRequestSuccess(data));
  } catch (error) {
    dispatch(exercisesRequestError(error.response ? error.response.data : error));
  }
};
export const exercisesCreateRequest = (data) => async dispatch => {
  try {
    const response = await api("post", "exercises/create", {exercise: data});
    return response
  } catch (error) {
    dispatch(exercisesRequestError(error.response ? error.response.data : error));
  }
};
export const exercisesEditRequest = (id,data) => async dispatch => {
  try {
    const response = await api("put", `exercises/${id}`, {exercise: data});
    return response
  } catch (error) {
    dispatch(exercisesRequestError(error.response ? error.response.data : error));
  }
};

export const exercisesDeleteRequest = (id) => async dispatch => {
  try {
    const response = await api("delete", `exercises/${id}`);
    return response;
  } catch (error) {
    dispatch(exercisesRequestError(error.response ? error.response.data : error));
  }
};

export const exercisesGetRequest = (id) => async dispatch => {
  try {
    const response = await api("get", `exercises/${id}`);
    return response;
  } catch (error) {
    dispatch(exercisesRequestError(error.response ? error.response.data : error));
  }
};

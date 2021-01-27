import { api } from "../../../helpers/api";

export const workoutFetchRequest = () => async dispatch => {
  try {
    return await api("get", "workouts");
  } catch (error) {
    console.log('error',error)
  }
};

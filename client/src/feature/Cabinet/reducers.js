import { combineReducers } from "redux";

import { usersReducer as users } from "./Users";
import { exercisesReducer as exercises } from "./Exercises";
import { workoutReducer as workouts } from "./Workout";

export const reducers = combineReducers({
  users,
  exercises,
  workouts
});

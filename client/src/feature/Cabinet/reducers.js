import { combineReducers } from "redux";

import { usersReducer as users } from "./Users";
import { exercisesReducer as exercises } from "./Exercises";

export const reducers = combineReducers({
  users,
  exercises
});

import { HomeContainer } from "./Home";
import { UsersContainer } from "./Users";
import {ExercisesContainer} from "./Exercises/container";
import {ExercisesAddContainer} from "./Exercises";
import {ExercisesEditContainer} from "./Exercises/container/edit";
import {WorkoutCreateContainer, WorkoutListContainer} from "./Workout";

export const routes = [
  {
    path: "/home",
    component: HomeContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/users",
    component: UsersContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/exercises",
    component: ExercisesContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/exercises/add",
    component: ExercisesAddContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/exercises/:id",
    component: ExercisesEditContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/workouts",
    component: WorkoutListContainer,
    isAuth: true,
    exact: true
  },
  {
    path: "/workouts/create",
    component: WorkoutCreateContainer,
    isAuth: true,
    exact: true
  },
];

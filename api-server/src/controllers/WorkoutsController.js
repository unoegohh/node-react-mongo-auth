import mongoose from 'mongoose'
import WorkoutModel from "../models/Workout";
import WorkoutExerciseModel from "../models/WorkoutExercise";
import ExerciseModel from "../models/Exercise";
import UserModel from "../models/User";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";
import _ from 'lodash'

const convertWorkout = async (workout, model) => {
  model.name = workout.name;
  model.startDate = workout.startDate;
  model.client = await UserModel.findById(workout.clientId);
  model.createdBy = await UserModel.findById(workout.createdById);
  workout.exercises.forEach((e)=>{
    const newE = _.find(model.exercises, (m) => m._id.toString() === e.id)
    if(!newE){
      newE.deleteOne({_id: newE._id})
    }
  })
  for(const m of model.exercises){
    let exercise = _.find(workout.exercises, (e) => e._id.toString() === m.id);
    if(!exercise){
      exercise = new WorkoutExerciseModel();
      exercise.workout = model
    }
    exercise.exercise = await ExerciseModel.findById(m.exerciseId);
    exercise.approaches.forEach((a,i)=>{
      const newA = _.find(m.approaches, (m) => m._id.toString() === a.id)
      if(!newA){
        exercise.approaches.splice(i,1)
      }
    })
    for(const a of exercise.approaches){
      let approach = _.find(exercise.exercises, (e) => e._id.toString() === a.id);
      if(!approach){
        approach = {};
        exercise.approaches.push(approach)
      }
      approach.order = a.order;
      approach.value = a.value;
      approach.repetitions = a.repetitions;
      approach.restInSeconds = a.restInSeconds;
    }
  }
  return model;
}

class WorkoutsController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const workouts = await WorkoutModel.find().populate('client').populate('createdBy');
    const respWorkouts = workouts.map((w) => {
      return {
        id: w._id,
        name: w.name,
        client: w.client.name,
        createdBy: w.createdBy.name,
        startDate: w.startDate,
      }
    });

    res.json({workouts: respWorkouts});
  }

  @TryCatchErrorDecorator
  static async create(req, res) {
    const workout = new WorkoutModel();
    await convertWorkout(req, workout)
    await workout.save()
    res.json({success: true, id: workout._id});
  }
}

export default WorkoutsController;

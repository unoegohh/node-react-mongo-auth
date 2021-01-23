import mongoose from 'mongoose'
import ExerciseModel from "../models/Exercise";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class ExercisesController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const exercises = await ExerciseModel.find();

    res.json(exercises);
  }

  @TryCatchErrorDecorator
  static async create(req, res) {
    const exercise = new ExerciseModel();
    exercise.name = req.body.exercise.name;
    await exercise.save()
    res.json({success:true});
  }

  @TryCatchErrorDecorator
  static async get(req, res) {
    const exercise = await ExerciseModel.findOne({_id:  new mongoose.Types.ObjectId(req.params.id)});
    res.json({success:true, exercise});
  }

  @TryCatchErrorDecorator
  static async edit(req, res) {
    const exercise = await ExerciseModel.findOne({_id:  new mongoose.Types.ObjectId(req.params.id)});
    if(exercise){
      exercise.name = req.body.exercise.name;
      await exercise.save();
      res.json({success:true});
    }else{
      res.json({success:false});
    }
  }

  @TryCatchErrorDecorator
  static async delete(req, res) {
    console.log(req)
    await ExerciseModel.deleteOne({_id:  new mongoose.Types.ObjectId(req.params.id)});
    res.json({success:true});
  }
}

export default ExercisesController;

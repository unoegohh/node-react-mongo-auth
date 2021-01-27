import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const WorkoutExerciseSchema = new Schema(
  {
    workout: {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    },
    exercise: {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    },
    approaches: {
      type: [{
        order:  {type: Number},
        value: {type: String},
        repetitions:  {type: String},
        actualValue: {type: String},
        actualRepetitions: {type: String},
        restInSeconds:  {type: Number},
      }]
    }
  },
  {
    timestamps: true
  }
);

mongoose.set("useCreateIndex", true);
WorkoutExerciseSchema.plugin(uniqueValidator);

export default mongoose.model("WorkoutExercise", WorkoutExerciseSchema);

import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const WorkoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
    startDate: {
      type: Date,
      required: true,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    exercises: [{
      type: Schema.Types.ObjectId,
      ref: 'WorkoutExercise'
    }]
  },
  {
    timestamps: true
  }
);

mongoose.set("useCreateIndex", true);
WorkoutSchema.plugin(uniqueValidator);

export default mongoose.model("Workout", WorkoutSchema);

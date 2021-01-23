import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const ExerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
  },
  {
    timestamps: true
  }
);

mongoose.set("useCreateIndex", true);
ExerciseSchema.plugin(uniqueValidator);

export default mongoose.model("Exercise", ExerciseSchema);

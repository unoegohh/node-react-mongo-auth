import { Router } from "express";
import Authorize from "../middleware/Authorize";
import ExercisesController from "../controllers/ExercisesController";

const router = Router();

router.get("/exercises", Authorize.check, ExercisesController.index);
router.post("/exercises/create", Authorize.check, ExercisesController.create);
router.get("/exercises/:id", Authorize.check, ExercisesController.get);
router.put("/exercises/:id", Authorize.check, ExercisesController.edit);
router.delete("/exercises/:id", Authorize.check, ExercisesController.delete);

export default router;

import { Router } from "express";
import taskController from "../controllers/task.controller.js";

const router = Router();

router.route("/")
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

router.route("/:id")
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

export default router;
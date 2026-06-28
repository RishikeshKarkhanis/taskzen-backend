import taskService from "../services/task.service.js";

class TaskController {
  async createTask(req, res, next) {
    try {
      const task = await taskService.createTask(req.body);

      res.status(201).json({
        success: true,
        message: "Task created successfully.",
        data: task,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllTasks(req, res, next) {
    try {
      const tasks = await taskService.getAllTasks(req.query);

      res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks,
      });
    } catch (error) {
      next(error);
    }
  }

  

  async updateTask(req, res, next) {
    try {
      const task = await taskService.updateTask(req.params.id, req.body);

      if (!task) {
        return res.status(404).json({
          success: false,
          message: "Task not found.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Task updated successfully.",
        data: task,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const task = await taskService.deleteTask(req.params.id);

      if (!task) {
        return res.status(404).json({
          success: false,
          message: "Task not found.",
        });
      }

      res.status(200).json({
        success: true,
        message: "Task deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new TaskController();
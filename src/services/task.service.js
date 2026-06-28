import Task from "../models/task.model.js";

class TaskService {
  async createTask(taskData) {
    return await Task.create(taskData);
  }

  async getAllTasks(query) {
    const {
      search,
      priority,
      category,
      status,
      sort = "newest",
    } = query;

    const filter = {};

    // Search by title or description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by priority
    if (priority && priority !== "All") {
      filter.priority = priority;
    }

    // Filter by category
    if (category && category !== "All") {
      filter.category = category;
    }

    // Filter by status
    if (status && status !== "All") {
      filter.status = status;
    }

    // Sorting
    let sortOption = {};

    switch (sort) {
      case "oldest":
        sortOption = { createdAt: 1 };
        break;

      case "dueDate":
        sortOption = { dueDate: 1 };
        break;

      case "priority":
        sortOption = { priority: 1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }

    return await Task.find(filter).sort(sortOption);
  }


  async updateTask(id, taskData) {
    return await Task.findByIdAndUpdate(id, taskData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  }
}

export default new TaskService();
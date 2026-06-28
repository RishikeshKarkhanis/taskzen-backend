import mongoose from "mongoose";
import { PRIORITIES, STATUSES, CATEGORIES } from "../constants/task.constants.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
      default: "",
    },

    category: {
      type: String,
      enum: CATEGORIES,
      required: [true, "Category is required"],
    },

    priority: {
      type: String,
      enum: PRIORITIES,
      default: "Medium",
    },

    status: {
      type: String,
      enum: STATUSES,
      default: "Todo",
    },

    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
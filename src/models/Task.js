const { Schema, model } = require("mongoose");

const taskSchema = {
  title: {
    type: String,
  },
  content: {
    type: String,
  },
};

const schema = new Schema(taskSchema);
const Task = model("Task", schema);

module.exports = Task;

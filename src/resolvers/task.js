const { Task } = require("../models");

const task = async (_, { taskId }) => {
  const task = await Task.findById(taskId);
  return task;
};

module.exports = task;

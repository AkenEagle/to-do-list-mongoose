const { Task } = require("../models");

const deleteTask = async (_, { taskId }) => {
  const deletedTask = await Task.findByIdAndDelete(taskId);
  return deleteTask;
};

module.exports = deleteTask;

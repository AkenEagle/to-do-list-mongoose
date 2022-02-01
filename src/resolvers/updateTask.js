const { Task } = require("../models");

const updateTask = async (_, { input, taskId }) => {
  const newTask = new Task(input);

  const updatedTask = await Task.findByIdAndUpdate(
    taskId,
    { $set: { ...input } },
    {
      returnDocument: "after",
    }
  );

  return updatedTask;
};

module.exports = updateTask;

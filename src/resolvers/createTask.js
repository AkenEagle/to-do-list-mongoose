const { Task } = require("../models");

const createTask = async (_, { input }) => {
  const newTask = new Task(input);

  await newTask.save();

  return newTask;
};

module.exports = createTask;

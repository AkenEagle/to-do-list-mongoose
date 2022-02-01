const { Task } = require("../models");

const tasks = async () => {
  const task = await Task.find({});
  return task;
};

module.exports = tasks;

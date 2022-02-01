const tasks = require("./tasks.js");
const task = require("./task");
const createTask = require("./createTask");
const updateTask = require("./updateTask");
const deleteTask = require("./deleteTask");

const resolvers = {
  Query: {
    tasks,
    task,
  },
  Mutation: {
    createTask,
    updateTask,
    deleteTask,
  },
};

module.exports = resolvers;

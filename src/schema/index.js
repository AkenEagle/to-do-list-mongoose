const { gql } = require("apollo-server");

const typeDefs = gql`
  type Task {
    _id: ID!
    title: String!
    content: String!
  }

  type Query {
    tasks: [Task]
    task(taskId: ID!): Task
  }

  input TaskInput {
    title: String!
    content: String!
  }

  type Mutation {
    createTask(input: TaskInput!): Task
    updateTask(input: TaskInput!, taskId: ID!): Task
    deleteTask(taskId: ID!): Task
  }
`;

module.exports = typeDefs;

const employees = require('./employees');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const sdl = `
schema {
  query: Query
}

type Query {
  employees: [Employee!]!
}

type Employee {
  id: Int!
  name: String!
  role: String!
  dateOfBirth: String!
}
`;

const schema = makeExecutableSchema({
  typeDefs: sdl,
  resolvers: {
    Query: {
      employees: () => { return employees; }
    },
    Employee: {
      id: (e) => e.id,
      name: (e) => e.name,
      role: (e) => e.role,
      dateOfBirth:(e) => e.dateOfBirth
    }
  }
});

module.exports = schema;
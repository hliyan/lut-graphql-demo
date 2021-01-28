const schema = require('./schema');
const employees = require('./employees');

const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');

app.use(express.json());
app.get('/employees', (req, res) => {
  res.send(employees);
});

app.use('/', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000);
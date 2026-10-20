const express = require('express');
const router = require('../src/routes/task.route');

const app = express();
app.use(express.json());

app.use("/api/tasks", router);

module.exports = app;
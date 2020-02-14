const express = require("express");
const projectsRouter = require("./data/routers/projectsRouter");
const actionsRouter = require("./data/routers/actionsRouter");
const server = express();

server.use(express.json());
server.use("/projects", projectsRouter);
server.use("/actions", actionsRouter);

module.exports = server;

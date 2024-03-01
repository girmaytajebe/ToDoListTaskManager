require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Port = process.env.PORT;
const userRouter = require("./server/api/users/user.router.js");
const todoRouter = require("./server/api/Todo/todo.router.js");

const auth = require("./server/api/middleware/auth.js");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
// Routes
app.use("/api/users", userRouter);
app.use("/api/todo", todoRouter);


app.listen(Port, () => console.log(`Listening at http://localhost:${Port}`));

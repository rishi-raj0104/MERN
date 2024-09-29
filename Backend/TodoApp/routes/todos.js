const express = require("express");
//to create router
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos,getTodoById } = require("../controllers/getTodos");
const { updateTodo} = require("../controllers/updateTodo");
const { deleteTodo} = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
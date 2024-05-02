var express = require('express');
const path = require('path');
var router = express.Router();
const todo = require('../controller/todoController');

router.get('/',todo.getAllTodos);
router.post('/',todo.createTodo);
router.put('/:id',todo.updateTodo);
router.delete('/:id',todo.deleteTodo);
router.get('/:id',todo.getTodoById);

module.exports = router;
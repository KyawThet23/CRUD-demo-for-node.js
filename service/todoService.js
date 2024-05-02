let Todo = require('../model/todo');

async function saveTodo(todo){
  let newTodo = new Todo(todo);
  return newTodo.save();
}

async function getAllTodos(){
  return Todo.find();
}

async function updateTodo(todoID,todo){
  let updateTodo = await Todo.findByIdAndUpdate(todoID,todo,{new:true});
  return updateTodo;
}

async function deleteTodo(todoID){
  let deleteTodo = await Todo.findByIdAndDelete(todoID);
  return deleteTodo;
}

async function getToDoById(id){
  let todo = await Todos.findById(id);
  return todo;
}

module.exports = {
  saveTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  getToDoById
}
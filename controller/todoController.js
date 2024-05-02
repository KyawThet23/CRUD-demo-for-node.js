const todoService = require('../service/todoService');

async function getAllTodos(req,res,next)
{
  try 
  {
    let todos = await todoService.getAllTodos();
    return res.json(todos);
  } catch (error) 
  {
    res.status(400).json({
      error:'No todos are found.'
    });
  }
};

async function createTodo(req,res,next){
  try {
    const todo = await todoService.saveTodo(req.body);
    if(!todo) throw Error('Cannot save todo.');
    await res.status(201).json(todo);
  } catch (error) {
     await res.status(400).json({message: error});  
  }
};

async function updateTodo(req,res,next){
  try {
    let todoID = req.params['id'];
    const todo = await todoService.updateTodo(todoID,req.body);
    if(!todo) throw Error('Cannot update todo');
    await res.status(200).json(todo);

  } catch (error) {

    console.log(error);
    await res.status(400).json({message: error});
  }
};

async function deleteTodo(req,res,next){

  try {
    let todoID = req.params['id'];
    const todo = await todoService.deleteTodo(todoID);
    if(!todo) throw Error('Cannot delete todo');
    await res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    await res.status(400).json({message: error});
  }

};

async function  getTodoById(req,res,next) {
  let todoId = req.params['id'];
  try{
      let todo = await todoService.getToDoById(todoId);
      if(!todo){
          res.status(400).json({
              error:'ToDo not found'
          });
      }
      else{
          res.json(todo);
      }
  }
  catch(e){
      res.status(400).json({
          error:'ToDo not found'
      });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById
}
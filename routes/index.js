var express = require('express');
var router = express.Router();
const {check, body} = require('express-validator/check');

//Ambil controller
const todoController = require('../controller/todo');

/* GET home page. */
router.get('/', todoController.getTodo);

// post req

router.post(
  '/addTodo',
  [
    body('nama', 'Todo harus diisi')
      .isString()
      .isLength({min: 3})
  ],
  todoController.postTodo
);

//update

router.post('/save/:nama', todoController.updateTodo);

// delete req

router.delete('/:id', todoController.deleteTodo);

module.exports = router;

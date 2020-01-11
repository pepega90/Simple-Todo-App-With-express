const Todo = require('../model/todo');

const {validationResult} = require('express-validator/check');

exports.getTodo = (req, res, next) => {
  Todo.find({}).then(data => {
    res.render('index', {
      todo: data,
      errorMessage: []
    });
  });
};

exports.postTodo = (req, res, next) => {
  let data = {
    nama: req.body.nama
  };

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('index', {
      todo: data,
      errorMessage: errors.array()[0].msg
    });
  }

  let todo = new Todo(data);

  todo.save().then(result => {
    req.flash('info', 'Todo Ditambahkan');
    res.redirect('/');
  });
};

exports.updateTodo = (req, res, next) => {
  let data = {
    nama: req.body.newTodo
  };

  let id = {nama: req.params.nama};

  Todo.updateOne(id, data, err => {
    if (err) {
      console.log(err);
    } else {
      req.flash('save', 'Todo Sudah Di update');
      res.redirect('/');
    }
  });
};

exports.deleteTodo = (req, res, next) => {
  let id = {_id: req.params.id};

  Todo.findByIdAndRemove(id).then(() => {
    res.send('sukses');
  });
};

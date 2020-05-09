// dependencies
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');

// index route
router.get('/', (req, res) => {
    Todo.find({}, (err, allTodos) => {
        let noToDos
        if (allTodos.length < 1) {
            noToDos = 'There are no to-do items yet';
            allTodos.push(noToDos);
            res.render('Index', { msg: noToDos})
        } else {
            Todo.find({}, (err, allTodos) => {
                res.render('Index', {allTodos: allTodos})
            })
        }
    })
})

// Create
router.post('/', (req, res) => {
    // Use Model to create Document
    Todo.create(req.body, (error, createdTodo) => {
        // Once created - respond to client
        res.redirect('/');
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        res.redirect('/');
    });
});

// Put
// router.put('/:id', (req, res) => {
//     // Update the recipe document using our model
//     req.body.img === '' ? req.body.img = 'https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png' : req.body.img = req.body.img;
//     Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
//         res.redirect(`/recipes/${req.params.id}/show`);
//     });
// });


// Export Router
module.exports = router;
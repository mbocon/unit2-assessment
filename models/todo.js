const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
    name: { type: String, required: true },
    done: {type: Boolean, default: false}
   
}, { timestamps: true });

//  Create Model from our Schema
const Todo = mongoose.model('Todo', todoSchema);

// Export Model
module.exports = Todo;
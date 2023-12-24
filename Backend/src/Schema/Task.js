const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        minlength: [3, 'Task Atleast should be 3 characters long']
    }
}, { 
    timestamps: {
        createdAt: 'publishedAt'
    } 

})

module.exports = mongoose.model("tasks", taskSchema);
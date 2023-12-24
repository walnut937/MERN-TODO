const express = require('express');
const router = express.Router();
const Task = require('../Schema/Task')

router.post('/addtask', (req, res) => {
    const { task } = req.body
    const newtask = new Task({
        task: task
    })
    newtask.save()
    .then(data => {
        return res.status(200).json({task: data})
    })
    .catch(err => {
        return res.status(403).json({error: err.message})
    })
})

module.exports = router;    
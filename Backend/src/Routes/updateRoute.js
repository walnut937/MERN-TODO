const express = require('express');
const router = express.Router();
const Task = require('../Schema/Task');

// Update a task by ID
router.post('/update/:id', async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body.task;

  try {
    const task = await Task.findByIdAndUpdate(taskId, { task: updatedTask }, { new: true });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error('Error updating task:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Task = require('../Schema/Task');

router.get('/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
      const tasks = await Task.findOne({"_id": taskId});
      return res.status(200).json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
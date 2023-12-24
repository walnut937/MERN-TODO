const express = require('express');
const Task = require('../Schema/Task')
const router = express.Router();

router.post('/deleteTask', async(req, res) => {
    const { taskID } = req.body
        try {
          // Find and delete task by ID in MongoDB
          const deletedTask = await Task.findByIdAndDelete(taskID);
      
          if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
          }
      
          // Send the deleted task data as JSON response
          return res.status(200).json(deletedTask);
        } catch (error) {
          console.error('Error deleting task:', error.message);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      });


module.exports = router;
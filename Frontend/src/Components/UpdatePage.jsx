// UpdatePage.jsx

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Fetch the task by ID when the component mounts
    console.log(id)
    const fetchTaskById = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_ENDPOINT + `/tasks/${id}`);
        setNewTask(response.data.task);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching task:', error.message);
      }
    };

    fetchTaskById();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_ENDPOINT  + `/update/${id}`, { task: newTask });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white rounded-md p-8 w-[600px]">
        <h1 className="text-3xl mb-5">Update Task</h1>
        <form onSubmit={handleUpdate}>
          <h1 className="text-xl">Task</h1>
          <input
            type="text"
            placeholder="Write your task"
            value={newTask}
            className="p-2 mb-5 w-full outline-none border-[2px] border-black rounded-md"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="bg-green-600 text-white px-3 py-1 rounded-md font-medium" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePage;

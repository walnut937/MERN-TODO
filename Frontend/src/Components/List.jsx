/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import axios from 'axios'
function List({task, getId, fetchtask}) {
  // const navigate = useNavigate()
  
  const deleteTask = async(task) => {
    const taskID = task._id
    try {
      await axios.post(import.meta.env.VITE_ENDPOINT + '/deleteTask', {taskID})
      fetchtask()
    } catch (error) {
      console.log('error occured while deletion', error.message)
    }
  }



  return (
    <div className="bg-gray-200 font-medium gap-3 md:w-[500px] flex items-center justify-between p-2 px-3 rounded-md">
      <h1>{task.task}</h1>
      <div className="flex items-center gap-3"> 
        <button className="p-2 bg-orange-400 text-white rounded-md"><Link onClick={() => getId(task)} to={`/edit/${task._id}`}>Edit</Link></button>
        <button className="p-2 bg-red-600 text-white rounded-md" onClick={() => deleteTask(task)}>Delete</button> 
      </div>
    </div>
  )
}

export default List
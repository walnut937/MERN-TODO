import { useNavigate } from 'react-router-dom';
import { useState } from 'react' 
import axios from 'axios'

function CreatePage() {
  const [ task ,setTask ] = useState('') 
  const navigate = useNavigate();
  
  function handlechange(e) {
    setTask(e.target.value )
    console.log(task)
  }

  const submitTask = async(e) => {
    e.preventDefault();
    try {
      if(task.length > 0){
        await axios.post(import.meta.env.VITE_ENDPOINT + '/addtask', {task})
        // console.log(response.data)
        setTask('')
        navigate('/')
      }else{
        console.log('Task field cannot be empty')
      }
    } catch (error) {
      console.log(error.message)
    }

  }

  return (
    <div className="h-screen flex items-center justify-center bg-blue-400">
        {/* showcase */}
        <div className="bg-white rounded-md p-8 w-[600px]">
            <h1 className="text-3xl mb-5">Add Task</h1>
            <form onSubmit={submitTask}>
              <h1 className="text-xl font-medium">Task</h1>
              <input name='task' type="text" placeholder="write your task.." className="p-2 mb-5 w-full outline-none border-[2px] border-black rounded-md" onChange={handlechange} value={task} />
              <button className="bg-green-600 text-white px-3 py-1 rounded-md font-medium" >submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePage
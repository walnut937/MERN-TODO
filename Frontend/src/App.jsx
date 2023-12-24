//imports
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from './Layout/RootLayout'
import Homepage from "./Components/Homepage";
import CreatePage from "./Components/CreatePage"
import UpdatePage from './Components/UpdatePage'
import { useState } from "react";
import axios from 'axios'

function App() {
  const [ task, setTask ] = useState('')
  const [taskarr, setTaskArr] = useState([]) 

  const getId = (task) => {
    setTask(task)
  }


  //getting the tasks
  const fetchtask = async() => {
    try{
      const response = await axios.get(import.meta.env.VITE_ENDPOINT + '/tasks')
      setTaskArr(response.data);
      // console.log(response.data);
    } catch(err){
      console.log('fetching error = ', err.message)
    }
  }




  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage taskarr={taskarr} fetchtask={fetchtask} getId={getId} />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="edit/:id" element={<UpdatePage task={task}  />} />
        </Route>
    )
)

  return (
    <RouterProvider router={router} />
  )
}

export default App
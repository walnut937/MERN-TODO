/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import List from '../Components/List'
function Homepage({ getId, taskarr, fetchtask }) {

  useEffect(()=> {
    fetchtask();
  }, [])

  return (
    <div className="h-screen flex items-center justify-center bg-blue-400">
        {/* showcase */}
        <div className="bg-white rounded-md p-8">
          <h1 className='text-3xl font-bold'>TODO LIST</h1>
          <div className='h-[200px] overflow-y-auto my-3 overflow-x-hidden'>
          <div className='flex flex-col gap-2'>

          {
            !taskarr.length > 0 ? 'List is empty Please add something' : 
            taskarr.map(task => (
                <List key={task._id} fetchtask={fetchtask} task={task} getId={getId} />
            ))
          }
          </div>
          </div>
            <Link to='/create'>
                <button className="bg-green-600 text-white px-3 py-1 rounded-md font-medium">Add+</button>
            </Link>
        </div>
    </div>
  )
}

export default Homepage
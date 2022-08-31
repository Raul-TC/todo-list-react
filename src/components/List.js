import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const List = ({ content, id, done, updateTaskDone, handleDeleteTask }) => {
  const [taskDone, setTaskDone] = useState(done)
  const { DarkTheme } = useContext(ThemeContext)
  useEffect(() => {
    updateTaskDone(id, taskDone)
  }, [taskDone])

  return (
    <>
      <div className={`${DarkTheme ? 'border-gray-600' : 'border-gray-200'} w-full flex py-4  md:py-5 items-center   m-auto bg-transparent border-b showText`}>
        <button onClick={() => setTaskDone(!taskDone)} type='checkbox' name={`task-${id}`} id={id} className={`${taskDone && 'check'} ${DarkTheme ? 'border-gray-600' : ''} relative w-6 h-6  md:w-8  md:h-8 ml-4 mr-4 sch:ml-2 sch:mr-2 rounded-full border block}`} />
        <p className={`${taskDone && 'line-through text-gray-400'} ${DarkTheme ? 'text-text-dark' : 'text-text-light'}  w-[90%] lg:w-[85%]  bg-transparent break-all text-sm md:text-base`}>{content}</p>
        <span onClick={() => handleDeleteTask(id)} className='bg-deleteTask bg-center h w-6 h-6 sch:w-4 sch:h-4 bg-no-repeat mr-4 ml-2 lg:hidden show' />
      </div>
    </>
  )
}

export default List

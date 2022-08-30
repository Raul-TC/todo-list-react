import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const List = ({ content, id, done, updateTaskDone, handleDeleteTask }) => {
  const [taskDone, setTaskDone] = useState(done)
  const { DarkTheme } = useContext(ThemeContext)
  useEffect(() => {
    updateTaskDone(id, taskDone)
  }, [taskDone])

  return (
    <div className={`${DarkTheme ? 'border-gray-600' : 'border-gray-200'} w-full flex py-3 items-center justify-between  m-auto bg-transparent border-b`}>
      <button onClick={() => setTaskDone(!taskDone)} type='checkbox' name={`task-${id}`} id={id} className={`${taskDone && 'check'} ${DarkTheme ? 'border-gray-600' : ''} relative w-6 h-6 ml-4 mr-4 rounded-full border block}`} />
      <p className={`${taskDone && 'line-through'} ${DarkTheme ? 'text-text-dark' : 'text-text-light'}  w-3/4 bg-transparent`}>{content}</p>
      <span onClick={() => handleDeleteTask(id)} className='bg-deleteTask bg-center h w-6 h-6 bg-no-repeat mr-4' />
    </div>
  )
}

export default List

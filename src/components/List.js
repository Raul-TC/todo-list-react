import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const List = ({ content, id, updateTaskDone, handleDeleteTask }) => {
  const [taskDone, setTaskDone] = useState(false)
  const { DarkTheme } = useContext(ThemeContext)
  useEffect(() => {
    updateTaskDone(id, taskDone)
  }, [taskDone])

  return (
    <div className={DarkTheme ? 'w-full flex rounded-lg items-center justify-between max-w-85 m-auto bg-container-task-dark' : 'w-full flex rounded-lg items-center justify-between max-w-85 m-auto bg-container-task'}>
      <button onClick={() => setTaskDone(!taskDone)} type='checkbox' name={`task-${id}`} id={id} className={`${taskDone ? 'check w-6 h-6 ml-4 mr-4 rounded-full border-gray-200 border-2 block' : 'w-6 h-6 ml-4 mr-4 rounded-full border-gray-200 border-2 block'}`} />
      <p className={taskDone ? 'line-through pt-3 pb-3  w-3/4 bg-transparent text-gray-400' : 'pt-3 pb-3  w-5/6 bg-transparent'}>{content}</p>
      <span onClick={el => handleDeleteTask(id)} className='bg-deleteTask h w-6 h-6 bg-no-repeat mr-4' />
    </div>
  )
}

export default List

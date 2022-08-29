import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const CreateTask = ({ handleAddTask }) => {
  const [taskComment, setTaskComment] = useState('')
  const { DarkTheme } = useContext(ThemeContext)
  const handleSendTask = e => {
    e.preventDefault()
    if (taskComment === '') return
    setTaskComment('')
    handleAddTask(taskComment)
  }
  return (
    <form onSubmit={handleSendTask} className={DarkTheme ? 'w-full flex rounded-lg mt-8 items-center justify-between max-w-85 m-auto bg-container-task-dark' : 'w-full flex rounded-lg mt-8 items-center justify-between max-w-85 m-auto bg-white'}>
      {/* <span className='w-6 h-6 ml-6 mr-4 rounded-full border-gray-200 border-2 block' /> */}
      {/* <input onClick={handleToggle} type='checkbox' checked={checkBoc} name='' id='' className='w-6 h-6 ml-6 mr-4 rounded-full border-gray-200 border-2 block bg-gray-600' /> */}
      {/* <button onClick={handleToggle} className='w-6 h-6 ml-6 mr-4 rounded-full border-gray-200 border-2 block' type='submit' /> */}
      <button className='w-6 h-6 ml-6 mr-4 rounded-full border-gray-200 border-2 block' type='submit' />
      <input onChange={(e) => setTaskComment(e.target.value)} className='pt-3 pb-3  w-5/6 bg-transparent outline-none' type='text' placeholder='Create a new todo...' value={taskComment} />
    </form>
  )
}

export default CreateTask

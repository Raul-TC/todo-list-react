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
    <form onSubmit={handleSendTask} className={DarkTheme ? 'w-full flex rounded-lg mt-8 items-center justify-between max-w-85 m-auto bg-container-task-dark' : 'w-full flex rounded-lg mt-8 items-center justify-between max-w-85 m-auto bg-white '}>
      <button className={` ${DarkTheme ? 'border-gray-600' : ''} relative w-6 h-6 ml-4 mr-4 rounded-full border block}`} type='submit' />
      <input onChange={(e) => setTaskComment(e.target.value)} className={`${DarkTheme ? 'text-text-dark' : 'text-text-light'} py-3  w-5/6 bg-transparent outline-none`} type='text' placeholder='Create a new todo...' value={taskComment} />
    </form>
  )
}
export default CreateTask

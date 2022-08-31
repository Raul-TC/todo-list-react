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
    <form onSubmit={handleSendTask} className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-white'} w-full flex rounded-lg mt-8 items-center  max-w-85 m-auto   md:max-w-2xl`}>
      <button className={` ${DarkTheme ? 'border-gray-600' : ''} relative w-6 h-6  md:w-8  md:h-8 ml-4 mr-4 rounded-full border block}`} type='submit' />
      <input onChange={(e) => setTaskComment(e.target.value)} className={`${DarkTheme ? 'text-text-dark' : 'text-text-light'} py-4  md:py-5  w-5/6 bg-transparent outline-none text-sm`} type='text' placeholder='Create a new todo...' value={taskComment} />
    </form>
  )
}
export default CreateTask

import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import List from './List'

const ContainerTask = ({ modal, task, current, setModal, setcurrent, filteredData, updateTaskDone, handleDeleteTask, pendingTask, tasksDone, seTtask }) => {
  const { DarkTheme } = useContext(ThemeContext)
  return (
    <>
      <div className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-container-task'} max-w-85 w-full rounded-md h-auto -mt-7  md:max-w-2xl md:mb-8`}>

        {task.length > 0 ? filteredData.map(el => <List key={el.id} content={el.content} id={el.id} done={el.done} updateTaskDone={updateTaskDone} handleDeleteTask={handleDeleteTask} />) : <p className={`${DarkTheme ? 'text-text-dark' : 'text-text-light'} text-center my-4`}>No hay tareas</p>}
        <div className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-container-task'}w-full flex  items-center justify-between py-4 pl-4 pr-4 bg-transparent  md:py-5`}>
          {current === 'all' ? <><p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} cursor-pointer text-sm`}> All Items</p> </> : null}
          {current === 'active' ? <><p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} cursor-pointer text-sm`}>{pendingTask.length} items left</p> </> : null}
          {current === 'completed' ? <><p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} cursor-pointer`}>{tasksDone.length} items completed</p> </> : null}
          <div className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-container-task'} w-full max-w-85  mt-4 py-4 items-center justify-center m-auto rounded-md  md:max-w-2xl  md:py-5 hidden lg:flex md:w-auto md:m-0 md:hover:text-gray-800 text-sm `}>
            <p onClick={() => setcurrent('all')} className={`${current === 'all' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'all' && 'text-blue-500'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} cursor-pointer md:hover:text-gray-800 text-sm`}>All</p>
            <p onClick={() => setcurrent('active')} className={`${current === 'active' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'active' && 'text-blue-500'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} ml-4 mr-4 cursor-pointer`}>Active</p>
            <p onClick={() => setcurrent('completed')} className={`${current === 'completed' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'completed' && 'text-blue-500'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} cursor-pointer`}>Completed</p>
          </div>
          {tasksDone.length > 0 && <p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'} ${DarkTheme ? 'md:hover:text-gray-200' : 'md:hover:text-gray-800'} cursor-pointer text-sm`} onClick={() => setModal(!modal)}>Clear Completed</p>}

        </div>
      </div>
      <div className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-container-task'} w-full max-w-85 flex mt-4 py-4 items-center justify-center m-auto rounded-md  md:max-w-2xl  mb-8 md:py-5 lg:hidden`}>
        <p onClick={() => setcurrent('all')} className={`${current === 'all' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'all' && 'text-blue-500'} cursor-pointer text-sm`}>All</p>
        <p onClick={() => setcurrent('active')} className={`${current === 'active' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'active' && 'text-blue-500'} ml-4 mr-4 cursor-pointer text-sm`}>Active</p>
        <p onClick={() => setcurrent('completed')} className={`${current === 'completed' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'completed' && 'text-blue-500'} cursor-pointer text-sm`}>Completed</p>
      </div>
    </>
  )
}

export default ContainerTask

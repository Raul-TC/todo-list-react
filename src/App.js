import { useContext, useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import List from './components/List'
// import "./App.css";
function App () {
  const localComments = JSON.parse(localStorage.getItem('tasks'))
  const [task, seTtask] = useState(localComments === null || localComments === 'undefined' ? [] : localComments)
  const [tasksDone, setTasksDone] = useState([])
  const [pendingTask, setPendingTask] = useState([])
  const [current, setcurrent] = useState('all')

  localStorage.setItem('tasks', JSON.stringify(task))

  const handleAddTask = data => {
    const newTask = {
      id: crypto.randomUUID(),
      content: data,
      done: false
    }
    seTtask([...task, newTask])
  }

  const updateTaskDone = (id, isDone) => {
    const newData = task.map(el => el.id === id ? { ...el, done: isDone } : el)

    seTtask(newData)
  }

  const handleDeleteTask = id => {
    const newData = task.filter(el => el.id !== id)

    seTtask(newData)
  }

  useEffect(() => {
    const done = []
    const pending = []
    task.map(el => el.done === true ? done.push(el) : pending.push(el))

    setPendingTask(pending)
    setTasksDone(done)
  }, [task])

  const { DarkTheme } = useContext(ThemeContext)

  const getFilter = () => {
    if (current === 'all' || current === '') {
      return task
    }

    if (current === 'active') {
      return pendingTask
    }

    if (current === 'completed') {
      return tasksDone
    }
  }

  const filteredData = getFilter()

  console.info(filteredData)
  return (
    <>
      <header className={`${DarkTheme ? 'bg-dark-mobile lg:bg-dark-desktop' : 'bg-light-mobile lg:bg-light-desktop'} relative z-10 h-48 lg:h-24 bg-center bg-no-repeat bg-cover`} />
      <div className='absolute w-full top-8 left-0 right-0 z-10 m-auto flex flex-col items-center justify-between lg:top-[6rem]'>
        <Header />
        <CreateTask handleAddTask={handleAddTask} />
      </div>
      <main className='absolute z-30 w-full -mt-6 mb-4 flex items-center flex-col h-auto m-auto '>
        <div className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-container-task'} max-w-85 w-full rounded-md h-auto md:max-w-4xl`}>

          {task.length > 0 ? filteredData.map(el => <List key={el.id} content={el.content} id={el.id} done={el.done} updateTaskDone={updateTaskDone} handleDeleteTask={handleDeleteTask} />) : <p className={`${DarkTheme ? 'text-text-dark' : 'text-text-light'} text-center my-4`}>No hay tareas</p>}
          <div className={`${DarkTheme ? 'bg-container-task-dark' : 'bg-container-task'}w-full flex  items-center justify-between py-3 pl-4 pr-4 bg-transparent`}>
            {/* <div className={DarkTheme ? 'w-full flex max-w-85  items-center justify-between  py-2 ml-4 mr-4 m-auto bg-container-task' : 'w-full flex  items-center justify-between py-2 pl-4 pr-4 bg-transparent'}> */}

            {current === 'all' ? <><p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'}`}> All Items</p> </> : null}
            {current === 'active' ? <><p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'}`}>{pendingTask.length} items left</p> </> : null}
            {current === 'completed' ? <><p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'}`}>{tasksDone.length} items completed</p> </> : null}

            <p className={`${DarkTheme ? 'text-gray-600' : 'text-text-light'}`} onClick={() => seTtask(task.filter(el => el.done !== true))}>Clear Completed</p>
          </div>
        </div>
        <div className={DarkTheme ? 'w-full  max-w-85 flex mt-4 items-center justify-center py-3  m-auto bg-container-task-dark rounded-md' : 'w-full max-w-85 flex mt-4  py-2  items-center justify-center  m-auto bg-container-task rounded-md md:max-w-4xl'}>
          <p onClick={() => setcurrent('all')} className={`${current === 'all' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'all' && 'text-blue-500'}`}>All</p>
          <p onClick={() => setcurrent('active')} className={`${current === 'active' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'active' && 'text-blue-500'} ml-4 mr-4`}>Active</p>
          <p onClick={() => setcurrent('completed')} className={`${current === 'completed' ? 'text-blue-500' : 'text-text-light'} ${DarkTheme && current === 'completed' && 'text-blue-500'}`}>Completed</p>
        </div>
      </main>
      <footer className={DarkTheme ? 'relative z-10 fot bottom-0 bg-footer-background-dark' : 'relative z-10 fot bg-gray-100'} />
    </>
  )
}

export default App

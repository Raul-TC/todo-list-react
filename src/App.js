import { useContext, useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import List from './components/List'
// import "./App.css";
function App () {
  const [task, seTtask] = useState([])
  const [tasksDone, setTasksDone] = useState([])
  const [pendingTask, setPendingTask] = useState([])

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
  // const handleTaskDone = () => {
  //   const newData = task.filter(el => el.done === true)
  //   if (newData.length > 0) {
  //     setTasksDone(newData)
  //   }
  //   // console.info('me ejecuto')
  // }

  // const handlePendingTask = () => {
  //   const newData = task.filter(el => el.done === false)
  //   if (newData.length > 0) {
  //     setPendingTask(newData)
  //   }
  // }
  useEffect(() => {
    const done = []
    const pending = []
    task.map(el => el.done === true ? done.push(el) : pending.push(el))

    console.info(done)
    console.info(pending)
    setPendingTask(pending)
    setTasksDone(done)
  }, [task])

  const { DarkTheme } = useContext(ThemeContext)
  return (
    <>
      <header className={DarkTheme ? 'relative z-10 h-44  w-full  bg-dark-mobile md:bg-dark-desktop  bg-center  bg-no-repeat  bg-cover' : 'relative z-10 h-44  w-full  bg-light-mobile md:bg-light-desktop  bg-center  bg-no-repeat  bg-cover'} />
      <div className='absolute w-full top-8 left-0 right-0 z-10 m-auto flex flex-col items-center justify-between'>
        <Header />
        <CreateTask handleAddTask={handleAddTask} />
      </div>
      <div className='absolute z-30 w-full gap-2 -mt-4 flex items-center flex-col h-auto m-auto'>
        {task.length > 0 ? task.map(el => <List key={el.id} content={el.content} id={el.id} updateTaskDone={updateTaskDone} handleDeleteTask={handleDeleteTask} />) : <p>No hay tareas</p>}
      </div>
      <footer className={DarkTheme ? 'relative z-10 fot bottom-0 bg-footer-background-dark' : 'relative z-10 fot bg-footer-color'} />
    </>
  )
}

export default App

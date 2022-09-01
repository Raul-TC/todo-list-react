import { useContext, useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import ContainerTask from './components/ContainerTask'
import Modal from './components/Modal'
// import "./App.css";
function App () {
  const localComments = JSON.parse(localStorage.getItem('tasks'))
  const [task, seTtask] = useState(localComments === null || localComments === 'undefined' ? [] : localComments)
  const [tasksDone, setTasksDone] = useState([])
  const [pendingTask, setPendingTask] = useState([])
  const [current, setcurrent] = useState('all')
  const { DarkTheme } = useContext(ThemeContext)
  const [modal, setModal] = useState(false)
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

  const handleDeleteAll = () => {
    seTtask(task.filter(el => el.done !== true))
    setModal(false)
  }

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

  return (
    <>
      <header className={`${DarkTheme ? 'bg-dark-mobile md:bg-dark-desktop' : 'bg-light-mobile md:bg-light-desktop'} relative z-10 h-48  md:h-[20rem] bg-center bg-no-repeat bg-cover`} />
      <div className='absolute w-full top-8 left-0 right-0 z-40 m-auto flex flex-col items-center justify-between  md:top-[4.5rem]'>
        <Header />
        <CreateTask handleAddTask={handleAddTask} />
      </div>
      <main className={`${DarkTheme ? 'bg-footer-background-dark' : 'bg-gray-100'} absolute z-30 w-full  flex items-center flex-col  m-auto  md:-mt-9 h-auto min-h-[80vh]`}>
        <ContainerTask modal={modal} task={task} setModal={setModal} current={current} setcurrent={setcurrent} pendingTask={pendingTask} tasksDone={tasksDone} seTtask={seTtask} filteredData={filteredData} updateTaskDone={updateTaskDone} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} />
      </main>
      {modal && <Modal handleDeleteAll={handleDeleteAll} setModal={setModal} />}
      <footer className={`${DarkTheme ? 'bg-footer-background-dark' : 'bg-gray-100'} relative bottom-0 z-10 fot min-h-full`} />

    </>
  )
}

export default App

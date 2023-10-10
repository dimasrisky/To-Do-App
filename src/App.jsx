import { useState } from 'react'
import Task from './components/Task'

const App = () => {
  const [taskList, setTaskList] = useState([])
  const [inputTask, setInputTask] = useState('')

  // menerima input dari user dan memasukkannya ke inputTask state
  const handleInputTask = ( event ) => setInputTask(event.target.value)


  // Memasukkan Task Ke dalam TaskList
  const handleSubmit = (event) => {

    // Mencegah Halaman Untuk ke Refresh ketika di submit
    event.preventDefault()

    // Deklarasi Property dari Task
    let id = taskList.length + 1
    let red = Math.floor(Math.random() * (220 - 10 + 1)) + 10
    let green = Math.floor(Math.random() * (220 - 10 + 1)) + 10
    let blue = Math.floor(Math.random() * (220 - 10 + 1)) + 10

    // Menambahkan Task Baru ke TaskList State
    setTaskList(prev => [ 
      ...prev , 
      { 
        id, 
        task: inputTask, 
        red, 
        green, 
        blue
      }
    ])

    // Mengosongkan inputTask setelah di submit
    setInputTask('')
  }

  return (
    <>
      <div className='w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] h-[80vh] bg-[#001524] relative rounded-md overflow-y-scroll'>
        <div className='text-center absolute w-[90%] top-[3rem] left-[5%]'>
          <h1 className='text-white font-inter font-semibold text-[1.2rem] sm:text-[1.5rem] mb-[2rem]'>What`s Your Plans For Today ?</h1>
          <form className='flex w-[80%] mx-auto' onSubmit={handleSubmit} autoComplete='off'>
            <input type="text" id='addTask' placeholder='Add Task...' onChange={handleInputTask} value={inputTask} className='bg-transparent border-2 text-white border-[#550d7d] w-[15rem] px-[1rem] py-[0.4rem] text-sm grow-[2] '/>
            <button type='submit' className='text-xs bg-gradient-to-r from-[#d165ce] to-[#550d7d] hover:opacity-70 grow-[1] text-white px-[1rem]'>Add Todo</button>
          </form>
        </div>
        <div className='w-[90%] relative top-[35%] left-[5%]'>
          {taskList?.map((eachTask, index) => <Task key={index} id={eachTask.id} task={eachTask.task} red={eachTask.red} green={eachTask.green} blue={eachTask.blue} setTaskList={setTaskList}/>)}
        </div>
      </div>
    </>
  )
}

export default App
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditTask = ({ taskState }) => {
  // Untuk redirect
  const navigate = useNavigate()

  const { taskList, setTaskList } = taskState
  const { index } = useParams()

  // input untuk edit/update isi/value dari task yang mau di edit/update
  const [ inputEdittedTask, setInputEdittedTask ] = useState(null)

  const submittedEditTask = ( event )  => {
    event.preventDefault()
    // Menyalin state taskList
    const updatedTask = [...taskList]
    // update/edit bagian task
    updatedTask[index].task = inputEdittedTask
    setTaskList(updatedTask)

    // redirect ke halaman utama
    navigate('/')
  }
  return (
    <>
    <div className='w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] h-[80vh] bg-[#001524] relative rounded-md overflow-y-scroll'>
        <div className='text-center absolute w-[90%] top-[3rem] left-[5%]'>
          <h1 className='text-white font-inter font-semibold text-[1.2rem] sm:text-[1.5rem] mb-[2rem]'>Edit Your Task Here !</h1>
          <form className='flex w-[80%] mx-auto' autoComplete='off' onSubmit={submittedEditTask}>
            <input type="text" id='addTask' placeholder='Type Here...' value={inputEdittedTask === null ? taskList[index]?.task : inputEdittedTask} onChange={(event) => setInputEdittedTask(event.target.value)} className='bg-transparent border-2 text-white w-[15rem] px-[1rem] py-[0.4rem] text-sm grow-[2] ' style={{ borderColor: `rgb(${taskList[index]?.red}, ${taskList[index]?.green}, ${taskList[index]?.blue})`}}/>
            <button type='submit' className='text-xs hover:opacity-70 grow-[1] text-white px-[1rem]' style={{ backgroundColor: `rgb(${taskList[index]?.red}, ${taskList[index]?.green}, ${taskList[index]?.blue})`}}>Send</button>
          </form>
        </div>
    </div>
    </>
  )
}

export default EditTask
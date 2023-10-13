import React from 'react'
import deleteIcon from '/icon/delete.svg'
import editIcon from '/icon/edit.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Task = ({ index, id, task, red, green, blue, setTaskList}) => {
  return (
    <>
     <motion.div className={`w-full text-white font-inter text-sm font-semibold flex justify-between items-center p-[1rem] rounded-md mb-4`} style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`}} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6, type: "spring"}} exit={{x: -100, opacity: 0}} >
        <h1>{ task }</h1>
        <div className='flex gap-3'>
          <Link to={`/edit/${index}`}>
            <button>
              <img src={editIcon} alt="edit" width='20px' className='hover:scale-110'/>
            </button>
          </Link>
          <button onClick={() => setTaskList(prev => prev.filter(eachTask => eachTask.id != id))}>
            <img src={deleteIcon} alt="delete" width='20px' className='hover:scale-110'/>
          </button>
        </div>
    </motion.div>
    </>
  )
}

export default Task
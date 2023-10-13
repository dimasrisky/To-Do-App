import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditTask from './pages/EditTask'
import { useState } from 'react'

const App = () => {
    // Untuk menampung list Task
    const [taskList, setTaskList] = useState([])
    return (
    <>
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home taskState={{ taskList, setTaskList }} />} />
                    <Route path='/edit/:index' element={<EditTask taskState={{ taskList, setTaskList }} />} />
                </Routes>
            </Router>
        </>
    </>
    )
}

export default App
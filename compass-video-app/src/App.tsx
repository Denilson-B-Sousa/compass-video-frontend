import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import React from 'react'



const App: React.FC = () => {


  return (
    <>
        
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App

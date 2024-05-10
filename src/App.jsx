import React from 'react'
import Homepage from './component/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LuckySpinner from './pages/LuckySpinner';
import Navbar from './component/Navbar';
import MathGame from './pages/MathGame';

const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/lucky-spin' element={<LuckySpinner />}/>
        <Route path='/math-game' element={<MathGame />}/>

      </Routes>
    </Router>
    </>
  )
}

export default App

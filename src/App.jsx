import React from 'react'
import Homepage from './component/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LuckySpinner from './pages/LuckySpinner';
import Navbar from './component/Navbar';
import MathGame from './pages/MathGame';
import Withdraw from './user/Withdraw';
import Transactions from './user/Transactions';

const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/lucky-spin' element={<LuckySpinner />}/>
        <Route path='/math-game' element={<MathGame />}/>
        <Route path='/withdraw' element={<Withdraw />}/>
        <Route path='/transactions' element={<Transactions />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

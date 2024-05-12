import React from 'react'
import Homepage from './component/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LuckySpinner from './pages/LuckySpinner';
import Navbar from './component/Navbar';
import Withdraw from './user/Withdraw';
import Transactions from './user/Transactions';
import Addition from './pages/Addition';
import Multiplication from './pages/Multiplication';
import Subtraction from './pages/Subtraction';

const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/lucky-spin' element={<LuckySpinner />}/>
        <Route path='/withdraw' element={<Withdraw />}/>
        <Route path='/transactions' element={<Transactions />}/>

{/* games */}
        <Route path='/addition' element={<Addition />}/>
        <Route path='/subtraction' element={<Subtraction />}/>
        <Route path='/multiplication' element={<Multiplication />}/>

      </Routes>
    </Router>
    </>
  )
}

export default App

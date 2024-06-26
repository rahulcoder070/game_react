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
import Division from './pages/Division';
import AddAmount from './user/AddAmount';
import ScrollToTop from './component/ScrollToTop';
// import Login from './component/Login';

const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' exact element={<Homepage />}/>
        {/* <Route path='/login' exact element={<Login />}/> */}
        <Route path='/lucky-spin' exact element={<LuckySpinner />}/>
        <Route path='/withdraw' exact element={<Withdraw />}/>
        <Route path='/transactions' exact element={<Transactions />}/>

        <Route path='/addamount-using-codinghub-powerby/:id' exact element={<AddAmount />}/>

{/* games */}
        <Route path='/addition' exact element={<Addition />}/>
        <Route path='/subtraction' exact element={<Subtraction />}/>
        <Route path='/multiplication' exact element={<Multiplication />}/>
        <Route path='/division' exact element={<Division />}/>

      </Routes>
    </Router>
    </>
  )
}

export default App

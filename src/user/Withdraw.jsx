import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import '../style/Withdraw.css';
import { IoCloseSharp } from "react-icons/io5";

const Withdraw = () => {

  const [auth, setAuth] = useAuth();
  const [amount,  setAmount] = useState(null);
  const [upi, setUpi] = useState("");
  const [upichangepopup, setUpichangepopup] = useState(false);
  const [transactionId, settransactionId] = useState(null);
  const [transactionDate, setTransactionDate] = useState();
  const [withdrawPopup, setWithdrawPopup] = useState(false);

  
  const handleWithdraw = () => {
    if(auth?.amount>= 100){
      let transactionId = (Math.random().toString().slice(2, 14));
      let transactionDate = new Date().toLocaleString();
      settransactionId(transactionId);
      setTransactionDate(transactionDate);
      // let data = {...auth, transactions:[[transactionId, transactionDate, `- ₹${amount}`], ...auth?.transactions], amount:auth?.amount-amount};
      let data = {...auth, transactions: [[transactionId, transactionDate, `- ₹${amount}`]], amount:auth?.amount-amount};
      setWithdrawPopup(true);
      localStorage.setItem('auth', JSON.stringify(data));
      setAuth(data)
    }else{
      return alert("in Your account not have money")
    }
  }

  const handleUpiid =()=>{
    const data = {...auth, upi:upi};
    localStorage.setItem('auth', JSON.stringify(data));
    setAuth(data);
    setUpichangepopup(false);
  }

  return (
    <>
    <div className='Homepage'>
      <div className="Homepage-container">
      <div className="withdraw-upi-link">
        <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715509453/Picsart_24-05-12_15-51-26-118_wkvavx.png" alt="" />
        {auth.upi ? <div className='withdraw-upi-id' onClick={()=>setUpichangepopup(true)}>{auth.upi.slice(0,2)}××××××{auth.upi.slice(-4)}</div> : <button onClick={()=>setUpichangepopup(true)}>Link</button>}
      </div>
      <div className="withdraw-account-balance">
        <h3>My Balance</h3>
        <h3>₹ {auth?.amount}</h3>
      </div>
      <div className="money-add-game">
            <h3>Instant Withdraw</h3>
            <input type="Number" placeholder='Enter Withdraw Amount' min={100} value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="numeric" className='amount-input'/>
            {amount < 100 && <div className='min-withdraw-text'>Minimum withdraw ₹100 </div>}
            <button className='big-submit-button' onClick={()=> handleWithdraw()}>Withdraw</button>
        </div>
      </div>
    </div>

    {upichangepopup &&
    <div className="upi-popup">
      <div className="upi-popup-container">
        <IoCloseSharp className='upi-popup-close' onClick={()=>setUpichangepopup(false)}/>
          <h2>Enter a valid UPI ID</h2>
          <input type="text" value={upi} onChange={(e)=>setUpi(e.target.value)} className='amount-input' placeholder='abc@upi / upi number'/>
          <button onClick={()=> handleUpiid()} className='big-submit-button'>Proceed</button>
      </div>
    </div> }

{/* Widthrawl popup */}
      {withdrawPopup &&
      <div className="popup" onClick={()=> setWithdrawPopup(false)}>
        <div className="popup-conatiner">
          <img className='withdraw-blue-tick' src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715505417/Picsart_24-05-12_14-44-12-601_fwaczg.png" alt="" />
          <div className='withdraw-amount'>₹ {amount}</div>
          <div className='withdraw-successfully'>Withdraw Successfully</div>
          <div className='withdraw-teansaction-id'>{transactionDate}</div>
          <div className='withdraw-teansaction-id'>Transaction ID: {transactionId}</div>
        </div>
      </div>}
    </>
  )
}

export default Withdraw

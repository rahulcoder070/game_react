import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import '../style/Withdraw.css';
import { IoCloseSharp } from "react-icons/io5";

const Withdraw = () => {

  const [auth, setAuth] = useAuth();
  const [amount,  setAmount] = useState(null);
  const [upi, setUpi] = useState("");
  const [upichangepopup, setUpichangepopup] = useState(false);

  const handleWithdraw = () => {
    if(amount > auth.amount){
      alert("Insufficient Balance");
    }
  }
  const handleUpiid =()=>{
    const data = {user:auth.user, amount:70, transactions:auth.transactions, upi:upi};
    localStorage.setItem('auth', JSON.stringify(data));
    setAuth(data)
  }

  return (
    <>
    <div className='withdraw'>
      <div className="withdraw-container">
      <div className="withdraw-upi-link">
        <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715509453/Picsart_24-05-12_15-51-26-118_wkvavx.png" alt="" />
        {auth.upi ? <div className='withdraw-upi-id' onClick={()=>setUpichangepopup(true)}>{auth.upi.slice(0,2)}××××××{auth.upi.slice(-4)}</div> : <button onClick={()=>setUpichangepopup(true)}>Link</button>}
        
      </div>
      <h2>My Balance <span>₹ {auth?.amount}</span></h2>
      <div className="money-add-game">
            <h3>Enter Withdraw Amount</h3>
            <input type="Number" placeholder='min 100' min={100} value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="numeric" className="no-spinner"/>
            <button onClick={()=> handleWithdraw()}>Withdraw</button>
        </div>

      </div>
    </div>

    {upichangepopup &&
    <div className="upi-popup">
      <div className="upi-popup-container">
        <IoCloseSharp className='upi-popup-close' onClick={()=>setUpichangepopup(false)}/>
          <h2>Enter a valid UPI ID</h2>
          <input type="text" value={auth?.upi ? auth?.upi : upi} onChange={(e)=>setUpi(e.target.value)} className='upi-popup-input' placeholder='abc@upi / upi number'/>
          <button onClick={()=> handleUpiid()}>Proceed</button>
      </div>
    </div> }
    </>
  )
}

export default Withdraw

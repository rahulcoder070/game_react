import React from 'react'
import { useAuth } from '../context/AuthProvider'

const AddMoneyPopup = ({sendToParent}) => {

    const sendDataToParent = () => {
        sendToParent(false);
      }

    const [auth, setAuth] = useAuth();

  return (
    <div className='add-money-popup'>
        <div className="add-money-popup-container">
            <h2 className='add-money-h2'>My Balance ₹{auth.amount}</h2>
            <div>
            <button className='add-money-popup-close-button' onClick={()=>sendDataToParent()}>Close</button>
            <button className='add-money-button'>Add Money</button>
            </div>
        </div>
    </div>
  )
}

export default AddMoneyPopup

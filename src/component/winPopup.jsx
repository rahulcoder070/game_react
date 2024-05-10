import React from 'react';
import '../style/WinPopup.css';

const winPopup = ({amount, sendToParent}) => {

  const sendDataToParent = () => {
    sendToParent(false);
  }

  return (
    <div className='winpopup'>
        <div className="winpopup-container">
            <img className='winpopup-img' src="https://res.cloudinary.com/coderanil/image/upload/v1715243515/Picsart_24-05-09_13-50-51-309_xh3rdj.png" alt="" />
            <h1 className='winpopup-price'>+₹{amount}</h1>
            <button className='winpopup-button' onClick={()=>sendDataToParent()}>collect</button>
        </div>
    </div>
  )
}

export default winPopup

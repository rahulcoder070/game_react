import React from 'react';
import '../style/WinPopup.css';

const winPopup = ({amount, sendToParent}) => {

  const sendDataToParent = () => {
    sendToParent(false);
  }

  return (
    <div className='winpopup'>
        <div className="winpopup-container">
            <img className='winpopup-img' src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715429280/win47/Picsart_24-05-11_17-03-07-827_ceh1ly.png" alt="" />
            <h1 className='winpopup-price'>+₹{amount*2}</h1>
            <button className='winpopup-button' onClick={()=>sendDataToParent()}>collect</button>
        </div>
    </div>
  )
}

export default winPopup

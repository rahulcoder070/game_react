import React from 'react'

const TimeOut = ({sendToParent}) => {

    const sendDataToParent = () => {
        sendToParent(false);
      }

  return (
    <div className='winpopup'>
        <div className="winpopup-container">
            <img className='winpopup-img' src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715429279/win47/Picsart_24-05-11_17-05-32-963_fyzmlp.png" alt="" />
            <button className='winpopup-button' onClick={()=>sendDataToParent()}>OK</button>
        </div>
    </div>
  )
}

export default TimeOut
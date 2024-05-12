import React from 'react';
import '../style/Homepage.css';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='Homepage'>
        <div className="Homepage-container">
            <div className='Homepage-show'>
                <img className='Homepage-1st-img' src="https://res.cloudinary.com/coderanil/image/upload/v1714291102/smiling-young-pretty-caucasian-girl-sun-glasses-holding-pointing-money-looking-camera-olive-green-removebg-preview_oy9snu.png" alt="" />
                <h1 className='homepage-Title'><span>Calculation</span> Game</h1>
                <h1 className='homepage-Title'>Give Right Answer and <span>EARN</span> Real Money 2×</h1>
            </div>
        <h2 className='Page-Heading'>Games</h2>

        <div className="homepage-games">
            <NavLink to='/addition' className="homepage-games-card">
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715496055/win47/Picsart_24-05-12_11-38-06-377_evunaa.jpg" alt="" />
                <div>+ Game</div>
            </NavLink>
            <NavLink to='/subtraction' className="homepage-games-card">
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715496055/win47/Picsart_24-05-12_11-41-57-981_nxvlio.jpg" alt="" />
                <div>- Game</div>
            </NavLink>
            <NavLink to='/multiplication' className="homepage-games-card">
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715496055/win47/Picsart_24-05-12_11-43-17-270_ywwjyr.jpg" alt="" />
                <div>× Game</div>
            </NavLink>
            <NavLink to='/division' className="homepage-games-card">
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715496055/win47/Picsart_24-05-12_11-53-50-470_cxcb6i.jpg" alt="" />
                <div>÷ Game</div>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Homepage

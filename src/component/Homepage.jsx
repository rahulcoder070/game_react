import React from 'react';
import '../style/Homepage.css';
import { NavLink } from 'react-router-dom';
import LiveWinner from './LiveWinner';

const Homepage = () => {
  return (
    <div className='Homepage'>
        <div className="Homepage-container">
            <div className='Homepage-show'>
                <img className='Homepage-1st-img' src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715684119/smiling-young-pretty-caucasian-girl-sun-glasses-holding-pointing-money-looking-camera-olive-green-removebg-preview-min_xanort.png" alt="" />
                <h2 className='homepage-Title'><span>Calculation</span>(+, -, ×, ÷) Game</h2>
                <h2 className='homepage-Title'>Give Right Answer and <span>EARN</span> Real Money 2×</h2>
            </div>
        <h2 className='homepage-heading'>Games</h2>

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
            {/* <NavLink to='/division' className="homepage-games-card">
                <img src="https://res.cloudinary.com/dhse8vh5y/image/upload/v1715496055/win47/Picsart_24-05-12_11-53-50-470_cxcb6i.jpg" alt="" />
                <div>÷ Game</div>
            </NavLink> */}

        </div>
        <LiveWinner/>
        </div>
    </div>
  )
}

export default Homepage

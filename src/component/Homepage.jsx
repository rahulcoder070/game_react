import React from 'react';
import '../style/Homepage.css';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='Homepage'>
        <div className="Homepage-container">
            <div className='Homepage-show'>
                <img className='Homepage-1st-img' src="https://res.cloudinary.com/coderanil/image/upload/v1714291102/smiling-young-pretty-caucasian-girl-sun-glasses-holding-pointing-money-looking-camera-olive-green-removebg-preview_oy9snu.png" alt="" />
                <h1 className='homepage-Title'><span>EARN</span> and <span>WIN</span> Real Money With Skils</h1>
            </div>
        <h2 className='Page-Heading'>Games</h2>

        <div className="homepage-games">
            <NavLink to='/lucky-spin' className="homepage-games-card">
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1715055873/pngtree-fortune-wheel-of-casino-vector-png-image_5698874_uwk7oz_mmsfrf.png" alt="" />
                <span className='game-earning-multply'>10×</span>
                <div>Spin And win</div>
            </NavLink>
            <NavLink to='/math-game' className="homepage-games-card">
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1715052862/isometric-maths-material-background_23-2148148447_yxicl9.jpg" alt="" />
                <span className='game-earning-multply'>5×</span>
                <div>Math Game</div>
            </NavLink>
            <NavLink to='/math-game' className="homepage-games-card">
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1715052862/isometric-maths-material-background_23-2148148447_yxicl9.jpg" alt="" />
                <span className='game-earning-multply'>5×</span>
                <div>Math Game</div>
            </NavLink>
            <NavLink to='/math-game' className="homepage-games-card">
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1715052862/isometric-maths-material-background_23-2148148447_yxicl9.jpg" alt="" />
                <span className='game-earning-multply'>5×</span>
                <div>Math Game</div>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Homepage

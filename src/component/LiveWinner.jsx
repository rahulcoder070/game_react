import React, { useEffect, useState } from 'react';
import "../style/Livewinner.css";
import UserImg from '../../datajson/User.json';
import MoneyWinning from '../../datajson/Money.json';
import GamesWinning from '../../datajson/Game.json';

const LiveWinner = () => {

  const [liveWinner, setLiveWinner] = useState([]);

  const getLiveWinner = () => {
    let winnerUsers = [];
    for (let index = 0; index < 6; index++) {
      const imgRandomIndex = Math.floor(Math.random() * UserImg?.Users.length);
      const moneyRandomIndex = Math.floor(Math.random() * MoneyWinning?.Money.length);
      const gameRandomIndex = Math.floor(Math.random() * GamesWinning?.Games.length);
      let getRandomImg = UserImg?.Users[imgRandomIndex];
      let getRandomMoney = MoneyWinning?.Money[moneyRandomIndex];
      let getRandomGame = GamesWinning?.Games[gameRandomIndex];
      let user ={getRandomImg, getRandomGame, getRandomMoney}
      winnerUsers.push(user);
    }
    setLiveWinner(winnerUsers.slice(0,6));
  }

  
  setInterval(() => {
    getLiveWinner();
  }, 2000);
  
  useEffect(()=>{
    getLiveWinner();
  },[])

  return (
    <>
      <div className="live-winner">
      <h2 className='homepage-heading'>Live Winning</h2>
        <div className="live-winner-container">
          {liveWinner.map((user)=>(
            <div className="live-winner-card">
                <img src={user.getRandomImg} alt="" className="live-winner-img" />
                <img src={user.getRandomGame} alt="" className="live-winner-img" />
                <div className="live-winner-money">
                  <div>Receive <span>{user.getRandomMoney}</span></div>
                  <div>Winning amount</div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default LiveWinner

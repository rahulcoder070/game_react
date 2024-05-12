import React, { useState } from 'react';
import '../style/MathGame.css';
import Timer from '../component/Timer';
import WinPopup from '../component/winPopup';
import LosePopup from '../component/LosePopup';
import TimeOut from '../component/TimeOut';
import { useAuth } from '../context/AuthProvider';
import AddMoneyPopup from '../component/AddMoneyPopup';

const Addition = () => {

    const [amount, setAmount] = useState(null);
    const [startGame, setStartGame] = useState(false);
    const [timer, setTimer] = Timer(0);
    const [selectedValve, setSelectedValve] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [rightAnswer, setRightAnswer] = useState('');
    const [questionOptions, setQuestionOptions] = useState('');
    const [gameResultPopup, setGameResultPopup] = useState(false);
    const [gameResult, setGameResult] = useState("");
    const [auth, setAuth] = useAuth();
    const [addMoneyPopup, setAddMoneyPopup] = useState(false);
      
      const handleChange = (e) => {
        setSelectedValve(e.target.value)
      }

      const handleStartGame = () => {
        if(auth.amount >= amount){
            setStartGame(true);
            setTimer(20);
            questionready();
        }else{
            setAddMoneyPopup(true);
        }
      };

    const questionready = () => {
        let randomNumber = Math.random();
        let string = randomNumber.toString();
        let firstNumber = parseInt(string.slice(2,6));
        setFirstNumber(firstNumber)
        let secondNumber = parseInt(string.slice(6,10));
        setSecondNumber(secondNumber)
        
        let rightAnswer = firstNumber + secondNumber;
        setRightAnswer(rightAnswer);
        let wrongAnswer1 = rightAnswer + parseInt(string.charAt(3));
        let wrongAnswer2 = rightAnswer - parseInt(string.charAt(4));
        let wrongAnswer3 = rightAnswer + parseInt(string.charAt(5));
        const randomIndex = Math.floor(Math.random() * 4);
  
        let questionOptions = [wrongAnswer1, wrongAnswer2, wrongAnswer3];
        questionOptions.splice(randomIndex, 0, rightAnswer);
        setQuestionOptions(questionOptions);
    }

    const sumitQuestions = () => {
        setStartGame(false);
        if(timer > 0){
            if(selectedValve == rightAnswer){
                setGameResultPopup(true);
                setGameResult("win");
                const data = {user:auth.user, amount:auth.amount+amount*2, transactions:auth.transactions, upi:auth.upi};
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data)
            }else{
                setGameResult("lose");
                const data = {user:auth.user, amount:auth.amount-amount, transactions:auth.transactions, upi:auth.upi};
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data);
            }
        }else{
            setGameResult("Time-Out");
            const data = {user:auth.user, amount:auth.amount-amount, transactions:auth.transactions, upi:auth.upi};
            localStorage.setItem('auth', JSON.stringify(data));
            setAuth(data);
        }
    }

    const handleChildData = () => {
        setGameResultPopup(false);
        setGameResult('');
        setAmount(0);
    }
    const closeAddMoneyPopup =() => {
        setAddMoneyPopup(false);
    }

  return (
    <>
    <div className='mathgame'>
        <div className="mathgame-container">
        <div>
            <h1 className='Page-Heading'>{startGame ? <div>Timer:- 0 : {timer}</div> : <div>Timer:- 0 : 20</div>}</h1>
        </div>
        {startGame ? <><div className="math-question-card">
            <div className="math-question">(Q). {firstNumber} + {secondNumber}</div>
            <form className='math-question-options'>
                <div>
                    <input type="radio" id="option1" name="options" value={questionOptions[0]} onChange={handleChange}/>
                    <label for="option1">{questionOptions[0]}</label><br/>
                </div>
                <div>
                    <input type="radio" id="option2" name="options" value={questionOptions[1]} onChange={handleChange}/>
                    <label for="option2">{questionOptions[1]}</label><br/>
                </div>
                <div>
                    <input type="radio" id="option3" name="options" value={questionOptions[2]} onChange={handleChange}/>
                    <label for="option3">{questionOptions[2]}</label><br/>
                </div>
                <div>
                    <input type="radio" id="option4" name="options" value={questionOptions[3]} onChange={handleChange}/>
                    <label for="option4">{questionOptions[3]}</label><br/>
                </div>
            </form>
            <button className='qustion-submit-button' onClick={()=>sumitQuestions()}>Submit</button>
        </div></> :
        <>
        <h2 className='game-heading'>Give Right Answer and EARN Real Money 2×</h2>
        <div className="money-add-game">
            <h3>Enter Amount</h3>
            <input type="Number" value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="numeric" className="no-spinner amount-input-filed"/>
            <button onClick={()=> handleStartGame()} className='big-submit-button'>Start</button>
        </div>
        </>}
        </div>
    </div>
    
    {gameResult == "win" && <WinPopup amount={amount} sendToParent={handleChildData}/>}
    {gameResult == "lose" && <LosePopup amount={amount} sendToParent={handleChildData}/>}
    {gameResult == "Time-Out" && <TimeOut amount={amount} sendToParent={handleChildData}/>}

    {addMoneyPopup && <AddMoneyPopup sendToParent={closeAddMoneyPopup}/>}
    </>
  )
}

export default Addition

import React, { useState } from 'react';
import '../style/MathGame.css';
import Timer from './Timer';
import WinPopup from './winPopup';
import LosePopup from './LosePopup';
import TimeOut from './TimeOut';
import { useAuth } from '../context/AuthProvider';
import AddMoneyPopup from './AddMoneyPopup';

const MathGames = ({gameName}) => {

    const [amount, setAmount] = useState(null);
    const [startGame, setStartGame] = useState(false);
    const [timer, setTimer] = Timer(0);
    const [selectedValve, setSelectedValve] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [rightAnswer, setRightAnswer] = useState('');
    const [questionOptions, setQuestionOptions] = useState('');
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

        let rightAnswer = 0;
        if(gameName === "+"){
            rightAnswer += firstNumber + secondNumber;
        }else if(gameName == "-"){
            rightAnswer += firstNumber - secondNumber;
        }else{
            rightAnswer += firstNumber * secondNumber;
        }
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
                setGameResult("win");
                const data = {...auth, amount:auth.amount+amount*2};
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data)
            }else{
                setGameResult("lose");
                const data = {...auth, amount:auth.amount-amount};
                localStorage.setItem('auth', JSON.stringify(data));
                setAuth(data);
            }
        }else{
            setGameResult("Time-Out");
            const data = {...auth, amount:auth.amount-amount};
            localStorage.setItem('auth', JSON.stringify(data));
            setAuth(data);
        }
    }

    const handleChildData = () => {
        setGameResult('');
        setAmount(0);
    }
    const closeAddMoneyPopup =() => {
        setAddMoneyPopup(false);
    }

  return (
    <>
    <div className='mathgame'>
        {gameName}
        <div className="mathgame-container">
        <div>
            <h1 className='game-timer'>{startGame ? <div>Timer:- 0 : {timer}</div> : <div>Timer:- 0 : 20</div>}</h1>
        </div>
        {startGame ? <><div className="math-question-card">
            <div className="math-question">(Q). {firstNumber} {gameName} {secondNumber}</div>
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
            <button className='big-submit-button' onClick={()=>sumitQuestions()}>Submit</button>
        </div></> :
        <>
        <p className='game-heading'>Give <span>Right</span> Answer and <span>WIN</span> Real Money 2×</p>

        <div class="square-buttons" onChange={(e) => setAmount(e.target.value)}>
            <input type="radio" id="0" name="selectButton" value="0"/>
            <label for="0">Test</label>
            <input type="radio" id="50" name="selectButton" value="50"/>
            <label for="50">₹ 50.00</label>
            <input type="radio" id="100" name="selectButton" value="100"/>
            <label for="100">₹ 100.00</label>
            <input type="radio" id="200" name="selectButton" value="200"/>
            <label for="200">₹ 200.00</label>
            <input type="radio" id="500" name="selectButton" value="500"/>
            <label for="500">₹ 500.00</label>
            <input type="radio" id="1000" name="selectButton" value="1000"/>
            <label for="1000">₹ 1,000.00</label>
            <input type="radio" id="2000" name="selectButton" value="2000"/>
            <label for="2000">₹ 2,000.00</label>
            <input type="radio" id="5000" name="selectButton" value="5000"/>
            <label for="5000">₹ 5,000.00</label>
            <input type="radio" id="10000" name="selectButton" value="10000"/>
            <label for="10000">₹ 10,000.00</label>
        </div>
            <button onClick={()=> handleStartGame()} className='big-submit-button'>Start Game</button>
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

export default MathGames

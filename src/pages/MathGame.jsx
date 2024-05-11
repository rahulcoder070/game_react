import React, { useState } from 'react';
import '../style/MathGame.css';
import Timer from '../component/Timer';
import WinPopup from '../component/winPopup';

const MathGame = () => {

    const [amount, setAmount] = useState(null);
    const [startGame, setStartGame] = useState(false);
    const [timer, setTimer] = Timer(0);
    const [selectedValve, setSelectedValve] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [rightAnswer, setRightAnswer] = useState('');
    const [questionOptions, setQuestionOptions] = useState('');
    const [gameResult, setGameResult] = useState(false);
      
      const handleChange = (e) => {
        setSelectedValve(e.target.value)
      }

      const handleStartGame = () => {
        setStartGame(true);
        setTimer(20);
        questionready();
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
                setGameResult(true);
                setAmount(amount*2);
            }else{
                return alert("Wrong")
            }
        }else{
            return alert("Time Out")
        }
    }

    const handleChildData = () => {
        setGameResult(false);
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
        <h2 className='game-heading'>Invest and Earn Real Money 5×</h2>
        <div className="money-add-game">
            <h3>Enter Amount</h3>
            <input type="Number" autoFocus value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="numeric" className="no-spinner"/>
            <button onClick={()=> handleStartGame()}>Start</button>
        </div>
        </>}
        </div>
    </div>
    
    {gameResult && <WinPopup amount={amount} sendToParent={handleChildData}/>}
    </>
  )
}

export default MathGame

import React from 'react';
import '../style/Transactions.css';
import { useAuth } from '../context/AuthProvider';

const Transactions = () => {

  const[auth, setAuth] = useAuth();

  return (
    <>
    <div className="transactions">
      <div className="transactions-container">
      <div className='homepage-heading'>Transactions</div>
        {Array.isArray(auth?.transactions) && auth?.transactions.map((data, index)=>(
          <div key={index} className="transactions-card">
          <div className="transactions-name">Withdraw</div>
          <div className="transactions-name">{data[1].slice(0,10)}</div>
          <div className="transactions-price">{data[2]}</div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Transactions

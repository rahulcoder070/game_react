import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const AddAmount = () => {

    const [auth, setAuth] = useAuth();
    let {id} = useParams();
    console.log(id)

    useEffect(()=>{
        if(auth){
            const data = {...auth, amount: id};
            localStorage.setItem('auth', JSON.stringify(data));
            setAuth(data);
        }
    })

  return (
    <>
        <h1 >hello sir</h1>
        <p>added amount {id}</p>
    </>
  )
}

export default AddAmount

import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const AddAmount = () => {

    const [auth, setAuth] = useAuth();
    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(auth){
            const data = {...auth, amount: parseInt(id)};
            localStorage.setItem('auth', JSON.stringify(data));
            setAuth(data);
            navigate('/');
        }
    },[])

  return (
    <>
        <h1 >hello sir</h1>
        <p>added amount {id}</p>
    </>
  )
}

export default AddAmount

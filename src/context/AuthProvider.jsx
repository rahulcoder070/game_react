import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({ user: null, amount:0, transactions: null });

    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
            const parseData = JSON.parse(data);
            setAuth({ ...auth, user: parseData?.user, amount: parseData?.amount, transactions: parseData?.transactions })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom Hook
const useAuth = () => useContext(AuthContext);

export{ useAuth, AuthProvider };
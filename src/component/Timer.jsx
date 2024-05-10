import { useState, useEffect } from 'react';

const Timer = (initialTime) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return [timer, setTimer];
};

export default Timer;
import React, { useState, useEffect } from 'react'

const Interval = () => {
  const [next, setNext] = useState(1);
  /* useEffect(() => {
    const interval = setInterval(() => {
      if (next === length - 1) {
        setNext(1);
      } else {
        setNext(next + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [next]); */

  useEffect(() => {
    const interval = setInterval(() => {
      ((next === (length - 1)) ? setNext(1) : setNext(next+1));

    }, 5000);
    return () => clearInterval(interval);

  }, [next]);
  return (
    <>
    </>
  )
}

export default Interval;
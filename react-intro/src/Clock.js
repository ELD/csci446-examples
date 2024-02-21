import { useState, useEffect } from "react";

export default function ClockFunction() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick(t => t + 1);
      console.log("tick");
    }, 1000)
    return () => {
      console.log("essentially componentWillUnmount; timer cleared");
      clearInterval(timer);
    }
  }, []);

  return (
    <p>{tick} seconds have passed</p>
  )
}


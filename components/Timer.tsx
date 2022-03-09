import React, { useEffect } from "react";

const Timer: React.FC<{ setTime: any; time: number }> = ({ setTime, time }) => {
  useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  return <div className="text-darkgray text-2xl">{time}</div>;
};

export default Timer;

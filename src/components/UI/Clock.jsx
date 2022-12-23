
import React, { useEffect, useState } from "react";
import '../../styles/clock.css'

const Clock = () => {
  const [days, setDays] = useState(),
    [hours, setHours] = useState(),
    [minutes, setMinutes] = useState(),
    [second, setSecond] = useState();

  let interval;
  const countDown = () => {
    let destination = new Date("Oct 10 , 2030").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const diffrent = destination - now,
        days = Math.floor(diffrent / (1000 * 60 * 60 * 24)),
        hours = Math.floor(
          (diffrent % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
        ),
        minutes = Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((diffrent % (1000 * 60)) / 1000);
        if (destination < 0) {
          clearInterval(interval.current);
        } else {
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSecond(seconds);
        }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="clock__wrapper flex items-center gap-5 mt-5">
      <div className="clock__data  flex items-center gap-2 ">
        <div className="text-center">
          <h1 className="text-slate-900 text-2xl mb-2 bg-white px-2 py-4">{days}</h1>
          <h5 className="text-white text-lg">Days</h5>
        </div>
      </div>
        <span className="text-white text-lg">:</span>

      <div className="clock__data  flex items-center gap-2 ">
        <div className="text-center">
          <h1 className="text-slate-900 text-2xl mb-2 bg-white px-2 py-4">{hours}</h1>
          <h5 className="text-white text-lg">Hours</h5>
        </div>
      </div>
        <span className="text-white text-lg">:</span>

      <div className="clock__data  flex items-center gap-2 ">
        <div className="text-center">
          <h1 className="text-slate-900 text-2xl mb-2 bg-white px-2 py-4">{minutes}</h1>
          <h5 className="text-white text-lg">Minutes</h5>
        </div>
      </div>
        <span className="text-white text-lg">:</span>
      <div className="clock__data  flex items-center gap-2 ">
        <div className="text-center">
          <h1 className="text-slate-900 text-2xl mb-2 bg-white px-2 py-4">{second}</h1>
          <h5 className="text-white text-lg">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;

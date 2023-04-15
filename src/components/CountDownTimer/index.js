import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import ShowCounter from './ShowCounter';

export default function CountDownTimer({ targetDate, setIsVisible }) {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState({
    days: '??',
    hours: '??',
    minutes: '??',
    seconds: '??',
  });

  const getTimeRemaining = e => {
    const countDown = Date.parse(e) - Date.parse(new Date());

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return {
      total: countDown,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = e => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setTimer({
        days: days > 9 ? days : '0' + days,
        hours: hours > 9 ? hours : '0' + hours,
        minutes: minutes > 9 ? minutes : '0' + minutes,
        seconds: seconds > 9 ? seconds : '0' + seconds,
      });
    } else {
      setIsVisible(false);
    }
  };

  const clearTimer = e => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    // setTimer({
    //   days: '--',
    //   hours: '--',
    //   minutes: '--',
    //   seconds: '--',
    // });

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = targetDate => {
    let deadline = new Date(targetDate);

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime(targetDate));
  }, []);

  return (
    <ShowCounter
      days={timer.days}
      hours={timer.hours}
      minutes={timer.minutes}
      seconds={timer.seconds}
    />
  );
}

import { useEffect, useState } from "react";

export function Timer({ duration, dispatch }) {
  const [time, setTime] = useState(duration);

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  const timeString = `${mins}:${secs < 10 ? "0" : ""}${secs}`;

  useEffect(() => {
    const id = setInterval(() => {
      //
      setTime((time) => time - 1);
    }, 1000);

    return () => {
      console.log("clean up effect");
      clearInterval(id);
    };
  }, [dispatch]);

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "finishQuiz" });
    }
  }, [dispatch, time]);

  return <div className="timer">{timeString}</div>;
}

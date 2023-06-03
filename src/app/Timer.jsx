"use client"
import ReactTimeago from "react-timeago";

function Timer({ time }) {
  return (
    <div>
      <ReactTimeago date={time} />
    </div>
  );
}

export default Timer;

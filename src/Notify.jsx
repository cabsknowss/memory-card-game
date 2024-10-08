import React from "react";

const Notify = ({
  score,
  setScore,
  bestScore,
  setBestScore,
  setShowNotify,
}) => {
  const closeClickEvent = () => {
    setScore(0);

    if (score > bestScore) {
      setBestScore(score);
    }
    setShowNotify(false);
  };
  return (
    <div className="notify-background">
      <div className="notify-container">
        <h1>OOPS, YOU LOSE!!!</h1>
        <h2>Your Score: {score}</h2>
        <button className="notify-close" onClick={closeClickEvent}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Notify;

import React, { useState, useEffect } from "react";
import Notify from "./Notify";

const initialCards = [
  {
    id: 1,
    name: "Anne Boonchuy",
    chosen: false,
  },
  {
    id: 2,
    name: "Captain Grime",
    chosen: false,
  },
  {
    id: 3,
    name: "Hop Pop",
    chosen: false,
  },
  {
    id: 4,
    name: "Leopold Loggle",
    chosen: false,
  },
  {
    id: 5,
    name: "Maddie Flour",
    chosen: false,
  },
  {
    id: 6,
    name: "Mayor Toadstool",
    chosen: false,
  },
  {
    id: 7,
    name: "Polly Plantar",
    chosen: false,
  },
  {
    id: 8,
    name: "Sadie Croaker",
    chosen: false,
  },
  {
    id: 9,
    name: "Sasha",
    chosen: false,
  },
  {
    id: 10,
    name: "Sprig Plantar",
    chosen: false,
  },
  {
    id: 11,
    name: "Sylvia Sundew",
    chosen: false,
  },
  {
    id: 12,
    name: "Wally",
    chosen: false,
  },
];

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(initialCards);
  const [showNotify, setShowNotify] = useState(false);

  useEffect(() => {
    const newArr = [...cards];

    for (let i = newArr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setCards([...newArr]);
  }, [score]);

  const onCardSelect = (card, id) => {
    if (card.chosen) {
      setShowNotify(true);
      setCards(initialCards);
    }

    if (!card.chosen) {
      setScore((score) => score + 1);

      setCards((c) =>
        c.map((card) => (card.id === id ? { ...card, chosen: true } : card))
      );

      console.log(cards);
    }
  };

  return (
    <div className="app">
      <header>
        <div className="header-title">
          <h1>Memory-G</h1>
          <p>
            Get points by clicking on an image but don't click on any more than
            once
          </p>
        </div>
        <div className="header-score">
          <p>Score: {score}</p>
          <p>Best: {bestScore}</p>
        </div>
      </header>

      <main>
        <div className="card-grid">
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => onCardSelect(card, card.id)}
            >
              <img src={`./img/${card.name.replace(" ", "_")}.png`} alt="" />
              <h1>{card.name}</h1>
            </div>
          ))}
        </div>
      </main>

      {showNotify && (
        <Notify
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          setShowNotify={setShowNotify}
        />
      )}
    </div>
  );
};

export default App;

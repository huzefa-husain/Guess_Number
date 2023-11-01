import { useState, useEffect } from "react";

const useGuessNumberComputer = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const [guess, setGuess] = useState(0);
  // Hard coded value of User's number which he thought and wanted computer to guess
  const [userNumber] = useState(550);
  // Check to end the game
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const makeGuess = () => {
    const newGuess = Math.floor(Math.random() * (max - min + 1) + min);
    setGuess(newGuess);
  };

  const handleUserResponse = (response) => {
    if (response === "tooLow") {
      setMin(guess + 1);
      makeGuess();
    } else if (response === "tooHigh") {
      setMax(guess - 1);
      makeGuess();
    } else if (response === "correct") {
      setIsGameCompleted(true);
    } else if (response === "restart") {
      setIsGameCompleted(false);
      setMin(1)
      setMax(10000)
      setGuess(0)
    }
  };

  useEffect(() => {
    if (!isGameCompleted) {
      makeGuess();
    }
  }, [isGameCompleted]);

  return {
    isGameCompleted,
    guess,
    handleUserResponse,
    userNumber
  };
};

export default useGuessNumberComputer;

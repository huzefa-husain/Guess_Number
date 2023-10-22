import { useState, useEffect } from "react";

let rndNum = Math.floor(Math.random() * 10000) + 1;

const useGuessNumberComputer = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  // Initially set the random number
  const [guess, setGuess] = useState(rndNum);
  // Hard coded value of User's number which he thought and wanted computer to guess
  const [userNumber] = useState(100);
  // Check to end the game
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  useEffect(() => {
    if (!isGameCompleted) {
      makeGuess();
    }
  }, [min, max]);

  const makeGuess = () => {
    if (min > max) {
      setIsGameCompleted(true);
      return;
    }

    const newGuess = Math.floor(Math.random() * (max - min + 1) + min);
    setGuess(newGuess);

    /* if (newGuess === userNumber) {
      setIsGameCompleted(true);
    } */
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
      makeGuess();
    }
  };

  return {
    isGameCompleted,
    guess,
    handleUserResponse,
    userNumber
  };
};

export default useGuessNumberComputer;

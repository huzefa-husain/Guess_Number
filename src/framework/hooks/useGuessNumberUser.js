import { useState } from "react";

const getRandomNumber = () => Math.floor(Math.random() * 10000) + 1;

const useGuessNumberUser = () => {
  const [userGuess, setUserGuess] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [userGuessValue, setUserGuessValue] = useState([]);
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isLowOrHigh, setisLowOrHigh] = useState("");

  const handleChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = () => {
    const numberGuess = Number(userGuess);
    setUserCount(userCount + 1);
    setUserGuessValue([...userGuessValue, numberGuess]);
    if (randomNumber === numberGuess) {
      setMessage("Yay... you have guessed the number !!!");
      setDisabled(true);
      setisLowOrHigh("");
    } else {
      const lowOrHigh = randomNumber < numberGuess ? "Too High" : "Too Low";
      setisLowOrHigh(lowOrHigh);
    }
  };

  const restartAgain = () => {
    setDisabled(false);
    setMessage("");
    setUserGuessValue([]);
    setUserCount(0);
    setUserGuess("");
    setRandomNumber(getRandomNumber());
    setisLowOrHigh("");
  };

  return {
    disabled,
    isLowOrHigh,
    message,
    userGuess,
    handleChange,
    handleSubmit,
    restartAgain,
    userCount,
    userGuessValue,
    randomNumber
  };
};

export default useGuessNumberUser;

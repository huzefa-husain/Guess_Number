import useGuessNumberComputer from "../framework/hooks/useGuessNumberComputer";
import Button from "../framework/ui/Button/Button";

const ComputerGuessNumber = () => {
  const { isGameCompleted, guess, handleUserResponse, userNumber } =
    useGuessNumberComputer();

  return (
    <>
      <h1 className="text-center uppercase mb-3">Guess the Number - Computer</h1>
      <h2 className="uppercase mb-3 text-center text-red-400">Guess the Number between 1 - 10000</h2>
      {!isGameCompleted ? (
        <div>
          <p className="mb-3">Computer's guess: {guess}</p>
          <Button
            onClick={() => handleUserResponse("tooLow")}
            label={"Too Low"}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-2"
          />
          <Button
            onClick={() => handleUserResponse("tooHigh")}
            label={"Too High"}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-2"
          />
          <Button
            onClick={() => handleUserResponse("correct")}
            label={"Correct"}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-2"
          />
        </div>
      ) : (
        <div className="mt-3">
          <p>Final Guessed Number: {guess}</p>
          <Button
            onClick={() => handleUserResponse("restart")}
            label={"Restart"}
            className="mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          />
        </div>
      )}
      <p className="mt-3">Number you thought: {userNumber}</p>
    </>
  );
};

export default ComputerGuessNumber;

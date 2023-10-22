import useGuessNumberUser from "../framework/hooks/useGuessNumberUser";
import Input from "../framework/ui/Input/Input";
import Button from "../framework/ui/Button/Button";

const UserGuessNumber = () => {
  const {
    disabled,
    isLowOrHigh,
    message,
    userGuess,
    handleChange,
    handleSubmit,
    restartAgain,
    userCount,
    userGuessValue,
    randomNumber,
  } = useGuessNumberUser();
  return (
    <>
      <h1 className="uppercase mb-3 text-center">Guess the Number - Human</h1>
      <h2 className="uppercase mb-3 text-center text-red-400">Guess the Number between 1 - 10000</h2>
      <div className="flex mb-3">
        <Input
          disabled={disabled}
          value={userGuess}
          onChange={handleChange}
          type="text"
        />

        <Button
          disabled={disabled}
          onClick={handleSubmit}
          label={"Guess"}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mr-2"
        />

        {disabled && (
          <Button
            onClick={restartAgain}
            label={"Restart"}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          />
        )}
      </div>

      <p>Total Guess : {userCount}</p>
      <p>
        Your Guesses :
        {userGuessValue?.map((item, index) => {
          return <span key={index}>{item}, </span>;
        })}
      </p>
      <p>Random Number : {randomNumber} </p>
      <p className="text-red-400">{isLowOrHigh}</p>
      <p className="text-green-400">{message}</p>
    </>
  );
};

export default UserGuessNumber;

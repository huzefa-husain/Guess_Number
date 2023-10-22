import { useState } from "react";

import ComputerGuessNumber from "./components/ComputerGuessNumber";
import UserGuessNumber from "./components/UserGuessNumber";
import icoComputer from "./assets/images/ico_computer.png";
import icoHuman from "./assets/images/ico_human.png";
import Button from "./framework/ui/Button/Button";

function App() {
  const [showComputer, setShowComputer] = useState(null);
  return (
    <div className="min-h-screen text-white pt-5">
      <h1 className="text-black text-center mb-5 text-2xl">Are you a Computer or Human ?</h1>
      {/* Buttons to toggle between components */}
      <div className="text-center mb-5">
        <Button
          label={"Computer"}
          onClick={() => setShowComputer(true)}
          className="font-bold text-black w-[100px] mr-5"
          icon={icoComputer}
        />
        <Button
          label={"Human"}
          onClick={() => setShowComputer(false)}
          className="font-bold text-black w-[100px]"
          icon={icoHuman}
        />
      </div>

      {/* Render the selected component based on the state */}
      {showComputer === true && (
        <div className="w-1/2 my-0 mx-auto bg-black p-5">
          <ComputerGuessNumber />
        </div>
      )}
      {showComputer === false && (
        <div className="w-1/2 my-0 mx-auto bg-black p-5">
          <UserGuessNumber />
        </div>
      )}
    </div>
  );
}

export default App;

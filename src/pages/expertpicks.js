import React, { useState } from "react";
import BasicModal from "../components/playerModal";

const ExpertPicks = ({ player }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <BasicModal player={player} isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)}></button>
    </div>
  );
}

export default ExpertPicks;
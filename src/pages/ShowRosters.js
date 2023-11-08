import React, { useState } from "react";
import BasicModal from "../components/playerModal";

function ShowRosters({ rosters }) {
  return (
    <div className="bg-gray-200 shadow rounded p-4 space-y-4">
      <div className="px-4 py-8">
        <h1 className="text-3xl font-bold pb-5">League Rosters</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {rosters.map((roster) => (
            <Team key={roster._id} team={roster} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Team({ team }) {
  const [showPlayers, setShowPlayers] = useState(false);

  return (
    <div
      onClick={() => setShowPlayers(!showPlayers)}
      className={`p-4 rounded bg-white shadow cursor-pointer ${
        !showPlayers ? "hover:bg-gray-100" : ""
      }`}
    >
      <h2 className="text-2xl font-bold">{team.teamName}</h2>
      {showPlayers && <Players team={team} />}
    </div>
  );
}

function Players({ team }) {
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">{team.teamName} Roster</h3>
      <div className="grid grid-cols-2 gap-4">
        {team.roster.sort((a,b) => b.tradeValue - a.tradeValue).map((player) => (
          <Player key={player._id} player={player} />
        ))}
      </div>
    </div>
  );
}

function Player({ player }) {
  const [isOpen, setIsOpen] = useState(false);
  let boxClass;

  if (player.tradeValue > 75) {
    boxClass = "yellow";
  } else if (player.tradeValue > 50) {
    boxClass = "purple";
  } else if (player.tradeValue > 35) {
    boxClass = "blue";
  } else if (player.tradeValue > 15) {
    boxClass = "green";
  } else {
    boxClass = "red";
  }


  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`p-2 rounded bg-${boxClass}-500 bg-opacity-50 hover:bg-${boxClass}-200 flex justify-between cursor-pointer`}
      >
        <p className="font-semibold">{player.position} {player.name}</p>
        <p>{player.tradeValue}</p>
      </div>
      <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} player={player} />
    </>
  );
}

export default ShowRosters;

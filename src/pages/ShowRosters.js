import React, { useState } from "react";
import BasicModal from "../components/playerModal";
import {Avatar} from "../components/Avatar";  

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
  console.log(team);
  console.log(team.avatar_id);
  return (
    <div
      onClick={() => setShowPlayers(!showPlayers)}
      className={`p-4 rounded bg-white shadow cursor-pointer ${
        !showPlayers ? "hover:bg-gray-100" : ""
      }`}
    >
      <h2 className="text-2xl font-bold">
        <div className="flex items-center">
         <Avatar avatarId = {team.avatar_id}/> <div className ="pl-4"> {team.teamName} </div>
         </div>
        </h2>
      {showPlayers && <Players team={team} />}
    </div>
  );
}

function Players({ team }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {team.roster
          .filter((player) => player !== null) // Filter out null values
          .sort((a, b) => b.tradeValue - a.tradeValue)
          .map((player) => (
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
    boxClass = "bg-yellow-500";
  } else if (player.tradeValue > 50) {
    boxClass = "bg-purple-500";
  } else if (player.tradeValue > 25) {
    boxClass = "bg-blue-500";
  } else if (player.tradeValue >= 10) {
    boxClass = "bg-green-500";
  } else {
    boxClass = "bg-red-500";
  }

  // Add opacity to color
  boxClass = boxClass.replace("500", "500 bg-opacity-50");

  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  let imgUrl =
    player.position === "DEF"
      ? `https://sleepercdn.com/images/team_logos/nfl/${player.player_id.toLowerCase()}.png`
      : `https://sleepercdn.com/content/nfl/players/${player.player_id}.jpg`;
  // console.log(imgUrl);
  return (
    <>
      <div
        onClick={handleClick}
        className={`p-2 rounded ${boxClass} flex justify-between cursor-pointer items-center`}
      >
        <div className="flex items-center">
          <div className="flex justify-center items-center rounded-full w-10 h-10 overflow-hidden">
            <img
              src={imgUrl}
              alt={player.name}
              className="transform scale-110 object-cover w-full h-full"
            />
          </div>
          <p className="font-semibold ml-2">
            [{player.position}] {player.name}
          </p>
        </div>
        <p>{player.tradeValue}</p>
      </div>
      <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} player={player} />
    </>
  );
}

export default ShowRosters;

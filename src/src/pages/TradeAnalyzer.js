import React, { useState } from "react";

const TradeAnalyzer = ({ rosters, currentOwnerId }) => {
  const [state, setState] = useState({
    stage: "select-team",
    selectedTeam: null,
    selectedPlayers: [],
    userTeam: rosters.find((roster) => roster.owner_id === currentOwnerId),
    userSelectedPlayers: [],
  });

  const handleTeamSelect = (team) => {
    setState((prevState) => ({
      ...prevState,
      stage: "select-players",
      selectedTeam: team,
    }));
  };

  const handlePlayerSelect = (player) => {
    if (state.selectedPlayers.some((p) => p.player_id === player.player_id)) {
      setState((prevState) => ({
        ...prevState,
        selectedPlayers: prevState.selectedPlayers.filter(
          (p) => p.player_id !== player.player_id
        ),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        selectedPlayers: [...prevState.selectedPlayers, player],
      }));
    }
  };

  const handleUserPlayerSelect = (player) => {
    if (
      state.userSelectedPlayers.some((p) => p.player_id === player.player_id)
    ) {
      setState((prevState) => ({
        ...prevState,
        userSelectedPlayers: prevState.userSelectedPlayers.filter(
          (p) => p.player_id !== player.player_id
        ),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        userSelectedPlayers: [...prevState.userSelectedPlayers, player],
      }));
    }
  };

  const returnToTeamSelect = () => {
    setState((prevState) => ({
      ...prevState,
      stage: "select-team",
      selectedPlayers: [],
    }));
  };

  const finishUserSelecting = () => {
    setState((prevState) => ({ ...prevState, stage: "compare" }));
  };

  const comparePlayers = () => {
    const totalTradeValueSelected = state.selectedPlayers.reduce(
      (sum, player) => sum + player.tradeValue,
      0
    );
    const totalTradeValueUser = state.userSelectedPlayers.reduce(
      (sum, player) => sum + player.tradeValue,
      0
    );
    return totalTradeValueSelected - totalTradeValueUser;
  };

  const calculateTotalTradeValue = (players) => {
    return players.reduce((total, player) => total + player.tradeValue, 0);
  };
  let totalTradeValueForSelectedTeam = 0;
  let totalTradeValueForUserTeam = 0;

  if (state.selectedPlayers) {
    totalTradeValueForSelectedTeam = calculateTotalTradeValue(
      state.selectedPlayers
    );
  }
  if (state.userSelectedPlayers) {
    totalTradeValueForUserTeam = calculateTotalTradeValue(
      state.userSelectedPlayers
    );
  }

  const Team = ({
    headerTitle,
    teamData,
    playerSelectHandler,
    selectedPlayers,
    showHeaderButton,
    headerButtonHandler,
  }) => (
    <div className="bg-white shadow rounded p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{headerTitle}</h2>
        {showHeaderButton && (
          <button
            onClick={headerButtonHandler}
            className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
          >
            Return
          </button>
        )}
      </div>
      {teamData
        .sort((a, b) => b.tradeValue - a.tradeValue)
        .map((player) => (
          <Player
            key={player.player_id}
            playerData={player}
            playerSelectHandler={playerSelectHandler}
            isSelected={selectedPlayers.some(
              (p) => p.player_id === player.player_id
            )}
          />
        ))}
    </div>
  );

  function findTradeColor(tradeValue){
    let boxClass = '';
    if (tradeValue > 75) {
      boxClass = 'yellow';
    } else if (tradeValue > 50) {
      boxClass = 'purple';
    } else if (tradeValue > 35) {
      boxClass = 'blue';
    } else if (tradeValue > 15) {
      boxClass = 'green';
    } else {
      boxClass = 'red';
    }
    return boxClass;
  }

  const Player = ({ playerData, playerSelectHandler, isSelected }) => {
   
    let boxClass = findTradeColor(playerData.tradeValue);
    const baseColor = `bg-${boxClass}-500 bg-opacity-50 hover:bg-${boxClass}-400`;
    const selectedColor = `bg-${boxClass}-800 bg-opacity-100 hover:bg-${boxClass}-400`;

  
    return (
      // button that just shows player.name and has a hover value that changes background color
      <button onClick={() => playerSelectHandler(playerData)} className={`flex justify-between items-center p-2 rounded 
      ${isSelected ? `${selectedColor}` : `${baseColor} `} mb-2 w-full transition-colors duration-15 `}> 
      <span className="flex-1 text-left font-semibold">{playerData.name}</span>
      <span className="flex-1 text-right">{playerData.tradeValue}</span>
       </button>
    );
  };

  const TeamSelector = ({ teams, teamSelectHandler }) => (
    <div className="bg-white shadow rounded p-4 space-y-4">
      <h2 className="text-2xl font-bold">Select a Team</h2>
      {teams.map((team) => (
        <button
          key={team.owner_id}
          onClick={() => teamSelectHandler(team)}
          className="w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          {team.teamName}
        </button>
      ))}
    </div>
  );

  const TradeValueComparison = ({ comparisonFunction }) => (
    <p>The difference in trade value is: {comparisonFunction()}</p>
  );

  const SelectedPlayers = ({ headerTitle, players, totalTradeValue, tradeValueDifference }) => (
    <div className="bg-white shadow rounded p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{headerTitle}</h2>
        <h2 className="text-2xl font-regular">{tradeValueDifference}</h2>
      </div>
      <h2>Total Trade Value: {totalTradeValue}</h2>
      {players
        .sort((a, b) => b.tradeValue - a.tradeValue)
        .map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 rounded bg-gray-200 mb-2"
          >
            <span className="flex-1 text-left">{player.name}</span>
            <span className="flex-1 text-right">{player.tradeValue}</span>
          </div>
        ))}
    </div>
  );
  return (
    <div className="TradeAnalyzerContainer p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
        {/* Stage: Select Team */}
        {state.stage === "select-team" && (
          <>
            <Team
              headerTitle={"Your Team"}
              teamData={state.userTeam.roster}
              playerSelectHandler={handleUserPlayerSelect}
              selectedPlayers={state.userSelectedPlayers}
            />
  
            <TeamSelector
              teams={rosters.filter((team) => team.owner_id !== currentOwnerId)}
              teamSelectHandler={handleTeamSelect}
            />
  
            {/* Empty div for the third column */}
            <div></div>
          </>
        )}
  
        {/* Stage: Select Players */}
        {state.stage === "select-players" && (
          <>
            <Team
              headerTitle={"Your Team"}
              teamData={state.userTeam.roster}
              playerSelectHandler={handleUserPlayerSelect}
              selectedPlayers={state.userSelectedPlayers}
            />
  
            <Team
              headerTitle={`${state.selectedTeam.teamName}`}
              teamData={state.selectedTeam.roster}
              playerSelectHandler={handlePlayerSelect}
              selectedPlayers={state.selectedPlayers}
              showHeaderButton={true}
              headerButtonHandler={returnToTeamSelect} // Replace with your own function
            />
          </>
        )}
  
        {/* Stage: Compare */}
        {state.stage === "compare" && (
          <TradeValueComparison comparisonFunction={comparePlayers} />
        )}
  
        {state.stage !== "select-team" && (
          <div className="flex flex-col space-y-4">
            <SelectedPlayers
              headerTitle={"Selected Players"}
              players={state.selectedPlayers}
              totalTradeValue={totalTradeValueForSelectedTeam}
             tradeValueDifference={totalTradeValueForSelectedTeam - totalTradeValueForUserTeam}
            />
  
            <SelectedPlayers
              headerTitle={"User Selected Players"}
              players={state.userSelectedPlayers}
              totalTradeValue={totalTradeValueForUserTeam}
              tradeValueDifference={totalTradeValueForUserTeam - totalTradeValueForSelectedTeam}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default TradeAnalyzer;

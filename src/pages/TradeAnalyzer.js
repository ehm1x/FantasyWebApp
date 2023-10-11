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
    <div className="Team">
      <div className="TeamHeader">
        <span>{headerTitle}</span>
        {showHeaderButton && (
          <button onClick={headerButtonHandler} className="returnButton">
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

  const Player = ({ playerData, playerSelectHandler, isSelected }) => (
    <button
      onClick={() => playerSelectHandler(playerData)}
      className={`PlayerButtonn ${isSelected ? "active" : ""}`}
    >
      <span className="PlayerName">{playerData.name}</span>
      <span className="PlayerTradeValue">{playerData.tradeValue}</span>
    </button>
  );

  const TeamSelector = ({ teams, teamSelectHandler }) => (
    <div className="Team">
      <h2 className="TeamHeader">Select a Team to Trade With</h2>
      {teams.map((team) => (
        <button
          key={team.owner_id}
          onClick={() => teamSelectHandler(team)}
          className="TeamButtonn"
        >
          {team.teamName}
        </button>
      ))}
    </div>
  );

  const TradeValueComparison = ({ comparisonFunction }) => (
    <p>The difference in trade value is: {comparisonFunction()}</p>
  );

  const SelectedPlayers = ({ headerTitle, players, totalTradeValue }) => (
    <div className="SelectedPlayerContainer">
      <h2 className="SelectedPlayerHeader">{headerTitle}</h2>
      <h2>Total Trade Value: {totalTradeValue}</h2>
      {players
        .sort((a, b) => b.tradeValue - a.tradeValue)
        .map((player, index) => (
          <p className="SelectedPlayer" key={index}>
            {player.name} - {player.tradeValue}
          </p>
        ))}
    </div>
  );

  return (
    <div className="TradeAnalyzerContainer">
      {/* Stage: Select Team */}
      {state.stage === "select-team" && (
        <div className="TeamsContainer">
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
        </div>
      )}

      {/* Stage: Select Players */}
      {/* Stage: Select Players */}
      {state.stage === "select-players" && (
        <>
          <div className="TeamsContainer">
            <Team
              headerTitle={"Your Team"}
              teamData={state.userTeam.roster}
              playerSelectHandler={handleUserPlayerSelect}
              selectedPlayers={state.userSelectedPlayers}
            />

            <Team
              headerTitle={`${state.selectedTeam.teamName}'s team`}
              teamData={state.selectedTeam.roster}
              playerSelectHandler={handlePlayerSelect}
              selectedPlayers={state.selectedPlayers}
              showHeaderButton={true}
              headerButtonHandler={returnToTeamSelect} // Replace with your own function
            />
          </div>
          <div className="ButtonContainer">
            <button onClick={returnToTeamSelect} className="returnButton">
              Return
            </button>
          </div>
        </>
      )}
      {/* Stage: Compare */}
      {state.stage === "compare" && (
        <TradeValueComparison comparisonFunction={comparePlayers} />
      )}

      <SelectedPlayers
        headerTitle={"Selected Players"}
        players={state.selectedPlayers}
        totalTradeValue={totalTradeValueForSelectedTeam}
      />

      <SelectedPlayers
        headerTitle={"User Selected Players"}
        players={state.userSelectedPlayers}
        totalTradeValue={totalTradeValueForUserTeam}
      />
    </div>
  );
};

//   <button onClick={() => onSelect(team)}>{team.teamName}</button>
// );

// const PlayerButton = ({
//   player,
//   onSelect,
//   isSelected,
//   playerBelongsToUser,
// }) => (
//   <button
//     onClick={() => onSelect(player)}
//     style={{ backgroundColor: isSelected ? "green" : "grey" }}
//   >
//     {player.name}
//   </button>
// );

export default TradeAnalyzer;

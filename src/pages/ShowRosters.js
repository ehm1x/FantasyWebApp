import React, { useState } from 'react';

function ShowRosters({rosters}) {
    const half = Math.ceil(rosters.length / 2);
    const firstHalf = rosters.slice(0, half);
    const secondHalf = rosters.slice(half);

    const getColorClass = (tradeValue) => {
        if (tradeValue > 75) return 'gold';
        if (tradeValue > 50) return 'purple';
        if (tradeValue > 35) return 'blue';
        if (tradeValue > 15) return 'green';
        return 'red';
    }

    const renderRosters = (rosters) => {
        return rosters.map((roster, rosterIndex) => (
            <div key={`roster-${rosterIndex}`}>
                <h1 className="roster-header">{roster.teamName}</h1>
                {roster.roster
                    .sort((a, b) => b.tradeValue - a.tradeValue)
                    .map((player, playerIndex) => (
                        <Player key={`player-${playerIndex}`} player={player} getColorClass={getColorClass} />
                    ))}
            </div>
        ));
    }

    return (
        <div className="show-rosters">
            <div className="roster-column">{renderRosters(firstHalf)}</div>
            <div className="roster-column">{renderRosters(secondHalf)}</div>
        </div>
    );
}
function Player({ player, getColorClass }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => setIsExpanded(!isExpanded);
  
    return (
        <div className="player-info" onClick={toggleExpanded}>
            <div className="player-header">
                <h3 className={`player-position ${getColorClass(player.tradeValue)}`}>{player.position}</h3>
                <p>{player.name}</p>
            </div>
            {isExpanded && <PlayerDetails player={player} />}
        </div>
    );
}

function PlayerDetails({ player }) {
    return (
        <div className="player-details">
            <h2>Player Info</h2>
            <p><strong>Name:</strong> {player.name}</p>
            <p><strong>Team:</strong> {player.team}</p>
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>Trade Value:</strong> {player.tradeValue.toFixed(2)}</p>
            <p><strong>Projected Total Points:</strong> {player.projTotalPts.toFixed(2)}</p>
            <p><strong>Average Projected Points:</strong> {player.avgProjPts.toFixed(2)}</p>
            <p><strong>Actual Total Points:</strong> {player.actualTotalPts.toFixed(2)}</p>
            <p><strong>Average Actual Points:</strong> {player.avgActualPts.toFixed(2)}</p>
            <p><strong>ADP:</strong> {player.adp}</p>
            <p><strong>Rest of Season Projected Total:</strong> {player.rosProjTotal.toFixed(2)}</p>
            <p><strong>Trade Positional Ranking:</strong> {player.tradePositionalRanking}</p>
            <p><strong>Trade Overall Ranking:</strong> {player.tradeOverallRanking}</p>
            <p><strong>Stats Positional Ranking:</strong> {player.statsPositionalRanking}</p>
            <p><strong>Stats Overall Ranking:</strong> {player.statsOverallRanking}</p>
            <p><strong>Injury Status:</strong> {player.injuryStats}</p>
            {player.injuryStats !== "None" && player.injuryBodyPart !== "None" &&<p><strong>Injury Body Part:</strong> {player.injuryBodyPart}</p>}
        </div>
    );
}

export default ShowRosters;
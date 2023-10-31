import React from "react";

const TeamRankings = ({ rosters }) => {
  console.log(rosters); 

  function teamsByTradeValue(rosters){
    let sortedTeams = [...rosters];
    sortedTeams.sort((a, b) => (a.totalTradeValue < b.totalTradeValue) ? 1 : -1)
    return sortedTeams;
  }
  function teamsByTotalPts(rosters){
    let sortedTeams = [...rosters];
    sortedTeams.sort((a, b) => (a.totalPts < b.totalPts) ? 1 : -1)
    return sortedTeams;
  } 
  function teamsByWeeklyTotal(rosters){
    let sortedTeams = [...rosters];
    sortedTeams.sort((a, b) => (a.totalWeekly < b.totalWeekly) ? 1 : -1)
    return sortedTeams; 
  }

  const getColor = (index) => {
    if (index === 0) {
      return 'bg-yellow-500';
    } else if (index >= 1 && index < 3) {
      return 'bg-purple-500';
    } else if (index >= 3 && index < 6) {
      return 'bg-blue-500';
    } else if (index >= 6 && index < 8) {
      return 'bg-green-500';
    } else {
      return 'bg-red-500';
    }
  }

  return (
    <div className="flex justify-center items-center h-screen text-2xl bg-gray-200">
      <div className="w-1/3 flex flex-col items-center px-4 bg-white rounded-lg shadow-lg m-4">
        <h2 className="mb-4">Teams by Trade Value</h2>
        {teamsByTradeValue(rosters).map((team, index) => (
          <button key={index} className={`w-full mb-2 p-2 text-left rounded text-white flex justify-between ${getColor(index)}`}>
            <span>{index + 1}. {team.teamName}</span>
            <span>{team.totalTradeValue.toFixed(2)}</span>
          </button>
        ))}
      </div>

      <div className="w-1/3 flex flex-col items-center px-4 bg-white rounded-lg shadow-lg m-4">
        <h2 className="mb-4">Teams by Total Points</h2>
        {teamsByTotalPts(rosters).map((team, index) => (
          <button key={index} className={`w-full mb-2 p-2 text-left rounded text-white flex justify-between ${getColor(index)}`}>
            <span>{index + 1}. {team.teamName}</span>
            <span>{team.totalPts.toFixed(2)}</span>
          </button>
        ))}
      </div>

      <div className="w-1/3 flex flex-col items-center px-4 bg-white rounded-lg shadow-lg m-4">
        <h2 className="mb-4">Teams by Weekly Total</h2>
        {teamsByWeeklyTotal(rosters).map((team, index) => (
          <button key={index} className={`w-full mb-2 p-2 text-left rounded text-white flex justify-between ${getColor(index)}`}>
            <span>{index + 1}. {team.teamName}</span>
            <span>{team.totalWeekly.toFixed(2)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TeamRankings;
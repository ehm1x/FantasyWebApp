import React from "react";

const BasicModal = ({ isOpen, setIsOpen, player }) => {
  if (!player) {
    return null;
  }

  const handleClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const colorMap = new Map([
    ["PtsColor", [[25, 18, 13, 10], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["TargetsColor", [[13, 9, 6, 5], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RecColor", [[13, 10, 6, 4], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["TdColor", [[3, 2, 1], ["bg-yellow-500", "bg-purple-500", "bg-green-500", "bg-red-500"]]],
    ["RankColor", [[12, 8, 3, 1], ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-purple-500", "bg-yellow-500"]]],
    ["PassAttColor", [[45, 40, 30, 25], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["PassCompColor", [[30, 25, 20, 15], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["PassYdColor", [[300, 250, 200, 150], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["PassTdColor", [[4, 3, 2, 1], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["QbRushAttColor", [[10, 8, 6, 4], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["QbRushYdColor", [[50, 40, 20, 10], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["QbRushTdColor", [[2, 1], ["bg-yellow-500", "bg-purple-500", "bg-red-500"]]],
    ["QbPtsColor", [[30, 25, 20, 15], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RushYdColor", [[100, 80, 60, 40], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RushAttColor", [[20, 15, 10, 5], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RbReceptionsColor", [[9, 6, 4, 2], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RbTargetColor", [[12, 9, 6, 3], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RecTdColor", [[2, 1], ["bg-yellow-500", "bg-purple-500", "bg-red-500"]]],
    ["WrRecYdColor", [[100, 80, 60, 40], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ]);
    
    function findFunc(funcName, value) {
    const [breakpoints, colors] = colorMap.get(funcName);
    return findColor(value, breakpoints, colors);
    }

  function findColor(value, breakpoints, colors) {
    for (let i = 0; i < breakpoints.length; i++) {
      if (value >= breakpoints[i]) {
        return colors[i];
      }
    }
    return colors[colors.length - 1] || "";
  }

  

  const QBStatsTable = ({ player }) => {
    if(!player) return <p>Player info not found sad</p>
    return (
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/10 px-4 py-2">Week</th>
            <th className="w-1/10 px-4 py-2">Rank</th>
            <th className="w-1/10 px-4 py-2">Pass ATT</th>
            <th className="w-1/10 px-4 py-2">Comp</th>
            <th className="w-1/10 px-4 py-2">Pass YD</th>
            <th className="w-1/10 px-4 py-2">TD Pass</th>
            <th className="w-1/10 px-4 py-2">Rush TD</th>
            <th className="w-1/10 px-4 py-2">Rush ATT</th>
            <th className="w-1/10 px-4 py-2">Rush YD</th>
            <th className="w-1/10 px-4 py-2">PPR Pts</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(player.weeklyStats).map(([week, weekData], index) => {
            // If weekData or weekData.stats is null or undefined, return null
            if (!weekData || !weekData.stats) {
              return null;
            }

            const ptsPpr = weekData.stats.pts_ppr + weekData.stats.pass_td * 2 || 0;
            const posRank = weekData.stats.pos_rank_ppr || 99;
            const passAtt = weekData.stats.pass_att || 0;
            const passComp = weekData.stats.pass_cmp || 0;
            const passTd = weekData.stats.pass_td || 0;
            const passYd = weekData.stats.pass_yd || 0;
            const rushAtt = weekData.stats.rush_att || 0;
            const rushYd = weekData.stats.rush_yd || 0;
            const rushTd = weekData.stats.rush_td || 0;

            return (
              <tr>
                <td className="border px-4 py-2">{week}</td>
            
                <td className={`border px-4 py-2 ${findFunc("RankColor", posRank)} bg-opacity-50`}>
                  {posRank}  
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("PassAttColor", passAtt)} bg-opacity-50`}>
                  {passAtt}
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("PassCompColor", passComp)} bg-opacity-50`}>
                   {passComp}
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("PassYdColor", passYd)} bg-opacity-50`}>
                  {passYd}
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("PassTdColor", passTd)} bg-opacity-50`}>
                  {passTd}
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("QbRushTdColor", rushTd)} bg-opacity-50`}>
                  {rushTd}
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("QbRushAttColor", rushAtt)} bg-opacity-50`}>
                  {rushAtt}
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("QbRushYdColor", rushYd)} bg-opacity-50`}>
                  {rushYd}  
                </td>
            
                <td className={`border px-4 py-2 ${findFunc("QbPtsColor", ptsPpr)} bg-opacity-50`}>
                  {ptsPpr.toFixed(2)}
                </td>
              
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  };

  const RBStatsTable = ({ player }) => {
    if(!player) return <p>Player info not found sad</p>
    
    return (
      <table className="table-fixed ">
        <thead>
          <tr>
            <th className="w-1/10 px-4 py-2">Week</th>
            <th className="w-1/10 px-4 py-2">Rush Att</th>
            <th className="w-1/10 px-4 py-2">Rush YD</th>
            <th className="w-1/10 px-4 py-2">TD's</th>
            <th className="w-1/10 px-4 py-2">Targets</th>
            <th className="w-1/10 px-4 py-2">Rec</th>
            <th className="w-1/10 px-4 py-2">Rec TD</th>
            <th className="w-1/10 px-4 py-2">Rank</th>
            <th className="w-1/10 px-4 py-2">PPR Pts</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(player.weeklyStats).map(([week, weekData], index) => {
            if (!weekData || !weekData.stats) {
              return null;
            }
  
            let stats = weekData.stats;
            const pts = stats.pts_ppr || 0;
            const rushAtt = stats.rush_att || 0;
            const rushYd = stats.rush_yd || 0;
            const rushTd = stats.rush_td || 0 ;
            const targets = stats.rec_tgt || 0 ;
            const receptions = stats.rec || 0;
            const recTd = stats.rec_td || 0;
            const rank = stats.pos_rank_ppr || 99;
  
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{week}</td>
                <td className={`border px-4 py-2 ${findFunc("RushAttColor", rushAtt)} bg-opacity-50`}>
                  {rushAtt}
                </td>
                <td className={`border px-4 py-2 ${findFunc("RushYdColor", rushYd)} bg-opacity-50`}>
                  {rushYd}
                </td>
                <td className={`border px-4 py-2 ${findFunc("TdColor", rushTd)} bg-opacity-50`}>
                  {rushTd}
                </td>
                <td className={`border px-4 py-2 ${findFunc("TargetsColor", targets)} bg-opacity-50`}>
                  {targets}
                </td>
                <td className={`border px-4 py-2 ${findFunc("RecColor", receptions)} bg-opacity-50`}>
                  {receptions}
                </td>
                <td className={`border px-4 py-2 ${findFunc("RecTdColor", recTd)} bg-opacity-50`}>
                  {recTd}
                </td>
                <td className={`border px-4 py-2 ${findFunc("RankColor", rank)} bg-opacity-50`}>
                  {rank}
                </td>
                <td className={`border px-4 py-2 ${findFunc("PtsColor", pts)} bg-opacity-50`}>
                  {pts}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  
  const renderPlayerStatsTable = (player) => {
    switch (player.position) {
      case "QB":
        return <QBStatsTable player={player} />;
      case "RB":
        return <RBStatsTable player={player} />;
      case "WR":
        return <WRStatsTable player={player} />;
      case "TE":
        return <WRStatsTable player={player} />;
      default:
        return null;
    }
  };

  const WRStatsTable = ({ player }) => {
    if(!player) return <p>Player info not found sad</p>;
    
    return (
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/5 px-4 py-2">Week</th>
            <th className="w-1/5 px-4 py-2">Pts</th>
            <th className="w-1/5 px-4 py-2">Targets</th>
            <th className="w-1/5 px-4 py-2">Rec</th>
            <th className="w-1/5 px-4 py-2">Rec Yards</th>
            <th className="w-1/5 px-4 py-2">TD's</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(player.weeklyStats).map(([week, weekData], index) => {
            if (!weekData || !weekData.stats) {
              return null;
            }
            
            const targets = weekData.stats.rec_tgt || 0;
            const receptions = weekData.stats.rec || 0;
            const recTd = weekData.stats.rec_td || 0;
            const pts = weekData.stats.pts_ppr || 0;
            const recYds = weekData.stats.rec_yd || 0;
            
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{week}</td>
                <td className={`border px-4 py-2 ${findFunc("PtsColor", pts)} bg-opacity-50`}>
                  {pts}
                </td>
                <td className={`border px-4 py-2 ${findFunc("TargetsColor", targets)} bg-opacity-50`}>
                  {targets}
                </td>
                <td className={`border px-4 py-2 ${findFunc("RecColor", receptions)} bg-opacity-50`}>
                  {receptions}
                </td>
                <td className={`border px-4 py-2 ${findFunc("WrRecYdColor", recYds)} bg-opacity-50`}>
                  {recYds}
                </td>
                <td className={`border px-4 py-2 ${findFunc("TdColor", recTd)} bg-opacity-50`}>
                  {recTd}
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  let imgUrl =
    player.position === "DEF"
      ? `https://sleepercdn.com/images/team_logos/nfl/${player.player_id.toLowerCase()}.png`
      : `https://sleepercdn.com/content/nfl/players/${player.player_id}.jpg`;

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto px-10 sm:px-20">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden w-fit shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-fit sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {player.name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Position: {player.position}
                    </p>
                    <p className="text-sm text-gray-500">Team: {player.team}</p>
                    <p className="text-sm text-gray-500">
                      Projected Total Points: {player.projTotalPts}
                    </p>
                    <p className="text-sm text-gray-500">
                      Rest of Season Projected Total:{" "}
                      {player.rosProjTotal ? player.rosProjTotal.toFixed(2) : 0}
                    </p>
                  </div>
                </div>
                <img src={imgUrl} alt={player.name} className="w-24 h-auto" />
              </div>
              <div className="px-4">{renderPlayerStatsTable(player)}</div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={(event) => {
                    handleClose(event);
                    setIsOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BasicModal;

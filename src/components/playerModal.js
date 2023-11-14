import React from "react";

const BasicModal = ({ isOpen, setIsOpen, player }) => {
  if (!player) {
    return null;
  }

  const handleClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  function findPtsColor(pts) {
    let color = "";
    if (pts >= 25) {
      color = "bg-yellow-500";
    } else if (pts >= 18 && pts < 25) {
      color = "bg-purple-500";
    } else if (pts >= 13 && pts < 18) {
      color = "bg-blue-500";
    } else if (pts >= 10 && pts < 13) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findTargetsColor(pts) {
    let color = "";
    if (pts >= 13) {
      color = "bg-yellow-500";
    } else if (pts >= 9 && pts < 13) {
      color = "bg-purple-500";
    } else if (pts >= 6 && pts < 9) {
      color = "bg-blue-500";
    } else if (pts >= 5 && pts < 6) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findRecColor(pts) {
    let color = "";
    if (pts >= 13) {
      color = "bg-yellow-500";
    } else if (pts >= 10 && pts < 13) {
      color = "bg-purple-500";
    } else if (pts >= 6 && pts < 10) {
      color = "bg-blue-500";
    } else if (pts >= 4 && pts < 6) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findTdColor(pts) {
    let color = "";
    if (pts >= 3) {
      color = "bg-yellow-500";
    } else if (pts === 2) {
      color = "bg-purple-500";
    } else if (pts === 1) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findRankColor(rank) {
    let color = "";
    if (rank === 1) {
      color = "bg-yellow-500";
    } else if (rank <= 3 && rank > 1) {
      color = "bg-purple-500";
    } else if (rank <= 8 && rank > 3) {
      color = "bg-blue-500";
    } else if (rank <= 12 && rank > 8) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findPassAttColor(pts) {
    let color = "";
    if (pts >= 45) {
      color = "bg-yellow-500";
    } else if (pts >= 40 && pts < 45) {
      color = "bg-purple-500";
    } else if (pts >= 30 && pts < 40) {
      color = "bg-blue-500";
    } else if (pts >= 25 && pts < 30) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findPassCompColor(pts) {
    let color = "";
    if (pts >= 30) {
      color = "bg-yellow-500";
    } else if (pts >= 25 && pts < 30) {
      color = "bg-purple-500";
    } else if (pts >= 20 && pts < 25) {
      color = "bg-blue-500";
    } else if (pts >= 15 && pts < 20) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findPassYdColor(pts) {
    let color = "";
    if (pts >= 300) {
      color = "bg-yellow-500";
    } else if (pts >= 250 && pts < 300) {
      color = "bg-purple-500";
    } else if (pts >= 200 && pts < 250) {
      color = "bg-blue-500";
    } else if (pts >= 150 && pts < 200) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findPassTdColor(pts) {
    let color = "";
    if (pts >= 4) {
      color = "bg-yellow-500";
    } else if (pts === 3) {
      color = "bg-purple-500";
    } else if (pts === 2) {
      color = "bg-blue-500";
    } else if (pts === 1) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findQbRushAttColor(pts) {
    let color = "";
    if (pts >= 10) {
      color = "bg-yellow-500";
    } else if (pts >= 8 && pts < 10) {
      color = "bg-purple-500";
    } else if (pts >= 6 && pts < 8) {
      color = "bg-blue-500";
    } else if (pts >= 4 && pts < 6) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findQbRushYdColor(pts) {
    let color = "";
    if (pts >= 50) {
      color = "bg-yellow-500";
    } else if (pts >= 40 && pts < 50) {
      color = "bg-purple-500";
    } else if (pts >= 20 && pts < 40) {
      color = "bg-blue-500";
    } else if (pts >= 10 && pts < 20) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findQbRushTdColor(pts) {
    let color = "";
    if (pts >= 2) {
      color = "bg-yellow-500";
    } else if (pts === 1) {
      color = "bg-purple-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findQbPtsColor(pts) {
    let color = "";
    if (pts >= 30) {
      color = "bg-yellow-500";
    } else if (pts >= 25 && pts < 30) {
      color = "bg-purple-500";
    } else if (pts >= 20 && pts < 25) {
      color = "bg-blue-500";
    } else if (pts >= 15 && pts < 20) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findRushYdColor(pts) {
    let color = "";
    if (pts >= 100) {
      color = "bg-yellow-500";
    } else if (pts >= 80 && pts < 100) {
      color = "bg-purple-500";
    } else if (pts >= 60 && pts < 80) {
      color = "bg-blue-500";
    } else if (pts >= 40 && pts < 60) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findRushAttColor(pts) {
    let color = "";
    if (pts >= 20) {
      color = "bg-yellow-500";
    } else if (pts >= 15 && pts < 20) {
      color = "bg-purple-500";
    } else if (pts >= 10 && pts < 15) {
      color = "bg-blue-500";
    } else if (pts >= 5 && pts < 10) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }
  function findRbReceptionsColor(pts) {
    let color = "";
    if (pts >= 9) {
      color = "bg-yellow-500";
    } else if (pts >= 6 && pts < 9) {
      color = "bg-purple-500";
    } else if (pts >= 4 && pts < 6) {
      color = "bg-blue-500";
    } else if (pts >= 2 && pts < 4) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findRbTargetColor(pts) {
    let color = "";
    if (pts >= 12) {
      color = "bg-yellow-500";
    } else if (pts >= 9 && pts < 12) {
      color = "bg-purple-500";
    } else if (pts >= 6 && pts < 9) {
      color = "bg-blue-500";
    } else if (pts >= 3 && pts < 6) {
      color = "bg-green-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  function findRecTdColor(pts) {
    let color = "";
    if (pts >= 2) {
      color = "bg-yellow-500";
    } else if (pts === 1) {
      color = "bg-purple-500";
    } else {
      color = "bg-red-500";
    }
    return color;
  }

  const colorMap = new Map([
    ["PtsColor", [[25, 18, 13, 10], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["TargetsColor", [[13, 9, 6, 5], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["RecColor", [[13, 10, 6, 4], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
    ["TdColor", [[3, 2, 1], ["bg-yellow-500", "bg-purple-500", "bg-green-500", "bg-red-500"]]],
    ["RankColor", [[12, 8, 3, 1], ["bg-yellow-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-red-500"]]],
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
    ["RecTdColor", [[2, 1], ["bg-yellow-500", "bg-purple-500", "bg-red-500"]]]
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

            const ptsPpr =
              weekData.stats.pts_ppr + weekData.stats.pass_td * 2 || 0;
            const posRank = weekData.stats.pos_rank_ppr || 0;
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
            // If weekData or weekData.stats is null or undefined, return null
            if (!weekData || !weekData.stats) {
              return null;
            }

            // I'm assuming these color functions exist and work similarly to the ones provided
            const ptsColor = findPtsColor(weekData.stats.pts_ppr);
            const rushAttColor = findRushAttColor(weekData.stats.rush_att);
            const rushYdColor = findRushYdColor(weekData.stats.rush_yd);
            const tdColor = findTdColor(weekData.stats.rush_td);
            const targetColor = findRbTargetColor(weekData.stats.rec_tgt);
            const receptionsColor = findRbReceptionsColor(weekData.stats.rec);
            const recTdColor = findRecTdColor(weekData.stats.rec_td);
            const rankColor = findRankColor(weekData.stats.pos_rank_ppr);

            return (
              <tr key={index}>
                <td className="border px-4 py-2">{week}</td>
                <td
                  className={`border px-4 py-2 ${rushAttColor} bg-opacity-50`}
                >
                  {weekData.stats.rush_att || 0}
                </td>
                <td className={`border px-4 py-2 ${rushYdColor} bg-opacity-50`}>
                  {weekData.stats.rush_yd || 0}
                </td>
                <td className={`border px-4 py-2 ${tdColor} bg-opacity-50`}>
                  {weekData.stats.rush_td || 0}
                </td>
                <td className={`border px-4 py-2 ${targetColor} bg-opacity-50`}>
                  {weekData.stats.rec_tgt || 0}
                </td>
                <td
                  className={`border px-4 py-2 ${receptionsColor} bg-opacity-50`}
                >
                  {weekData.stats.rec || 0}
                </td>
                <td className={`border px-4 py-2 ${recTdColor} bg-opacity-50`}>
                  {weekData.stats.rec_td || 0}
                </td>
                <td className={`border px-4 py-2 ${rankColor} bg-opacity-50`}>
                  {weekData.stats.pos_rank_ppr || 0}
                </td>
                <td className={`border px-4 py-2 ${ptsColor} bg-opacity-50`}>
                  {weekData.stats.pts_ppr || 0}
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
    if(!player) return <p>Player info not found sad</p>
    return (
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/5 px-4 py-2">Week</th>
            <th className="w-1/5 px-4 py-2">Targets</th>
            <th className="w-1/5 px-4 py-2">Rec</th>
            <th className="w-1/5 px-4 py-2">TD's</th>
            <th className="w-1/5 px-4 py-2">PPR Pts</th>
            {/* add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {Object.entries(player.weeklyStats).map(([week, weekData], index) => {
            // If weekData or weekData.stats is null or undefined, return null
            if (!weekData || !weekData.stats) {
              return null;
            }

            const ptsColor = findPtsColor(weekData.stats.pts_ppr);
            const targetsColor = findTargetsColor(weekData.stats.rec_tgt);
            const recColor = findRecColor(weekData.stats.rec);
            const tdColor = findTdColor(weekData.stats.rec_td);

            return (
              <tr key={index}>
                <td className="border px-4 py-2">{week}</td>
                <td
                  className={`border px-4 py-2 ${targetsColor} bg-opacity-50`}
                >
                  {weekData.stats.rec_tgt || 0}
                </td>
                <td className={`border px-4 py-2 ${recColor} bg-opacity-50`}>
                  {weekData.stats.rec || 0}
                </td>
                <td className={`border px-4 py-2 ${tdColor} bg-opacity-50`}>
                  {weekData.stats.rec_td || 0}
                </td>
                <td className={`border px-4 py-2 ${ptsColor} bg-opacity-50`}>
                  {weekData.stats.pts_ppr || 0}
                </td>
                {/* add more data cells as needed */}
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

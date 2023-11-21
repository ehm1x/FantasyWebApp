import { React, useState } from "react";
import { ColorMapper } from "../utils/ColorMapper";

function PlayerRankings({ rosters }) {
  const [sortField, setSortField] = useState("rank_ppr");
  const [sortPosition, setSortPosition] = useState(null);
  const [sortDirection, setSortDirection] = useState(-1);

  let allPlayers = rosters
    .map((team) => team.roster)
    .reduce((a, b) => a.concat(b), [])
    .filter((player) => player !== null && player.seasonStats);

  const sortedPlayers = [...allPlayers]
    .filter((player) => {
      const hasSortField =
        player.seasonStats.stats[sortField] !== undefined &&
        player.seasonStats.stats[sortField] !== null;
      const matchesPosition = sortPosition
        ? player.position === sortPosition
        : true;
      return hasSortField && matchesPosition;
    })
    .sort((a, b) => {
      const aValue = a.seasonStats.stats[sortField] || 0;
      const bValue = b.seasonStats.stats[sortField] || 0;

      if (Math.abs(aValue - bValue) < Number.EPSILON) {
        return 0;
      } else if (aValue < bValue) {
        return 1 * sortDirection;
      } else {
        return -1 * sortDirection;
      }
    });

  const handleSort = (field) => {
    setSortField(field);
    setSortDirection(sortDirection * -1);
  };

  return (
    <div className="bg-white rounded p-4">
      <h1 className="text-2xl font-bold mb-4">Player Rankings</h1>

      {/* Position buttons */}
      <div className="mb-4">
        {["QB", "WR", "RB", "TE"].map((position) => (
          <button
            className={`px-4 py-2 m-1 ${
              sortPosition === position ? "bg-green-200" : ""
            }`}
            onClick={() =>
              setSortPosition(sortPosition === position ? null : position)
            }
          >
            {position}
          </button>
        ))}
      </div>
      <table className="w-full px-5 text-left">
        {" "}
        {/* Change
       to w-fit soon*/}
        <thead>
          <tr className="border-b">
            <th className="pb-2">Name</th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rank_ppr")}
            >
              Rank
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pts_ppr")}
            >
              Season Total
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pts_ppr")}
            >
              Weekly Average
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rec_tgt")}
            >
              Targets
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rec")}
            >
              Receptions
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rec_yd")}
            >
              Receiving Yards
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rec_td")}
            >
              Rec TD's
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rush_att")}
            >
              Rush Att
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rush_yd")}
            >
              Rush Yd's
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("rush_td")}
            >
              Rush TD's
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pass_att")}
            >
              Pass Att
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pass_cmp")}
            >
              Pass Comp
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pass_yd")}
            >
              Pass YD's
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pass_td")}
            >
              Pass TD
            </th>
            <th
              className="pb-2 pr-5 cursor-pointer"
              onClick={() => handleSort("pass_int")}
            >
              INT
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player) => (
            <tr
              key={player.name}
              className="border-b border-white hover:bg-gray-50"
            >
              <td
                className={`pl-2 py-2 border-r border-white ${ColorMapper.findFunc(
                  "SeasonRankColor",
                  player.seasonStats?.stats?.rank_ppr ?? 99,
                  1
                )}`}
              >
                {player.name}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "SeasonRankColor",
                  player.seasonStats?.stats?.rank_ppr ?? 99,
                  1
                )}`}
              >
                {player.seasonStats?.stats?.rank_ppr ?? 99}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "SeasonAvgColor",
                  player.actualTotalPts / player.activeWeeks
                )}`}
              >
                {player.actualTotalPts}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "SeasonAvgColor",
                  player.avgActualPts
                )}`}
              >
                {player.avgActualPts.toFixed(2)}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "TargetsColor",
                  player.seasonStats?.stats?.rec_tgt / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.rec_tgt ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "RecColor",
                  player.seasonStats?.stats?.rec / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.rec ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "WrRecYdColor",
                  player.seasonStats?.stats?.rec_yd / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.rec_yd ?? 0}
              </td>
              <td
                className={ColorMapper.findFunc(
                  "SeasonTdsColor",
                  player.seasonStats?.stats?.rec_td ?? 0
                )}
              >
                {player.seasonStats?.stats?.rec_td ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "RushAttColor",
                  player.seasonStats?.stats?.rush_att / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.rush_att ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "RushYdColor",
                  player.seasonStats?.stats?.rush_yd / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.rush_yd ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "RushTdColor",
                  player.seasonStats?.stats?.rush_td / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.rush_td ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "PassAttColor",
                  player.seasonStats?.stats?.pass_att / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.pass_att ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "PassCmpColor",
                  player.seasonStats?.stats?.pass_cmp / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.pass_cmp ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "PassYdColor",
                  player.seasonStats?.stats?.pass_yd / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.pass_yd ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "PassTdColor",
                  player.seasonStats?.stats?.pass_td / player.activeWeeks ?? 0
                )}`}
              >
                {player.seasonStats?.stats?.pass_td ?? 0}
              </td>
              <td
                className={`pl-2 border-r border-white ${ColorMapper.findFunc(
                  "SeasonIntColor",
                  player.seasonStats?.stats?.pass_int / player.activeWeeks ?? 0, 
                  
                )}`}
              >
                {player.seasonStats?.stats?.pass_int ?? 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerRankings;

// PtsColor: [25, 18, 13, 10],
// TargetsColor: [13, 9, 6, 5],
// RecColor: [13, 10, 6, 4],
// TdColor: [3, 2, 1],
// RankColor: [2,3,8,12],
// PassAttColor: [45, 40, 30, 25],
// PassCompColor: [30, 25, 20, 15],
// PassYdColor: [300, 250, 200, 150],
// PassTdColor: [4, 3, 2, 1],
// QbRushAttColor: [10, 8, 6, 4],
// QbRushYdColor: [50, 40, 20, 10],
// QbRushTdColor: [2, 1],
// QbPtsColor: [30, 25, 20, 15],
// RushYdColor: [100, 80, 60, 40],
// RushAttColor: [20, 15, 10, 5],
// RbReceptionsColor: [9, 6, 4, 2],
// RbTargetColor: [12, 9, 6, 3],
// RecTdColor: [2, 1],
// WrRecYdColor: [100, 80, 60, 40],
// SeasonRankColor:[5,20,45,70],
// SeasonAvgColor:[20,15,10,5],
// SeasonTdsColor:[8,5,3,1],

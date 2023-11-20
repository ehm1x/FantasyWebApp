import { React, useState } from "react";
import { ColorMapper } from "../utils/ColorMapper";

function PlayerRankings({ rosters }) {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);

  let allPlayers = rosters
    .map((team) => team.roster)
    .reduce((a, b) => a.concat(b), [])
    .filter((player) => player !== null && player.seasonStats);

  const sortedPlayers = [...allPlayers].sort((a, b) => {
    if (a.seasonStats.stats[sortField] < b.seasonStats.stats[sortField]) {
        return 1 * sortDirection;
    } else if (a.seasonStats.stats[sortField] > b.seasonStats.stats[sortField]) {
        return -1 * sortDirection;
    } else {
        return 0;
    }
  });

  const handleSort = (field) => {
    setSortField(field);
    setSortDirection(sortDirection * -1);
  };

  return (
    <div className="bg-white rounded p-4">
      <h1 className="text-2xl font-bold mb-4">Player Rankings</h1>
      <table className="w-fit px-5 text-left"> {/* Change
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
          </tr>
        </thead>
        <tbody>
  {sortedPlayers.map((player) => (
    <tr key={player.name} className="border-b border-white hover:bg-gray-50">
      <td className={`pl-2 py-2 border-r border-white ${ColorMapper.findFunc('RankColor', player.seasonStats?.stats?.rank_ppr ?? 99, 1)}`}>{player.name}</td>
      <td className={`pl-2 border-r border-white ${ColorMapper.findFunc('RankColor', player.seasonStats?.stats?.rank_ppr ?? 99)}`}>{player.seasonStats?.stats?.rank_ppr ?? 99}</td>
      <td className={`pl-2 border-r border-white ${ColorMapper.findFunc('PtsColor', player.actualTotalPts)}`}>{player.actualTotalPts}</td>
      <td className={`pl-2 border-r border-white ${ColorMapper.findFunc('PtsColor', player.avgActualPts)}`}>{player.avgActualPts.toFixed(2)}</td>
      <td className={`pl-2 border-r border-white ${ColorMapper.findFunc('TargetsColor', player.seasonStats?.stats?.rec_tgt ?? 0)}`}>{player.seasonStats?.stats?.rec_tgt ?? 0}</td>
      <td className={`pl-2 border-r border-white ${ColorMapper.findFunc('RecColor', player.seasonStats?.stats?.rec ?? 0)}`}>{player.seasonStats?.stats?.rec ?? 0}</td>
      <td className={`pl-2 border-r border-white ${ColorMapper.findFunc('RecYdColor', player.seasonStats?.stats?.rec_yd ?? 0)}`}>{player.seasonStats?.stats?.rec_yd ?? 0}</td>
      <td className={ColorMapper.findFunc('TdColor', player.seasonStats?.stats?.rec_td ?? 0)}>{player.seasonStats?.stats?.rec_td ?? 0}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default PlayerRankings;
import { React, useState } from "react";

function PlayerRankings({ rosters }) {
  const [sortField, setSortField] = useState(null);
  let allPlayers = rosters
    .map((team) => team.roster)
    .reduce((a, b) => a.concat(b), [])
    .filter((player) => player !== null && player.seasonStats);
  console.log(allPlayers);
  const sortedPlayers = [...allPlayers].sort((a, b) => {
      return a.seasonStats.stats[sortField] < b.seasonStats.stats[sortField]
        ? 1
        : -1;
  });

  return (
    <div className="bg-white rounded p-4">
      <h1 className="text-2xl font-bold mb-4">Player Rankings</h1>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Name</th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("pos_rank_ppr")}
            >
              Rank
            </th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("pts_ppr")}
            >
              Season Total
            </th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("pts_ppr")}
            >
              Weekly Average
            </th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("rec_tgt")}
            >
              Targets
            </th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("rec")}
            >
              Receptions
            </th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("rec_yd")}
            >
              Recieving Yards
            </th>
            <th
              className="pb-2 cursor-pointer"
              onClick={() => setSortField("rec_td")}
            >
              Rec TD's
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player) => (
            <tr key={player.name} className="hover:bg-gray-50">
              <td className="py-2">{player.name}</td>
              <td>{player.seasonStats?.stats?.pos_rank_ppr ?? 99}</td>
              <td>{player.actualTotalPts}</td>
              <td>{player.avgActualPts.toFixed(2)}</td>
              <td>{player.seasonStats?.stats?.rec_tgt ?? 0}</td>
              <td>{player.seasonStats?.stats?.rec ?? 0}</td>
              <td>{player.seasonStats?.stats?.rec_yd ?? 0}</td>
              <td>{player.seasonStats?.stats.rec_td ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerRankings;

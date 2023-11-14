
import React from 'react';

function PlayerRankings({ rosters }) {
const [sortField, setSortField] = useState(null);
let allPlayers = rosters.map(team => team.roster).reduce((a, b) => a.concat(b), []);

const sortedPlayers = [...allPlayers].sort((a,b) => {
  if(sortField === null) return 0;
  return a[sortedField] > b[sortedField] ? 1 : -1;
 })


  return (
    <div className='bg-white rounded'>
      <h1>Player Rankings</h1>
      <table>
        <thead>
          <tr>
          <th onClick={() => setSortField("name")}>Season Total</th>
          <th onClick={() => setSortField("points")}>ROS Projected</th>
          <th onClick={() => setSortField("Weekly Average")}>Weekly Average</th>
          <th onClick={() => setSortField("Targets")}>Targets</th>
          <th onClick={() => setSortField("Receptions")}>Receptions</th>
          <th onClick={() => setSortField("Rec TD's")}>Rec TD's</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player) => (
            <tr key={player.name}>
              <td>{player.actualTotalPts}</td>
              <td>{player.avgActualPts}</td>
              <td>{player.seasonStats?.stats?.rec_tgt ?? 0}</td>
              <td>{player.seasonStats?.stats?.rec ?? 0}</td>
              <td className={``}>{player.seasonStats?.stats.rec_td ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerRankings;

export default function LeagueSelection({
  leagues,
  handleLeagueChange,
  handleLeagueConfirm,
}) {
  return (
    <>
      {leagues && leagues.length > 0 && (
        <div className="league-selection-container">
          <label htmlFor="leagues" className="league-label">
            Select a League:
          </label>
          <select onChange={handleLeagueChange} className="league-select">
            {leagues.map((league) => (
              <option key={league.league_id} value={league.league_id}>
                {league.name}
              </option>
            ))}
          </select>
          <button onClick={handleLeagueConfirm} className="league-button">
            Confirm League
          </button>
        </div>
      )}
    </>
  );
}
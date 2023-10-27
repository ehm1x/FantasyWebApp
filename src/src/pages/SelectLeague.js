export default function LeagueSelection({
  leagues,
  handleLeagueChange,
  handleLeagueConfirm,
}) {
  return (
    <>
      {leagues && leagues.length > 0 && (
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="leagues" className="text-lg font-bold">
            Select a League:
          </label>
          <select onChange={handleLeagueChange} className="p-2 border-2 border-gray-300 rounded w-64">
            {leagues.map((league) => (
              <option key={league.league_id} value={league.league_id}>
                {league.name}
              </option>
            ))}
          </select>
          <button onClick={handleLeagueConfirm} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Confirm League
          </button>
        </div>
      )}
    </>
  );
}
import LeagueSelection from "../components/SelectLeague";
import { NavLink, Outlet } from "react-router-dom";

export default function Home({
  inputUsername,
  handleUsernameChange,
  handleConfirmUser,
  username,
  leagues,
  handleLeagueChange,
  handleLeagueConfirm,
  confirmedLeague,
  selectedLeague,
  setSelectedLeague,
  setConfirmedLeague,
  setRosters,
}) {

  const refreshUserLeagues = () => {
    console.log('getting called');
    setSelectedLeague(null);
    setConfirmedLeague(null);
    setRosters(null);
  };


  return (
    <div className="home flex flex-col items-center justify-top h-screen bg-gray-100 text-gray-800">
      {username ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Welcome, {username}</h2>
          {!confirmedLeague && (
            <LeagueSelection
              leagues={leagues}
              handleLeagueChange={handleLeagueChange}
              handleLeagueConfirm={handleLeagueConfirm}
            />
          )}
          {confirmedLeague && (
            <>
              <h2 className="text-xl mb-2">Current League : {selectedLeague.name}</h2>
              <nav>
                <div className="flex space-x-4">
                  <NavLink to="/show-rosters" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                    Show Rosters
                  </NavLink>
                  <NavLink to="/trade-analyzer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                    Trade Analyzer
                  </NavLink>
                  <button onClick={refreshUserLeagues} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Change League
          </button>
                </div>
              </nav>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome</h1>
          <div className="flex items-center mb-6">
            <input
              type="text"
              value={inputUsername}
              onChange={handleUsernameChange}
              className="username-input p-2 border-2 border-gray-300 rounded mr-4"
              placeholder="Username"
            />
            <button onClick={handleConfirmUser} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Confirm</button>
          </div>
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}




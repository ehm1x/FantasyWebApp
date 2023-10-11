import LeagueSelection from "./SelectLeague";
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
  rosters,
  userData,
}) {
  return (
    <div className="home">
      {username ? (
        <>
          <h2>Welcome, {username}</h2>
          {!confirmedLeague && (
            <LeagueSelection
              leagues={leagues}
              handleLeagueChange={handleLeagueChange}
              handleLeagueConfirm={handleLeagueConfirm}
            />
          )}
          {confirmedLeague && (
            <>
              <h2>Current League : {selectedLeague.name}</h2>
              <nav>
                <div className="nav-buttons">
                  <NavLink to="/show-rosters" className="nav-button">
                    Show Rosters
                  </NavLink>
                  <NavLink to="/trade-analyzer" className="nav-button">
                    Trade Analyzer
                  </NavLink>
                </div>
              </nav>
            </>
          )}
        </>
      ) : (
        <>
          <h1>Welcome</h1>
          <div className="input-group">
            <input
              type="text"
              value={inputUsername}
              onChange={handleUsernameChange}
              className="username-input"
              placeholder="Username"
            />
            <button onClick={handleConfirmUser}>Confirm</button>
          </div>
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}

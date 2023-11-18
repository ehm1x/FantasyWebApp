import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ShowRosters from "./pages/ShowRosters";
import TradeAnalyzer from "./pages/TradeAnalyzer";

import { useUser, useLeague } from './hooks';
import TeamRankings from "./pages/teamrankings";
import PlayerRankings from "./pages/PlayerRankings";

const App = () => {
  const { username, handleUsernameChange, handleConfirmUser,  userData } = useUser();
  
  const { selectedLeague, handleLeagueChange, handleLeagueConfirm, rosters, leagues, confirmedLeague, setSelectedLeague, setConfirmedLeague, 
  setRosters} = useLeague(userData);

  const HomeComponent = (
    <Home
      handleUsernameChange={handleUsernameChange}
      handleConfirmUser={handleConfirmUser}
      username={username}
      leagues={leagues}
      handleLeagueChange={handleLeagueChange}
      handleLeagueConfirm={handleLeagueConfirm}
      selectedLeague={selectedLeague}
      rosters={rosters}
      userData={userData}
      confirmedLeague={confirmedLeague}
      setSelectedLeague={setSelectedLeague}
      setConfirmedLeague={setConfirmedLeague}
      setRosters={setRosters}
    />
  );


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout userData = {userData} />}>
        <Route index element={HomeComponent} />
        <Route path="show-rosters" element={ confirmedLeague && rosters ? <ShowRosters rosters = {rosters}/> : HomeComponent} /> 
        <Route path="trade-analyzer" element={ confirmedLeague && rosters ? <TradeAnalyzer rosters = {rosters} currentOwnerId={userData.user_id}/> : HomeComponent} />
        <Route path="team-rankings" element={ confirmedLeague && rosters ? <TeamRankings rosters = {rosters}/> : HomeComponent}/> 
        <Route path="player-rankings" element={ confirmedLeague && rosters ? <PlayerRankings rosters = {rosters}/> : HomeComponent}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
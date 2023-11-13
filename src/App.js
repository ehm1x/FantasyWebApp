import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import "./index.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShowRosters from "./pages/ShowRosters";
import TradeAnalyzer from "./pages/TradeAnalyzer";

import { useUser, useLeague } from './hooks';
import TeamRankings from "./pages/teamrankings";

const App = () => {
  const { username, handleUsernameChange, handleConfirmUser, userData } = useUser();
  const { selectedLeague, handleLeagueChange, handleLeagueConfirm, rosters, leagues, confirmedLeague } = useLeague(userData);
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
    />
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout userData = {userData} />}>
        <Route index element={HomeComponent} />
        <Route path="about" element={<About />} />
        <Route path="show-rosters" element={rosters ? <ShowRosters rosters = {rosters}/>: HomeComponent} /> 
        <Route path="trade-analyzer" element={ rosters ? <TradeAnalyzer rosters = {rosters} currentOwnerId={userData.user_id}/> : HomeComponent} />
        <Route path="team-rankings" element={ rosters ? <TeamRankings rosters = {rosters}/> : HomeComponent}/> 
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
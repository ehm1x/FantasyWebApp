import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from "react-router-dom";

import "./app.css";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShowRosters from "./pages/ShowRosters";
import TradeAnalyzer from "./pages/TradeAnalyzer";

import { useUser, useLeague } from './hooks';
import { Team, getPlayerData } from './hooks';
import LeagueSelection from "./pages/SelectLeague";

const App = () => {
  const { username, handleUsernameChange, handleConfirmUser, userData } = useUser();
  const { selectedLeague, handleLeagueChange, handleLeagueConfirm, rosters, leagues, confirmedLeague } = useLeague(userData);

  // Define the Home component with all its props
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
        <Route path="trade-analyzer" element={ userData ? <TradeAnalyzer rosters = {rosters} currentOwnerId={userData.user_id}/> : HomeComponent} />
        <Route path="expert-picks" element={<h1> Coming Soon! </h1>} /> 
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./app.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShowRosters from "./pages/ShowRosters";
import TradeAnalyzer from "./pages/TradeAnalyzer";

import { useUser, useLeague } from './hooks';
import { Team, getPlayerData } from './hooks';

const App = () => {
  const { username, handleUsernameChange, handleConfirmUser, userData } = useUser();
  const { selectedLeague, handleLeagueChange, handleLeagueConfirm, rosters, leagues, confirmedLeague } = useLeague(userData);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element= {
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
          }
        />
        <Route path="about" element={<About />} />
        <Route path="show-rosters" element={<ShowRosters rosters = {rosters}/>} /> 
        <Route path="trade-analyzer" element={ userData ? <TradeAnalyzer rosters = {rosters} currentOwnerId={userData.user_id}/> : <p>Loading...</p>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
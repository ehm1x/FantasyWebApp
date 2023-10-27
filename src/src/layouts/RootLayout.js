import { React, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "C:\\FantasyFolder\\reactrebuild\\src\\2.svg";

export default function RootLayout({ userData }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <div className="root-layout">
      <header>
        <nav className="flex justify-between items-center bg-blue-900 p-4 h-16 font-poppins">
          <div className="flex justify-start items-center space-x-4 pl-2">
            <NavLink to="/">
              <img src={logo} alt="Touchdown Tactics" className="h-auto w-20" />
            </NavLink>
            <div className="pl-5 space-x-4">
              <NavLink
                to="/trade-analyzer"
                className="text-white text-sm hover:text-blue-300 font-medium"
                activeClassName="font-bold"
              >
                Trade Analyzer
              </NavLink>
              <NavLink
                to="/show-rosters"
                className="text-white text-sm hover:text-blue-300 "
                activeClassName="font-bold"
              >
                Show Rosters
              </NavLink>
              <NavLink
                to="/expert-picks"
                className="text-white text-sm hover:text-blue-300 "
                activeClassName="font-bold"
              >
                Expert Picks
              </NavLink>
            </div>
          </div>

          {userData && userData.avatar ? (
            <button
              className="relative inline-block"
              onClick={() => setIsOverlayOpen(!isOverlayOpen)}
            >
              <img
                className="h-12 w-12 rounded-full"
                src={`https://sleepercdn.com/avatars/thumbs/${userData.avatar}`}
                alt="User Avatar"
              />
              {isOverlayOpen && (
                <div className="absolute bg-white p-4 rounded shadow-lg right-0 mr-4">
                  {userData.username}
                </div>
              )}
            </button>
          ) : (
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className="text-white bg-blue-700 hover:bg-blue-500 py-1 px-4 rounded"
                activeClassName="font-bold"
              >
                Log In
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
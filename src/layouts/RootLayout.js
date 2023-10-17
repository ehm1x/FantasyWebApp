import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "C:\\FantasyFolder\\reactrebuild\\src\\2.svg"; // Update to the correct relative path

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="flex justify-between items-center bg-blue-900 p-4 h-16 font-poppins">
          <div className="flex justify-start items-center space-x-4">
            <NavLink to="/">
              <img src={logo} alt="Touchdown Tactics" className="h-auto w-20" />
            </NavLink>
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
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className="text-white hover:text-blue-300"
              activeClassName="font-bold"
            >
              Log In 
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-blue-300"
              activeClassName="font-bold"
            >
              Sign Up
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

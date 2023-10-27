// hooks.js
import { useState, useEffect } from "react";

// Define your API_BASE outside the hook
const API_BASE = "https://api.sleeper.app/v1";

export function useUser() {
  const [username, setUsername] = useState(null);
  const [inputUsername, setInputUsername] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) fetchUserData(username);
  }, [username]);

  const fetchUserData = async (username) => {
    const userDataResponse = await fetch(`${API_BASE}/user/${username}`);
    const userData = await userDataResponse.json();
    setUserData(userData);
  };

  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value);
  };

  const handleConfirmUser = () => {
    setUsername(inputUsername);
  };

  return { username, handleUsernameChange, handleConfirmUser, userData };
}

export function useLeague(userData) {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [confirmedLeague, setConfirmedLeague] = useState(false);


    useEffect(() => {
      if (userData && userData.user_id) fetchUserLeagues(userData.user_id);
    }, [userData]);

  
  useEffect(() => {
    if (confirmedLeague) fetchLeagueDetails(selectedLeague.league_id);
  }, [confirmedLeague]);

  const fetchUserLeagues = async (userId) => {
    const response = await fetch(
      `${API_BASE}/user/${userId}/leagues/nfl/2023`
    );
    const data = await response.json();
    setLeagues(data);
  
    // Set the first league as the default selected league
    if (data && data.length > 0) {
      setSelectedLeague(data[0]);
    }
  };

  const fetchLeagueDetails = async (leagueId) => {
    const leagueUsersResponse = await fetch(
      `${API_BASE}/league/${leagueId}/users`
    );
    const leagueUsers = await leagueUsersResponse.json();
    
    const leagueTeamsResponse = await fetch(
      `${API_BASE}/league/${leagueId}/rosters`
    );
    const leagueTeams = await leagueTeamsResponse.json();

    const rosters = await constructTeams(leagueUsers, leagueTeams);
    setRosters(rosters);
  };

  const constructTeams = async (leagueUsers, leagueTeams) => {
    if (!leagueUsers || !leagueTeams) {
      console.error("ERROR LEAGUE UERS OR LEAGUE TEAMS IS NULL OR UNDEFINED");
      return;
    }
    const teams = leagueUsers.map(async (userTeam) => {
      const team = new Team(userTeam.display_name, userTeam.user_id, userTeam.avatar);
      const roster = leagueTeams.find(
        (roster) => roster.owner_id === userTeam.user_id
      );
      let errorOccurred = false;

      if (!Array.isArray(roster.players)) {
        console.error(`Error: roster for team ${team.teamName} is not an array`);
        return;
      }

      for (const newPlayer of roster.players) {
        console.log(newPlayer)
        let player = await getPlayerData(newPlayer);
        if (!player) {
          console.log(`Error: player ${newPlayer} not found for team ${team.teamName}`);
          errorOccurred = true;
          break;
        } else {
          team.roster.push(player);
          console.log(`added player ${player.name} to team ${team.teamName}`)
        }
      }

      if (errorOccurred) {
        console.error(`Error occurred while constructing team ${team.teamName}`);
        return;
      }
      
      return team;
    });

    return Promise.all(teams);
  };

  const handleLeagueChange = (event) => {
    const leagueId = event.target.value;
    const selectedLeague = leagues.find(
      (league) => league.league_id === leagueId
    );
    setSelectedLeague(selectedLeague);
  };

  const handleLeagueConfirm = () => {
    setConfirmedLeague(true);
  };

  return { selectedLeague, handleLeagueChange, handleLeagueConfirm, rosters, leagues, confirmedLeague };
}



class Team {
    constructor(tName, owner) {
      this.teamName = tName || "";
      this.owner_id = owner;
      this.avatar_id = 0; 
      this.roster = [];
      this.totalPts = 0;
      this.totalWeekly = 0;
      this.totalTradeValue = 0;
    }
  }


  async function getPlayerData(playerId) {
    try {
      const response = await fetch(`http://localhost:8080/api/nfl/player/${playerId}`);
      const playerData = await response.json();
  
      if (playerData.err) {
        console.error(`Error from server when fetching player ${playerId}: `, playerData.err);
        throw new Error(playerData.err);
      } else {
        console.log(`Fetched data for player ${playerId}: `, playerData);
        return playerData;
      }
    } catch (error) {
      console.error(`Error fetching data for player ${playerId}: `, error);
      throw error;
    }
  }
import { useState } from "react";
import CsvDownloader from "react-csv-downloader";
import Popup from "./Popup";


const IplTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [teamsData, setTeamsData] = useState([
    { team: 'Mumbai Indians', played: 14, won: 9, lost: 5, points: 18 },
    { team: 'Delhi Capitals', played: 14, won: 8, lost: 6, points: 16 },
    { team: 'Sunrisers Hyderabad', played: 14, won: 7, lost: 7, points: 14 },
    { team: 'Royal Challengers Bangalore', played: 14, won: 7, lost: 7, points: 14 },
    { team: 'Kolkata Knight Riders', played: 14, won: 7, lost: 7, points: 14 },
    { team: 'Kings XI Punjab', played: 14, won: 6, lost: 8, points: 12 },
    { team: 'Rajasthan Royals', played: 14, won: 6, lost: 8, points: 12 },
    { team: 'Chennai Super Kings', played: 14, won: 6, lost: 8, points: 12 },
  ]);

  const columns = [
    { id: 'team', displayName: 'Team' },
    { id: 'played', displayName: 'Played' },
    { id: 'won', displayName: 'Won' },
    { id: 'lost', displayName: 'Lost' },
    { id: 'points', displayName: 'Points' },
  ];  

  const handlePopup = (teamData, mode) => {
    setTeamData(teamData);
    setEditMode(mode);
    setPopupOpen(true);
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  const updateTeamData = (updatedTeam) => {
    console.log(updatedTeam);
    const updatedTeams = teamsData.map((team) => 
      team.team === updatedTeam.team ? updatedTeam : team
    );
    setTeamsData(updatedTeams);
    setTimeout(() => {
      console.log(teamsData);
      console.log(updatedTeams);
    }, 1000);
   
  }

  const deleteTeamData = (teamName) => {
    const filteredTeams = teamsData.filter((team) => team.team !== teamName);
    setTeamsData(filteredTeams);
  }

  return (
    <div className="table">
      <table className="mb-24 table-auto w-full">
        <thead>
          <tr className="bg-red-300">
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Played</th>
            <th className="px-4 py-2">Won</th>
            <th className="px-4 py-2">Lost</th>
            <th className="px-4 py-2">Points</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((teamData, index) => (
            <tr key={index} className="cursor-pointer">
              <td className="border px-4 py-2" onClick={() => handlePopup(teamData, false)}>{teamData.team}</td>
              <td className="border px-4 py-2">{teamData.played}</td>
              <td className="border px-4 py-2">{teamData.won}</td>
              <td className="border px-4 py-2">{teamData.lost}</td>
              <td className="border px-4 py-2">{teamData.points}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handlePopup(teamData, true)}>Edit</button> /
                <button onClick={() => deleteTeamData(teamData.team)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupOpen && 
        <Popup 
          data={teamData} 
          handlePopup={closePopup} 
          editMode={editMode} 
          updateTeamData={updateTeamData} 
        />
      }

      <CsvDownloader 
        datas={teamsData}
        columns={columns}
        text="Export CSV"
        filename={`teamsData_${new Date().toISOString()}`}
        extension=".csv"
        className="bg-blue-600 rounded-lg p-2"
      />
    </div>
  )
}

export default IplTable;

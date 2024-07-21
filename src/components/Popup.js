import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Popup = ({ data, handlePopup, editMode, updateTeamData }) => {
  
  const [teamData, setTeamData] = useState(data);

  useEffect(() => {
    setTeamData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateTeamData(teamData);
    handlePopup();
  };

  return (
    <>
      <Dialog open={true} handler={handlePopup}>

        <DialogHeader>{editMode ? "Edit Team Details" : "Team Details"}</DialogHeader>

        <DialogBody>

          {editMode ? (
            <>
              <label>
                Team: 
                <input type="text" name="team" value={teamData.team} onChange={handleChange} readOnly />
              </label>

              <label>
                Played: 
                <input type="number" name="played" value={teamData.played} onChange={handleChange} />
              </label>

              <label>
                Won: 
                <input type="number" name="won" value={teamData.won} onChange={handleChange} />
              </label>

              <label>
                Lost: 
                <input type="number" name="lost" value={teamData.lost} onChange={handleChange} />
              </label>

              <label>
                Points: 
                <input type="number" name="points" value={teamData.points} onChange={handleChange} />
              </label>

            </>

          ) : (

            <>
              <p><strong>Team:</strong> {teamData.team}</p>
              <p><strong>Played:</strong> {teamData.played}</p>
              <p><strong>Won:</strong> {teamData.won}</p>
              <p><strong>Lost:</strong> {teamData.lost}</p>
              <p><strong>Points:</strong> {teamData.points}</p>
            </>
          )}

        </DialogBody>

        <DialogFooter>

          <Button variant="text" color="red" onClick={handlePopup} className="mr-1">
            <span>Cancel</span>
          </Button>

          {editMode && (
            <Button variant="gradient" color="green" onClick={handleSave}>
              <span>Save</span>
            </Button>
          )}

        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Popup;

import React from 'react';
import { ITeam } from '../../models/ITeam'; // adjust the path as necessary

interface TeamProps {
  team: ITeam;
}

function ScoreCircle({ team }: TeamProps) {
  return (
    <div className='row shadow p-4'>
      <div
        style={{
          display: 'flex',
          flexDirection: team.name === 'TeamA' ? 'row' : 'row-reverse', // reverse for orange team
          justifyContent: 'flex-start'
        }}
      >
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            style={{
              margin: "2px",
              height: "40px",
              width: "40px",
              borderRadius: "40px",
              border: team.name === 'TeamA' ? "1px solid steelblue" : "1px solid orange",
              backgroundColor: i < team.score ? (team.name === 'TeamA' ? "steelblue" : "orange") : "transparent"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ScoreCircle;

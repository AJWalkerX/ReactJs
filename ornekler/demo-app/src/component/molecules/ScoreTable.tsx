import React from 'react';
import ScoreCircle from '../atoms/ScoreCircle';
import { ITeam } from '../../models/ITeam';

interface ScoreTableProps {
  teams: ITeam[];
}

function ScoreTable({ teams }: ScoreTableProps) {
  return (
    <>
      {teams.map((team, index) => (
        <ScoreCircle key={index} team={team} />
      ))}
    </>
  );
}

export default ScoreTable;

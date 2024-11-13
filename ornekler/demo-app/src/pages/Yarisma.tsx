import React, { useState } from 'react'
import TeamCard from '../component/molecules/TeamCard'
import ScoreTable from '../component/molecules/ScoreTable'
import teamScore from '../utils/teamScore.json'

function Yarisma() {
    const [teamList, setTeamList] = useState(teamScore)
    let randomNumber = Math.floor(Math.random() * 100);
    const updateTeamScore = (teamName : string) => {
        setTeamList((prevList) =>
            prevList.map((team) =>
                team.name === teamName ? { ...team, score: team.score + 1 } : team
            )
        );
        if (teamList[0].score === 14 || teamList[1].score === 14) {
            alert(teamName + " Kazandı");
        }
    }; 
  return (
    <div className='container-fluid'>
        <div className='row mt-4'>
            <div className="col-3">
                <TeamCard team={teamList[0]} randomNumber = { randomNumber} updateTeamScore={updateTeamScore}/>
            </div>
            <div className="col-6 align-content-around d-flex flex-wrap">
                <ScoreTable teams={teamList}/>
            </div>
            <div className="col-3">
                <TeamCard team={teamList[1]} randomNumber = { randomNumber} updateTeamScore={updateTeamScore}/>
            </div>
        </div>
    </div>
  )
}

export default Yarisma
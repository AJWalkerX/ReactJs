import React, { useState } from 'react'
import { ITeam } from '../../models/ITeam'
import teamList from '../../utils/teamScore.json'
interface ITeamProps {
    randomNumber: number
    team: ITeam
    updateTeamScore: (teamName : string) => void
}
function TeamCard(props: ITeamProps) {
    const [guess, setGuess] = useState(0);
    const { randomNumber, team, updateTeamScore } = props;
    const teamClass = team.name === "TeamA" ? 
    "row text-center p-2 bg-primary bg-primary" : 
    "row text-center p-2 bg-primary bg-warning text-black"; 
    
    const eventHandler = (guess : any) => {
        if(randomNumber === guess) {
            updateTeamScore(team.name); 
        };
    };
  return (
    <>
        <div className={teamClass}
        style={{
            borderTopLeftRadius:"10px", 
            borderTopRightRadius:"10px",
            color:"white"}}>
            <h2>{props.team.name}</h2>
        </div>
        <div className='row border shadow p-4 bg-light justify-content-center flex-column align-items-center'
        style={{margin:"0px", height:"340px"}}>
            <div className="row mt-3 text-center">
                <h4>Sayıyı Tahmin et</h4>
            </div>
            <div className="row mt-3 align-self-center"
            style={{ width:"50%"}}>
                <input onChange={(e) => setGuess(Number(e.target.value))} type="text" className='form-control' />
            </div>
            <div className="row mt-3 justify-content-center">
                <button onClick={() => eventHandler(guess)} style={{width:"100px", height:"100px", borderRadius:"50%"}} className='btn btn-success '>Tahmin Et</button>
                <label htmlFor="">Skor: {team.score}, Random Sayı: {randomNumber}</label>
            </div>
        </div>
    </>
  )
}

export default TeamCard
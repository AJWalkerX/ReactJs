import React, { useState } from 'react'
import GameLine from '../component/molecules/GameLine'
import TeamCardCozum from '../component/molecules/TeamCardCozum';

function YarismaCozum() {
    const [aTeamSize, setATeamSize] = useState(0);
    const [bTeamSize, setBTeamSize] = useState(0);
    const [aTeamList, setATeamList] = useState([
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]);
    const [bTeamList, setBTeamList] = useState([
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]);
    const tiklama = (teamNumber: number) => {
        if(teamNumber === 1) {
            aTeamList[aTeamSize] = true;
            setATeamList(aTeamList);
            setATeamSize(aTeamSize + 1);
        } else {
            bTeamList[bTeamSize] = true;
            setATeamList(aTeamList);
            setBTeamSize(bTeamSize + 1);
        }

    }
  return (
    <div className='container-fluid'>
        <div className='row mt-4'>
            <div className="col-3">
                <TeamCardCozum teamName={'A Takımı'} teamNumber={1}
                buttonClicked={tiklama}
                />
            </div>
            <div className="col-6 d-flex flex-wrap align-content-around" style={{minHeight: "400px"}}>
                <GameLine teamNumber={1} pointList={aTeamList}/>
                <GameLine teamNumber={2} pointList={bTeamList}/>
            </div>
            <div className="col-3">
                <TeamCardCozum teamName={'B Takımı'} teamNumber={2}
                buttonClicked={tiklama}
                />
            </div>
        </div>
    </div>
  )
}

export default YarismaCozum
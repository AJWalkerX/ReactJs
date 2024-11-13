import React from 'react'
import GameBall from '../atoms/GameBall'

interface IGameLineProps {
    teamNumber: number,
    pointList: boolean[]
}

function GameLine(props: IGameLineProps) {
  let list = []

  return (
    <div className={props.teamNumber === 1 ? 'col-12 p-2 shadow rounded-4': 'col-12 p-2 shadow rounded-4 d-flex flex-row-reverse'}>
        {
            props.pointList.map((item, index) => {
                return <GameBall key={index} isFill={item} teamNumber={props.teamNumber}/>
            })
        }
    </div>
  )
}

export default GameLine
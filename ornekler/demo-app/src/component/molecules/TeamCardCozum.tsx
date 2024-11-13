import React from 'react'

interface ITeamCard{
    teamNumber: number,
    teamName: string
    buttonClicked: any
}
function TeamCardCozum(props: ITeamCard) {
    const getTeamColor = () =>{
        if(props.teamNumber === 1) 
            return "row text-bg-primary text-center rounded-top-4"
        return "row text-bg-warning text-center rounded-top-4"
    }
    const onClickEvent = () =>{
        console.log("Tahmin Et");
        props.buttonClicked(props.teamNumber);
    }
  return (
    <div className='m-1 shadow'>
        <div className={getTeamColor()}>
            <h1>{props.teamName}</h1>
        </div>
        <div className="row mt-5">
            <h4 className='text-center'>Sayıyı Tahmin et</h4>
        </div>
        <div className="row w-50 m-auto mt-4">
            <input type="text" className='form-control'/>
        </div>
        <div className="row mt-4 justify-content-center pb-5">
            <input type="button" value="Tahmin Et" className='btn btn-success'
            style={{
                width: "100px", height: "100px", borderRadius: "100px"
            }} onClick={onClickEvent}/>
        </div>
    </div>
  )
}

export default TeamCardCozum
import React from 'react'
import { useAppSelector } from '../../store'
import Ozellik from '../atoms/Ozellik'

function OzellikList() {
    const ozellikler = useAppSelector(state => state.select.OzellikList)
  return (
    <>
    {
        ozellikler.map(ozellik => {
            return (
                <Ozellik key={ozellik.id} ozellik={ozellik} />
            )
        })
    }
    </>
  )
}

export default OzellikList
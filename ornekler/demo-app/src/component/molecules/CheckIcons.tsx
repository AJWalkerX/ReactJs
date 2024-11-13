import React, { useState } from 'react'

function CheckIcons(props: any) {
    const [yazilim, setYazilim] = useState(props.yazilim)
    const [network, setNetwork] = useState(props.network)
    const [architect, setArchitect] = useState(props.architect)
    const [boss, setBoss] = useState(props.boss)
    const [sef, setSef] = useState(props.sef)
  return (
    <div className='mt-4 row'>
                {
                    yazilim ?
                    <div className='col'>
                        <i className="fa-brands fa-java fa-2xl"></i>
                    </div> : null
                    
                }
                {
                    network ?
                    <div className='col'>
                    <i className="fa-solid fa-network-wired fa-2xl"></i>
                    </div> : null
                }
                {
                    architect ?
                    <div className='col'>
                    <i className="fa-solid fa-archway fa-2xl"></i>
                    </div> : null
                }
                {
                    boss ?
                    <div className='col'>
                    <i className="fa-solid fa-people-roof fa-2xl"></i>
                    </div> : null
                }
                {
                    sef ?
                    <div className='col'>
                    <i className="fa-solid fa-user-tie fa-2xl"></i>
                    </div> : null
                }
            </div>
  )
}

export default CheckIcons
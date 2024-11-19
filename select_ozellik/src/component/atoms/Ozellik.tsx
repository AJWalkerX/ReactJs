import React, { useEffect, useState } from 'react';
import { IOzellik } from '../../models/IOzellik';
import { useDispatch } from 'react-redux';
import { addOzellik, removeOzellik } from '../../store/feature/SelectSlice';
import { ozellikDispatch, useAppSelector } from '../../store';
import { emitKeypressEvents } from 'readline';

function Ozellik(props: { ozellik: IOzellik }) {
    const ozellik = props.ozellik;
    const dispatch = useDispatch<ozellikDispatch>();

    
    const isSevenSelected = useAppSelector(state => state.select.isSevenSelected);
    const [isSelected, setIsSelected] = useState(false);


    const ozellikSec = () => {
       
         if(!isSevenSelected) {
            dispatch(addOzellik(ozellik)); 
        }
        if(isSelected) {
            dispatch(removeOzellik(ozellik)); 
        }
        setIsSelected(!isSelected);
        
    };

    console.log('ozellik render edildi', ozellik.name);

    return (
        <div className='col-2 p-2 text-center shadow rounded-3 m-2'>
            <button 
                disabled={isSevenSelected && !isSelected}
                type="button" 
                className={`btn w-100 ${isSelected ? 'btn-primary' : 'btn-outline-primary '}`} 
                onClick={ozellikSec}
            >
                {ozellik.name}
            </button>
        </div>
    );
}

export default React.memo(Ozellik);

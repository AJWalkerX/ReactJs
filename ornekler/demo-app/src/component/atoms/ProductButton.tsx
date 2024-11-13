import React, {useState} from 'react'
interface buttonType{
    tip: string
}

function ProductButton(tip: buttonType) {
    const [hover, setHover] = useState(false);
  return (
    <div className='col-11 d-inline-block' style={{width: 'auto', margin: '2px'}}>
        <button className='btn btn-outline-success'
        style={{color: hover ? 'white' :'green'}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <i  
             className={tip.tip} aria-hidden="true"></i>
        </button>
    </div>
  )
}

export default ProductButton
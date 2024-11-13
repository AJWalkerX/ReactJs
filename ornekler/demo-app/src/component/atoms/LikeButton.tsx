import React, { useState } from 'react'

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const btnLike = () => {
        if(isLiked) return <button type="button" onClick={() => setIsLiked(false)} className='btn btn-success'>
            <i className="fa-solid fa-heart"></i>
            </button>;
        return  <button type="button" className='btn btn-outline-success' 
        onClick={() => setIsLiked(true)}>
            <i className="fa-regular fa-heart"></i></button>;;
    }
  return (
    btnLike()
  )
}

export default LikeButton
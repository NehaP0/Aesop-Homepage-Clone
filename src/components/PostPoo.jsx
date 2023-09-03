import React from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const PostPoo = () => {
  return (
    <div className='Poo'>
        <div className='PooLeft'>
            <img src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png" alt="pooptank" />
        </div>
        <div className='PooText PooRight'>
            <p className='HeadingPoo'>Post-Poo Drops has returned</p>
            <p className='InfoPoo'>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
            <div className='ReadMorePoo'>
                <p>Discover Post-Poo Drops</p>
                <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
            </div>
        </div>
    </div>
  )
}

export default PostPoo
import React from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Athenaeum = () => {
  return (
    <div className='Athenaeum'>
        <div className='bodyText AthenaeumLeft'>
            <p className='aboveHeading'>The Athenaeum</p>
            <p className='Heading'>The warm-up</p>
            <p className='Info'>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
            <div  className='ReadMore'>
                <p>Read more</p>
                <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
            </div>
        </div>
        <div className='AthenaeumRight'>
            <img src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg" alt="leaves" />
        </div>
    </div>
  )
}

export default Athenaeum
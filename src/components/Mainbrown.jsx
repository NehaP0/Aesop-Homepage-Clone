import React from 'react'
// import arrow from '../images/arrow.png'
import {FaSearch, FaRegHeart, FaGripLines} from 'react-icons/fa'


const Mainbrown = () => {
  return (
    <div >

        <div id='BrownThing'>
        
            <div id='NavleftSmallScr'>
                <p>Aesop.</p>            
            </div>
            <div id='NavrightSmallScr'>
                <FaSearch style={{color:"white", fontSize:"18px"}}/>
                <FaRegHeart style={{color:"white", fontSize:"18px"}}/>
                <p style={{color:"white", fontSize:"18px"}}>Cart</p>
                <FaGripLines style={{color:"white", fontSize:"18px"}}/>
            </div>


            <div id='makeItLeft'>
                <div id='AesopName'><p>Aesop.</p></div>
                <div id='AesopDetails'>
                    <p>Bar Soaps</p>
                    <p>A body care classic, reimagined</p>
                    <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <div>
                        <p>Discover Bar Soaps</p>
                    </div>
                </div>
            </div> 
        </div> 

        <div id='BlackThing'>
                <div id='BlackThingDetails'>
                    <p>Bar Soaps</p>
                    <p>A body care classic, reimagined</p>
                    <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <div>
                        <p>Discover Bar Soaps</p>
                    </div>
                </div>
        </div>              
    </div>
  )
}

export default Mainbrown
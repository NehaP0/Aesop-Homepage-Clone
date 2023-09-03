import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'



const Store = () => {

  const [current, setCurrent] = useState(0)


  const Images= [
    { "id": 0, "imgLink": "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg", "imgName":"Aesop Fashion Walk" },
    { "id": 1, "imgLink": "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg", "imgName": "Aesop MOKO"},
    { "id": 2, "imgLink": "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg", "imgName":"Aesop ifc mall" },    
  ]

  const prevSlide = ()=>{
    if(current==0){
      setCurrent(2)
    }
    else{
      setCurrent(current-1)
    }
  }

  const nextSlide = ()=>{
    if(current==2){
      setCurrent(0)
    }
    else{
      setCurrent(current+1)
    }
  }

  return (
    <div className='Store'>
        <div className='StoreText StoreLeft'>
            <p className='Heading'>Store locator</p>
            <p className='Info'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <div className='ReadMore'>
                <p>Find a nearby store</p>
                <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
            </div>
        </div>
        <div className='StoreRight'>  {/* slider*/}
        <FaArrowAltCircleLeft onClick={prevSlide} className='ArrowStoreLeft'/>
        <FaArrowAltCircleRight onClick={nextSlide} className='ArrowStoreRight'/>
           {Images.map((item)=>{
            return(
              <div key={item.id}>
                  { item.id === current && (<img src={item.imgLink} alt="item.id" /> )}
                  
              </div>
            )
           })}
        </div>
    </div>
  )
}


export default Store
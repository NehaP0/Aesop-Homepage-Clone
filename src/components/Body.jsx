import React, { useState } from 'react'
import nurtureSoap from '../images/nurtureSoap.PNG'
import polishSoap from '../images/polishSoap.PNG'
import refreshSoap from '../images/refreshSoap.PNG'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Body = () => {

    const [current, setCurrent] = useState(0)
    const [current2, setCurrent2] = useState(0)

    const images = [
        {"id" : 0, "img1":nurtureSoap, "img1Name" : "Nurture Bar Soap", "img1Dets":"Offers a mild yet effective cleanse" , "img2":polishSoap, "img2Name" : "Polish Bar Soap", "img2Dets":"Thoroughly cleanses and exfoliates skin"},
        {"id" : 1, "img1":polishSoap, "img1Name" : "Polish Bar Soap", "img1Dets":"Thoroughly cleanses and exfoliates skin" , "img2":refreshSoap, "img2Name" : "Refresh Bar Soap", "img2Dets":"Offers a thorough and enlivening cleanse"}
    ]

    const images2 = [
        {"id" : 0, "img":nurtureSoap, "imgName" : "Nurture Bar Soap", "imgDets":"Offers a mild yet effective cleanse"},
        {"id" : 1, "img":polishSoap, "imgName" : "Polish Bar Soap", "imgDets":"Thoroughly cleanses and exfoliates skin"},
        {"id" : 2, "img":refreshSoap, "imgName" : "Refresh Bar Soap", "imgDets":"Offers a thorough and enlivening cleanse"}
    ]

    const prevSlide = ()=>{
        setCurrent(current-1)
    }

    const nextSlide = ()=>{
            setCurrent(current+1)        
    }

    const prevSlide2 = ()=>{
        setCurrent2(current2-1)
    }

    const nextSlide2 = ()=>{
        setCurrent2(current2+1)        
    }

  return (
    <div >
        <div className='body'>
            <div className='bodyText'>
                <div>
                    <p className='aboveHeading'>For the body</p>
                    <p className='Heading'>An expression of care</p>
                </div>
                <div>
                    <p className='Info'>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
                    <div  className='SeeAll'>
                        <p>See all Body Care</p>
                        <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
                    </div>
                </div>
            </div>
                {current==1 && <FaArrowAltCircleLeft className='ArrowLeft' onClick={prevSlide}/> }
                {current==0 && <FaArrowAltCircleRight className='ArrowRight' onClick={nextSlide} /> }
                {images.map((item)=>{
                    return(
                        <div   key = {item.id} className='bodyRightDiv'>
                            <div className='card'>
                                { item.id === current && (<div className='cardInnerDiv'>
                                    <div>
                                        <img src={item.img1} alt={item.img1Name} />
                                    </div>
                                    <div>
                                        <p className='itemName'>{item.img1Name}</p>
                                        <p className='itemDetails'>{item.img1Dets}</p>
                                    </div>
                                </div>)}
                            </div>

                            <div className='card'>
                                { item.id === current && (<div className='cardInnerDiv'>
                                    <div>
                                        <img src={item.img2} alt={item.img2Name} />
                                    </div>
                                    <div>
                                        <p className='itemName'>{item.img2Name}</p>
                                        <p className='itemDetails'>{item.img2Dets}</p>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    )
                })}              
        </div>

        <div className='body2'>
            <div className='bodyText'>
                <div>
                    <p className='aboveHeading'>For the body</p>
                    <p className='Heading'>An expression of care</p>
                </div>
                <div>
                    <p className='Info'>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
                    <div  className='SeeAll'>
                        <p>See all Body Care</p>
                        <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
                    </div>
                </div>
            </div>
                {(current2==1 || current2==2) && <FaArrowAltCircleLeft className='bodyArrowLeft2' onClick={prevSlide2}/> }
                {(current2==0 || current2==1) && <FaArrowAltCircleRight className='bodyArrowRight2' onClick={nextSlide2} /> }
                {images2.map((item)=>{
                    return(
                        <div   key = {item.id} className='bodyRightDiv2'>
                            <div className='bodycard2'>
                                { item.id === current2 && (<div className='bodycardInnerDiv2'>
                                    <div>
                                        <img src={item.img} alt={item.imgName} />
                                    </div>
                                    <div>
                                        <p className='bodyitemName2'>{item.imgName}</p>
                                        <p className='bodyitemDetails2'>{item.imgDets}</p>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    )
                })}              
        </div>
        
    </div>
  )
}

export default Body
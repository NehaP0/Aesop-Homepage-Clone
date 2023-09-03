import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Home = () => {

    const [current, setCurrent] = useState(0)
    const [current2, setCurrent2] = useState(0)


    const images = [
        {"id" : 0, "img1":"https://www.aesop.com/u1nb1km7t5q7/WnUICDuVJPP7cJqhUM660/59834fc21eca3e5e68ea8697f83b5082/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png", "img1Name" : "Post-Poo Drops", "img1Dets":"A botanical bathroom deodoriser" , "img2":"https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png", "img2Name" : "Aganice Aromatic Candle", "img2Dets":"Cardamom, Mimosa, Tobacco"},
        {"id" : 1, "img1":"https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png", "img1Name" : "Aganice Aromatic Candle", "img1Dets":"Cardamom, Mimosa, Tobacco" , "img2":"https://www.aesop.com/u1nb1km7t5q7/4fQwfatAQoq2zajw67WrEU/82a34fa52baa55583c71de77690589eb/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png", "img2Name" : "Ptolemy Aromatic Candle", "img2Dets":"A sensuous blend of leather, smoke and wood"},
        {"id" : 2, "img1":"https://www.aesop.com/u1nb1km7t5q7/4fQwfatAQoq2zajw67WrEU/82a34fa52baa55583c71de77690589eb/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png", "img1Name" : "Ptolemy Aromatic Candle", "img1Dets":"A sensuous blend of leather, smoke and wood" , "img2":"https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png", "img2Name" : "Callippus Aromatic Candle", "img2Dets":"A marriage of deep greens and earthy spices"},
        {"id" : 3, "img1":"https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png", "img1Name" : "Callippus Aromatic Candle", "img1Dets":"A marriage of deep greens and earthy spices" , "img2":"https://www.aesop.com/u1nb1km7t5q7/6MZHhbImkG5zap3LhHMVWG/69169b192588fe369e89f462015d1287/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png", "img2Name" : "Bronze Incense Holder", "img2Dets":"Suited to any interior"},
        {"id" : 4, "img1":"https://www.aesop.com/u1nb1km7t5q7/6MZHhbImkG5zap3LhHMVWG/69169b192588fe369e89f462015d1287/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png", "img1Name" : "Bronze Incense Holder", "img1Dets":"Suited to any interior" , "img2":"https://www.aesop.com/u1nb1km7t5q7/3Gl0lAqs3RFMdTkfohehHt/0e5ed642c54781db0a84f694797b5907/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.png", "img2Name" : "Murasaki Aromatic Incense", "img2Dets":"For those who favour aromas of warm spice"},
        {"id" : 5, "img1":"https://www.aesop.com/u1nb1km7t5q7/3Gl0lAqs3RFMdTkfohehHt/0e5ed642c54781db0a84f694797b5907/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.png", "img1Name" : "Murasaki Aromatic Incense", "img1Dets":"For those who favour aromas of warm spice" , "img2":"https://www.aesop.com/u1nb1km7t5q7/3kzopPwcQE6AFQcsmJjirZ/a8b49c14b2646dd0965202a179fc3440/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.png", "img2Name" : "Kagerou Aromatique Incense", "img2Dets":"For those particularly partial to Vetiver"},
        {"id" : 6, "img1":"https://www.aesop.com/u1nb1km7t5q7/3kzopPwcQE6AFQcsmJjirZ/a8b49c14b2646dd0965202a179fc3440/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.png", "img1Name" : "Kagerou Aromatique Incense", "img1Dets":"For those particularly partial to Vetiver" , "img2":"https://www.aesop.com/u1nb1km7t5q7/7fdcsmcQIJ9BvoM0hv4qbK/1ceca68b04189e8c45e224c7a15e10cb/Aesop_Home_Sarashina_Aromatique_Incense_Web_Large_1584x1384px.png", "img2Name" : "Sarashina Aromatique Incense", "img2Dets":"For those particularly partial to Sandalwood"},
    ]

    const images2 = [
        {"id" : 0, "img":"https://www.aesop.com/u1nb1km7t5q7/WnUICDuVJPP7cJqhUM660/59834fc21eca3e5e68ea8697f83b5082/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png", "imgName" : "Post-Poo Drops", "imgDets":"A botanical bathroom deodoriser"},
        {"id" : 1, "img":"https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png", "imgName" : "Aganice Aromatic Candle", "imgDets":"Cardamom, Mimosa, Tobacco"},
        {"id" : 2, "img":"https://www.aesop.com/u1nb1km7t5q7/4fQwfatAQoq2zajw67WrEU/82a34fa52baa55583c71de77690589eb/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Large_1102x962px.png", "imgName" : "Ptolemy Aromatic Candle", "imgDets":"A sensuous blend of leather, smoke and wood"},
        {"id" : 3, "img":"https://www.aesop.com/u1nb1km7t5q7/1HDrLNDwmYh2CtqiEsFL2n/507570e4e0b46a69e418d63df74fe44f/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png", "imgName" : "Callippus Aromatic Candle", "imgDets":"A marriage of deep greens and earthy spices"},
        {"id" : 4, "img":"https://www.aesop.com/u1nb1km7t5q7/6MZHhbImkG5zap3LhHMVWG/69169b192588fe369e89f462015d1287/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png", "imgName" : "Bronze Incense Holder", "imgDets":"Suited to any interior"},
        {"id" : 5, "img":"https://www.aesop.com/u1nb1km7t5q7/3Gl0lAqs3RFMdTkfohehHt/0e5ed642c54781db0a84f694797b5907/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.png", "imgName" : "Murasaki Aromatic Incense", "imgDets":"For those who favour aromas of warm spice"},
        {"id" : 6, "img":"https://www.aesop.com/u1nb1km7t5q7/3kzopPwcQE6AFQcsmJjirZ/a8b49c14b2646dd0965202a179fc3440/Aesop_Home_Kagerou_Aromatique_Incense_Web_Large_1584x1384px.png", "imgName" : "Kagerou Aromatique Incense", "imgDets":"For those particularly partial to Vetiver"},
        {"id" : 7, "img":"https://www.aesop.com/u1nb1km7t5q7/7fdcsmcQIJ9BvoM0hv4qbK/1ceca68b04189e8c45e224c7a15e10cb/Aesop_Home_Sarashina_Aromatique_Incense_Web_Large_1584x1384px.png", "imgName" : "Sarashina Aromatique Incense", "imgDets":"For those particularly partial to Sandalwood"},

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
    <div>
            <div className='home'>
                <div className='homeText'>
                    <div>
                        <p className='aboveHeading'>For the home</p>
                        <p className='Heading'>Domestic pleasures</p>
                    </div>
                    <div>
                        <p className='Info'>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
                        <div  className='SeeAll'>
                            <p>See all Home</p>
                            <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
                        </div>
                    </div>
                </div>


                {(current==1 || current==2 || current==3 || current==4 || current==5 || current==6) && <FaArrowAltCircleLeft onClick={prevSlide} className='ArrowLeft'/> }
                {(current==0 || current==1 || current==2 || current==3 || current==4 || current==5) && <FaArrowAltCircleRight onClick={nextSlide} className='ArrowRight'/> }
                {images.map((item)=>{
                    return(
                    <div   key = {item.id} className='homeRightDiv'>
                        <div className='Homecard'>
                            { item.id === current && (<div className='homecardInnerDiv'>
                                <div>
                                    <img src={item.img1} alt={item.img1Name} />
                                </div>
                                <div>
                                    <p className='itemName'>{item.img1Name}</p>
                                    <p className='itemDetails'>{item.img1Dets}</p>
                                </div>
                            </div>)}
                        </div>

                        <div className='Homecard'>
                            { item.id === current && (<div className='homecardInnerDiv'>
                                <div>
                                    <img src={item.img2} alt={item.img2Name} />
                                </div>
                                <div>
                                    <p className='itemName'>{item.img2Name}</p>
                                    <p className='itemDetails'>{item.img2Dets}</p>
                                </div>
                            </div>)}
                        </div>
                    </div>        )
                })}         
            </div>


            <div className='home2'>
                <div className='homeText'>
                    <div>
                        <p className='aboveHeading'>For the home</p>
                        <p className='Heading'>Domestic pleasures</p>
                    </div>
                    <div>
                        <p className='Info'>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
                        <div  className='SeeAll'>
                            <p>See all Home</p>
                            <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
                        </div>
                    </div>
                </div>
                {(current2==1 || current2==2 || current2==3 || current2==4 || current2==5 || current2==6 || current2==7) && <FaArrowAltCircleLeft className='homeArrowLeft2' onClick={prevSlide2}/> }
                {(current2==0 || current2==1 || current2==2 || current2==3 || current2==4 || current2==5 || current2==6) && <FaArrowAltCircleRight className='homeArrowRight2' onClick={nextSlide2} /> }
                {images2.map((item)=>{
                    return(
                        <div   key = {item.id} className='homeRightDiv2'>
                            <div className='homecard2'>
                                { item.id === current2 && (<div className='homecardInnerDiv2'>
                                    <div>
                                        <img src={item.img} alt={item.imgName} />
                                    </div>
                                    <div>
                                        <p className='homeitemName2'>{item.imgName}</p>
                                        <p className='homeitemDetails2'>{item.imgDets}</p>
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

export default Home
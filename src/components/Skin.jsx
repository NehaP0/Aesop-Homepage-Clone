import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Skin = () => {

    const [current, setCurrent] = useState(0)
    const [current2, setCurrent2] = useState(0)

    const images = [
        {"id" : 0, "img1":"https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png", "img1Name" : "Lucent Facial Concentrate", "img1Dets":"A vitamin C-rich layering serum" , "img2":"https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png", "img2Name" : "Purifying Facial Cream Cleanser", "img2Dets":"A daily cream cleanser for dry skin"},
        {"id" : 1, "img1":"https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png", "img1Name" : "Purifying Facial Cream Cleanser", "img1Dets":"A daily cream cleanser for dry skin" , "img2":"https://www.aesop.com/u1nb1km7t5q7/2Tzk81CWO1AB1w5j56J5Fy/c4de6cc5c635c992c00771953dca2795/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png", "img2Name" : "Camellia Nut Facial Hydrating Cream", "img2Dets":"For normal, dry or sensitive skin"},
        {"id" : 2, "img1":"https://www.aesop.com/u1nb1km7t5q7/2Tzk81CWO1AB1w5j56J5Fy/c4de6cc5c635c992c00771953dca2795/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png", "img1Name" : "Camellia Nut Facial Hydrating Cream", "img1Dets":"For normal, dry or sensitive skin" , "img2":"https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png", "img2Name" : "Parsley Seed Anti-Oxidant Eye Cream", "img2Dets":"Nourishes delicate skin around eyes"},
        {"id" : 3, "img1":"https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png", "img1Name" : "Parsley Seed Anti-Oxidant Eye Cream", "img1Dets":"Nourishes delicate skin around eyes" , "img2":"https://www.aesop.com/u1nb1km7t5q7/5L14KbkHFuvoBs7j5jKJBn/366472f9388ddb96b6eddaed55b6fad1/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png", "img2Name" : "B Triple C Facial Balancing Gel", "img2Dets":"Anti-oxidant gel infused with Vitamin B and C"},
        {"id" : 4, "img1":"https://www.aesop.com/u1nb1km7t5q7/5L14KbkHFuvoBs7j5jKJBn/366472f9388ddb96b6eddaed55b6fad1/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png", "img1Name" : "B Triple C Facial Balancing Gel", "img1Dets":"Anti-oxidant gel infused with Vitamin B and C" , "img2":"https://www.aesop.com/u1nb1km7t5q7/4wiMHqmHFAqmJbZRF2OYo9/12b746f82bf1cf56d2c4ea953f9ae07d/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png", "img2Name" : "Mandarin Facial Hydrating Cream", "img2Dets":"Rapidly absorbed, lightly hydrating"},
        {"id" : 5, "img1":"https://www.aesop.com/u1nb1km7t5q7/4wiMHqmHFAqmJbZRF2OYo9/12b746f82bf1cf56d2c4ea953f9ae07d/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png", "img1Name" : "Mandarin Facial Hydrating Cream", "img1Dets":"Rapidly absorbed, lightly hydrating" , "img2":"https://www.aesop.com/u1nb1km7t5q7/SFLFFcSkkuEojFBCs26Xo/97bb554badcd4f5265b972bed612b2ac/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Intense-Serum-60mL-Web-Large-684x668px.png", "img2Name" : "Parsley Seed Anti-Oxidant Intense Serum", "img2Dets":"A hydrating serum to bolster skin"},
        {"id" : 6, "img1":"https://www.aesop.com/u1nb1km7t5q7/SFLFFcSkkuEojFBCs26Xo/97bb554badcd4f5265b972bed612b2ac/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Intense-Serum-60mL-Web-Large-684x668px.png", "img1Name" : "Parsley Seed Anti-Oxidant Intense Serum", "img1Dets":"A hydrating serum to bolster skin" , "img2":"https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png", "img2Name" : "Parsley Seed Facial Cleanser", "img2Dets":"For those in polluted urban environments"}
    ]

    const images2 = [
        {"id" : 0, "img":"https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png", "imgName" : "Lucent Facial Concentrate", "imgDets":"A vitamin C-rich layering serum"},
        {"id" : 1, "img":"https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png", "imgName" : "Purifying Facial Cream Cleanser", "imgDets":"A daily cream cleanser for dry skin"},
        {"id" : 2, "img":"https://www.aesop.com/u1nb1km7t5q7/2Tzk81CWO1AB1w5j56J5Fy/c4de6cc5c635c992c00771953dca2795/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png", "imgName" : "Camellia Nut Facial Hydrating Cream", "imgDets":"For normal, dry or sensitive skin"},
        {"id" : 3, "img":"https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png", "imgName" : "Parsley Seed Anti-Oxidant Eye Cream", "imgDets":"Nourishes delicate skin around eyes"},
        {"id" : 4, "img":"https://www.aesop.com/u1nb1km7t5q7/5L14KbkHFuvoBs7j5jKJBn/366472f9388ddb96b6eddaed55b6fad1/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png", "imgName" : "B Triple C Facial Balancing Gel", "imgDets":"Anti-oxidant gel infused with Vitamin B and C"},
        {"id" : 5, "img":"https://www.aesop.com/u1nb1km7t5q7/4wiMHqmHFAqmJbZRF2OYo9/12b746f82bf1cf56d2c4ea953f9ae07d/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png", "imgName" : "Mandarin Facial Hydrating Cream", "imgDets":"Rapidly absorbed, lightly hydrating"},
        {"id" : 6, "img":"https://www.aesop.com/u1nb1km7t5q7/SFLFFcSkkuEojFBCs26Xo/97bb554badcd4f5265b972bed612b2ac/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Intense-Serum-60mL-Web-Large-684x668px.png", "imgName" : "Parsley Seed Anti-Oxidant Intense Serum", "imgDets":"A hydrating serum to bolster skin"},
        {"id" : 7, "img":"https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png", "imgName" : "Parsley Seed Facial Cleanser", "imgDets":"For those in polluted urban environments"}

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
            <div className='skin'>
                <div className='skinText'>
                    <div>
                        <p className='aboveHeading'>For the skin</p>
                        <p className='Heading'>Attention for all types</p>
                    </div>
                    <div>
                        <p className='Info'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                        <div  className='SeeAll'>
                            <p>See all Skin Care</p>
                            <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
                        </div>
                    </div>
                </div>

                {(current==1 || current==2 || current==3 || current==4 || current==5 || current==6) && <FaArrowAltCircleLeft onClick={prevSlide} className='ArrowLeft'/> }
                {(current==0 || current==1 || current==2 || current==3 || current==4 || current==5) && <FaArrowAltCircleRight onClick={nextSlide} className='ArrowRight'/> }
                {images.map((item)=>{
                    return(
                    <div   key = {item.id} className='skinRightDiv'>
                        
                        <div className='Skincard'>
                            { item.id === current && (<div className='skincardInnerDiv'>
                                <div>
                                    <img src={item.img1} alt={item.img1Name} />
                                </div>
                                <div>
                                    <p className='itemName'>{item.img1Name}</p>
                                    <p className='itemDetails'>{item.img1Dets}</p>
                                </div>
                            </div>)}
                        </div>

                        <div className='Skincard'>
                            { item.id === current && (<div className='skincardInnerDiv'>
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


        <div className='skin2'>
                <div className='skinText'>
                    <div>
                        <p className='aboveHeading'>For the skin</p>
                        <p className='Heading'>Attention for all types</p>
                    </div>
                    <div>
                        <p className='Info'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                        <div  className='SeeAll'>
                            <p>See all Skin Care</p>
                            <FaArrowAltCircleRight style={{marginTop:"1px", fontSize:"1rem", color:"black", zIndex:"10", userSelect:"none"}}/>
                        </div>
                    </div>
                </div>
                {(current2==1 || current2==2 || current2==3 || current2==4 || current2==5 || current2==6 || current2==7) && <FaArrowAltCircleLeft className='skinArrowLeft2' onClick={prevSlide2}/> }
                {(current2==0 || current2==1 || current2==2 || current2==3 || current2==4 || current2==5 || current2==6) && <FaArrowAltCircleRight className='skinArrowRight2' onClick={nextSlide2} /> }
                {images2.map((item)=>{
                    return(
                        <div   key = {item.id} className='skinRightDiv2'>
                            <div className='skincard2'>
                                { item.id === current2 && (<div className='skincardInnerDiv2'>
                                    <div>
                                        <img src={item.img} alt={item.imgName} />
                                    </div>
                                    <div>
                                        <p className='skinitemName2'>{item.imgName}</p>
                                        <p className='skinitemDetails2'>{item.imgDets}</p>
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

export default Skin
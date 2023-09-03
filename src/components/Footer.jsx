import React from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Footer = () => {
  return (
    <div id='Footer'>

        <div id='FootmidAndSmlScr'>
          <p>Subscribe to Aesop communications</p>
          <hr />
          <div className='EmailDiv'>
            <p>Email address</p>
            <FaArrowAltCircleRight style={{marginTop:"10px", fontSize:"1rem", color:"white", zIndex:"10", userSelect:"none", cursor:"pointer"}}/>
          </div>
          <div className='SubscribeDiv'>
            <input type="checkbox" name="" id="" />
            <div>
              <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our </p>
              <a href="">privacy policy.</a>
            </div>
          </div>
        </div>

      <div id='FooterDiv1'>

        <div>
          <p>Subscribe to Aesop communications</p>
          <hr />
          <div className='EmailDiv'>
            <p>Email address</p>
            <FaArrowAltCircleRight style={{marginTop:"15px", fontSize:"1rem", color:"white", zIndex:"10", userSelect:"none", cursor:"pointer"}}/>
          </div>
          <div className='SubscribeDiv'>
            <input type="checkbox" name="" id="" />
            <div>
              <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our </p>
              <a href="">privacy policy.</a>
            </div>
          </div>
        </div>

        <div>
          <p>Orders and support</p>
          <hr />
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Order history</p>
          <p>Terms and conditions</p>
        </div>

        <div>
          <p>Services</p>
          <hr />
          <p>Live assistance</p>
          <p>Corporate gifts</p>
          <p>Facial Appointments</p>
          <p>Click and Collect</p>
          <p>Video consultation</p>
        </div>

        <div>
          <p>Location preferences</p>
          <hr />
          <p>Shipping:</p>
          <p>Hong Kong SAR, China</p>
          <p>Language:</p>
          <p>English</p>
        </div>
        
      </div>

      <div id='FooterDiv2SmlScr'>
        <div>
            <p>Location preferences</p>
            <hr />
            <p>Shipping:</p>
            <p>Hong Kong SAR, China</p>
            <p>Language:</p>
            <p>English</p>
          </div>
          <div>
            <p>Sustainability</p>
            <hr />
            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
          </div>

      </div>


      <div id='FooterDiv2'>
          <div>
            <p>Sustainability</p>
            <hr />
            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
          </div>

          <div>
            <p>About</p>
            <hr />
            <p>Our story</p>
            <p>Foundation</p>
            <p>Careers</p>
            <p>Privacy policy</p>
            <p>Accessibility</p>
            <p>Cookie Policy</p>
          </div>

          <div>
            <p>Social Media</p>
            <hr />
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Wechat</p>
            <p>Weibo</p>
          </div>

          <div></div>
      </div>

      <hr />


      <div id='FooterDiv3'>
        <p>© Aesop</p>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
 function Footer() {
  return (
   
         <footer class="site-foote bg-secondary">
            <div class="container mt-5">
              <div class="row">
                <div class="col-md-8 col-lg-3 mb-4 mb-lg-0">

                  <div class="block-2">
                    <h3 class="footer-heading mb-2 text-light">About Us</h3>
              <p className='text-light'>Our shop is one of the oldest chemist shop in entire Janglat mendi area.Lot of peope have been quired.</p>
                  </div>

                </div>
                <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
                  <h3 class="footer-heading mb-4 text-light">Quick Links</h3>
                  <ul class="list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                    <li><Link to="Find">Find Medical Available</Link></li>
                  </ul>
                </div>

                <div class="col-md-6 col-lg-3">
                  <div class="block-5 mb-5">
                    <h3 class="footer-heading mb-4 text-light">Contact Info</h3>
                    <ul class="list-unstyled">
                      <li class="address text-light"> <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.3970099895474!2d75.15236200998932!3d33.725708726355684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2055613d728fd%3A0xae334fb4db9803a9!2zSGFuZmlhIE1hc2ppZCBTaGFyZWlmLCDYrdmG24zZgduBINmF2LPYrNivINi02LHbjNmBINin2LPZhNin2YUg2KLYqNin2K8!5e0!3m2!1sen!2sin!4v1700283673296!5m2!1sen!2sin"
  width="270" height="70"
  style={{ border: 0 }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
</li>
                      <li class="phone text-light"><a href="tel://23923929210">+919541802864</a></li>
                      <li class="email text-light">sheikhmedicalstore@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <p className='text-light'>

Copyright &copy;
 All rights reserved 2023 | Yasir Arfat 
<i class="icon-heart" aria-hidden="true"></i>

</p>
              </div>
        
            </div>
          </footer>
        
  )
}
export default Footer;
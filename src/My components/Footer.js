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
                      <li class="address text-light">1,Janglat Mendi,Anantnag,Jammu and Kashmir,INDIA</li>
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
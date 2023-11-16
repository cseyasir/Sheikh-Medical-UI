import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      
      

        <div class="site-wrap">


          

          <div class="site-blocks-cover her1">
            <div class="container">
            <marquee className="text-light">Please <mark className='icon-phone2 ' >+919541802864</mark>  for any quries related to medicine intake or sale.</marquee>
              <div class="row">
                <div class="col-lg-7 mx-auto order-lg-2 align-self-center">
                  <div class="site-block-cover-content text-center">
                    <h2 class="sub-title">Effective Medicine, New Medicine Everyday</h2>
                    <div class="site-logo">
                      <a href="index.html" class="js-logo-clone">Sheikh Medical Store</a>
                    </div>
                    <p>
                      <Link to="Find" class="btn btn-primary px-5 py-3">Find Medican Availability</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="site-section">
            <div class="container">
              <div class="row align-items-stretch section-overlap">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div class="banner-wrap bg-primary h-100">
                    <a href="#" class="h-100">
                      <h5 className='text-light'>All Kinds of Medican<br /> Available </h5>
                      <p className='text-light'>
                        Please contact us on +919541802864.
                        {/* <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong> */}
                      </p>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div class="banner-wrap h-100">
                    <a href="#" class="h-100">
                      <h5>Timing<br /> 8:00-19:00</h5>
                      <p>
                        Our store is remains open all days of week except first three days on Eid eve.

                        {/* <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong> */}
                      </p>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div class="banner-wrap bg-warning h-100">
                    <Link to="Find" class="h-100">
                      <h5 className='text-light'>Buy <br /> Any Medicine</h5>
                      <p className='text-light'>
                        Please reach us at sheikh medical store Janglat mendi. +919541802864.
                       
                      </p>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="site-section">
            <div class="container">
              <div class="row">
                <div class="title-section text-center col-12">
                  <h2 class="text-uppercase">Popular Products</h2>
                  
                </div>
              </div>

              <div class="row">
              
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
                
                  {/* <span class="tag">Sale</span> */}
                  <a href="shop-single.html"> <img src="images/amc.jfif" alt="Image" /></a>
                  <h3 class="text-success">Amoxicillin</h3>
                  
                </div>
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
                  <a href="shop-single.html"> <img src="images/cef.jpg" alt="Image"  width='85%'/></a>
                  <h3 class="text-success">Cefixime</h3>
                
                </div>
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
                  <a href="shop-single.html"><img src="images/mont-.jpg" alt="Image" width='100%' class='cep'/></a>
                  <h3 class="text-success cep">Montelukast</h3>
                 
                </div>
                

                <div class="col-sm-6 col-lg-4 text-center item mb-4">
              

                  <a href="shop-single.html"> <img src="images/ompp.jfif" alt="Image" /></a>
                  <h3 class="text-success">Omeprazole</h3>
                 
                </div>
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
                  <a href="shop-single.html"> <img src="images/pent.jfif" alt="Image" /></a>
                  <h3 class="text-success">Pantoprazole</h3>
                  
                </div>
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
                  <span class="tag">Sale</span>
                  <a href="shop-single.html"> <img src="images/fam.jfif" alt="Image" /></a>
                  <h3 class="text-success">Famotidine</h3>
                 
                </div>
                <div class="col-sm-6 col-lg-4 text-center item mb-4">
              

              <a href="shop-single.html"> <img src="images/Clob.jpg" alt="Image" width='78%'/></a>
              <h3 class="text-success">Clobetamil G</h3>
             
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4 ">
              <a href="shop-single.html"> <img src="images/bet.jfif" alt="Image" /></a>
              <h3 class="text-success" className='bet'>Betnovate-N</h3>
              
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <span class="tag">Sale</span>
              <a href="shop-single.html"> <img src="images/neo.jfif" alt="Image" /></a>
              <h3 class="text-success">Neosporin</h3>
             
            </div>
              </div>
              
            </div>
            <p>
                      <Link to="Find" class="btn btn-primary px-5 py-3">Buy Medican</Link>
                    </p>
            
          </div>


          {/* <div class="site-section bg-light">
            <div class="container">
              <div class="row">
                <div class="title-section text-center col-12">
                  <h2 class="text-uppercase">New Products</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 block-3 products-wrap">
                  <div class="nonloop-block-3 owl-carousel">

                    <div class="text-center item mb-4">
                      <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                      <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                      <p class="price">$120.00</p>
                    </div>

                    <div class="text-center item mb-4">
                      <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                      <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                      <p class="price">$120.00</p>
                    </div>

                    <div class="text-center item mb-4">
                      <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                      <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                      <p class="price">$120.00</p>
                    </div>

                    <div class="text-center item mb-4">
                      <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                      <h3 class="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                      <p class="price">$120.00</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div class="site-section">
            <div class="container">
              <div class="row">
                <div class="title-section text-center col-12">
                  <h2 class="text-uppercase">Testimonials</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 block-3 products-wrap">
                  <div class="nonloop-block-3 no-direction owl-carousel">

                    <div class="testimony">
                      <blockquote>
                        <img src="images/person_1.jpg" alt="Image" class="img-fluid w-25 mb-4 rounded-circle" />
                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                      </blockquote>

                      <p>&mdash; Kelly Holmes</p>
                    </div>

                    <div class="testimony">
                      <blockquote>
                        <img src="images/person_2.jpg" alt="Image" class="img-fluid w-25 mb-4 rounded-circle" />
                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                          unde.&rdquo;</p>
                      </blockquote>

                      <p>&mdash; Rebecca Morando</p>
                    </div>

                    <div class="testimony">
                      <blockquote>
                        <img src="images/person_3.jpg" alt="Image" class="img-fluid w-25 mb-4 rounded-circle" />
                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                          unde.&rdquo;</p>
                      </blockquote>

                      <p>&mdash; Lucas Gallone</p>
                    </div>

                    <div class="testimony">
                      <blockquote>
                        <img src="images/person_4.jpg" alt="Image" class="img-fluid w-25 mb-4 rounded-circle" />
                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                          obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                          unde.&rdquo;</p>
                      </blockquote>

                      <p>&mdash; Andrew Neel</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div class="site-section bg-secondary bg-image">
            <div class="container">
              <div class="row align-items-stretch">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <a href="#" class="banner-1 h-100 d-flex" >
                    <div class="banner-1-inner align-self-center">
                      <h2>Pharma Products</h2>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <a href="#" class="banner-1 h-100 d-flex banner" >
                    <div class="banner-1-inner ml-auto  align-self-center">
                      <h2>Rated by Experts</h2>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}


         
        </div>
        
    </>
  )
}
export default Home;



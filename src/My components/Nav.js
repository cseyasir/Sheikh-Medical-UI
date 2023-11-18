import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes,useNavigate, Route, Link } from "react-router-dom";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    setInterval(() => {
      const role=JSON.parse(localStorage.getItem('role'));
      setIsLoggedIn(role); 
    },[]);
  }, [5000]);
  const Logout=()=>{
    navigate('/');
    return(localStorage.removeItem("role"));
   
  }
  // useEffect(() => {
  //   // Open the menu when the user is logged in
  //   if (isLoggedIn) {
  //     setMenuOpen(true);
  //   }
  // }, [isLoggedIn]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if(isLoggedIn==1){
  return (
    <>
      <div class="site-wrap">
        
        <div class="site-navbar bg-secondary">
          <div class="container">
            <div class="d-flex align-items-center justify-content-between">
              <div class="logo">
                <div>
                  <span className='icon-local_pharmacy sms_logo text-light '></span> <span className='text-uppercase font-weight-bold text-light'>Sheikh Medical Store</span>
                  {/* <img src="images/navlogo.jpg" alt="Image" className=''/> */}
                </div>
              </div>
              <div class="main-nav d-none d-lg-block">
                <nav class="site-navigation text-right text-md-center" role="navigation">
                  <ul class="site-menu js-clone-nav d-none d-lg-block">
                    <li class="active icon-home text-light"><Link to="/"><span className='text-light'>Home</span></Link></li>
                    <li className='nav_but text-light'><Link to="About"><span className='text-light'>About</span></Link></li>

                    <li className='nav_but text-light'><Link to="Search"><span className='text-light'>search</span></Link></li>
                    <li className='nav_but text-light'><Link to="Addingitem"><span className='text-light'>Add new Item</span></Link></li>
                    <li className='nav_but text-light ' onClick={Logout}>LOGOUT</li>
                    <span className='icon-user text-light '></span>
                  </ul>
                </nav>
              </div>
              <div class="icons">
                <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none" onClick={toggleMenu}><span
                  class="icon-menu"></span></a>
                {isMenuOpen && (
                  <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className=" icon-home text-light"><Link to="/" className='text-light'>Home</Link></li>
                    <li className='nav_but text-light'><Link to ="About" className='text-light'>About</Link></li>

                    <li className='nav_but text-light'><Link to="Search"><span className='text-light'>Search</span></Link></li>
                    <li className='nav_but text-light'><Link to="Addingitem"><span className='text-light'>Add new Item</span></Link></li>
                    <li className='nav_but text-light'onClick={Logout}>LogOut</li>
                    <span className='icon-user '></span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </>
  )}
  else{
    return (

      <>
        <div class="site-wrap">
          
          <div class="site-navbar py-2 bg-secondary">
  
         
  
            <div class="container  ">
  
              <div class="d-flex align-items-center justify-content-between">
                <div class="logo">
  
                  <div>
  
                    <span className='icon-local_pharmacy sms_logo text-light '></span> <span className='text-uppercase font-weight-bold text-light'>Sheikh Medical Store</span>
                   
                  </div>
                </div>
                <div class="main-nav d-none d-lg-block">
                  <nav class="site-navigation text-right text-md-center" role="navigation">
                    <ul class="site-menu js-clone-nav d-none d-lg-block">
  
                      <li class="active icon-home text-light"><Link to="/"><span className='text-light'>Home</span></Link></li>
                      <li className='nav_but text-light'><Link to="About"><span className='text-light'>About</span></Link></li>
                      
                      <li className='nav_but text-light'><Link to="Login"><span className='text-light'>Login</span></Link></li>
                      
                      <span className='icon-user text-light '></span>
  
  
  
  
  
                    </ul>
                  </nav>
  
                </div>
  
                <div class="icons">
                  <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none" onClick={toggleMenu}><span
                    class="icon-menu"></span></a>
                  {isMenuOpen && (
                    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                      <li class=" icon-home"><Link to="/">Home</Link></li>
                      <li className='nav_but'><Link to="About">About</Link></li>
                     
                      
                      <li className='nav_but'><Link to="Login"><span className='text-light'>Login</span></Link></li>
                      <span className='icon-user '></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
  
          </div>
          
        </div>
      </>
    )
  }
}
export default Nav;
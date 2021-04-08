import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
//import {faCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar , setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth<=960){
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect (() => {
      showButton()
    }, []);

   window.addEventListener('resize', showButton); 

   const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);
    }

   }
  
  window.addEventListener('scroll', changeBackground); 
     
    return (
        <>
          <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar-container">
             <Link to = "/" className="navbar-logo" onClick = {closeMobileMenu}>
              SAMFUBUKI <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick = {handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
            <form action="#">
                <input type="search" class="search-data" placeholder="Search For Products" required />
                <button type="submit" class="fas fa-search"></button>
              </form>
            </li>
              <li className = 'nav-item'>
                <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                Cart <i class="fas fa-shopping-cart"></i>
                </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                WishList <i class="fas fa-heart"></i>
                </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = '/sign-up' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
              
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>} 
            </div>
          </nav>
        </>
    )
}

export default Navbar;
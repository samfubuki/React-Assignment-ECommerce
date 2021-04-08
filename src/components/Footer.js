import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className = "footer-subscription">
                <p className = "footer-subscription-heading">
                    Join our memebership to see the best deals
                </p>
                <p className = "footer-subscription-text">
                  You can unsubscribe any time.
                </p>
                <div className = "input-areas">
                    <form>
                        <input type = "email" name="email" placeholder = "Your Email" className = "footer-input" />
                        <Button buttonStyle = "btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2><Link to='/'>About Us</Link></h2>
         </div>
          <div class='footer-link-items'>
          <h2><Link to='/'>Cancellation  Policy</Link></h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><Link to="/">Privacy Policy</Link></h2>
          </div>
          <div class='footer-link-items'>
          <h2><Link to='/'>Terms and Conditions</Link></h2>
          </div>
        </div>
       </div>
       <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Sam-Fubuki
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SamFubuki © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer

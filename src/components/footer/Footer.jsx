/** @format */

import React from 'react';
import './footer.css';
import { ToastContainer, toast } from 'react-toastify';
const Footer = () => {
  const handleNewsletter = () => {
    window.location.href = `/`;
  };

  return (
    <div className=''>
      <div className='footer'>
        <div className='container'>
          <div className='newsletter'>
            <h2>Subscribe Our Newsletter</h2>
            <div className='form'>
              <input
                className='form-control'
                placeholder='Email here'
              />
              <button
                onClick={handleNewsletter}
                className='btn'>
                Submit
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='footer-about'>
                <h3>About Us</h3>
                <p>
                  We are a new reality in the sector, our desire is to tell
                  through our experiences, our shop is vast both for customers
                  who are approaching the culture of samurai art for the first
                  time and for those who have more experience.
                </p>
              </div>
            </div>
            <div className='col-md-6 col-lg-8'>
              <div className='row'>
                <div className='col-md-6 col-lg-4'>
                  <div className='footer-link'>
                    <h3>Service Area</h3>
                    <a href='/newKatane'>Katans</a>
                    <a href='/armor'>Armors </a>
                    <a href='/helmet'>Helmets</a>
                    <a href='/support'>Supports</a>
                  </div>
                </div>

                <div className='col-md-6 col-lg-4'>
                  <div className='  footer-contact'>
                    <h3>Get In Touch</h3>
                    <p className=''>
                      <i className='fa fa-map-marker-alt'></i>123 Street, New
                      Milan, Italy
                    </p>
                    <p>
                      <i className='fa fa-phone-alt'></i>+012 345 67890
                    </p>
                    <p>
                      <i className='fa fa-envelope'></i>myself@gmail.com
                    </p>
                    <div className='footer-social'>
                      <a href=''>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a href=''>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                      <a href=''>
                        <i className='fab fa-youtube'></i>
                      </a>
                      <a href=''>
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href=''>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container footer-menu'>
          <div className='f-menu'>
            <a href=''>Terms of use</a>
            <a href=''>Privacy policy</a>
            <a href=''>Cookies</a>
            <a href=''>Help</a>
            <a href=''>FQAs</a>
          </div>
        </div>
        <div className='container copyright'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                &copy; <a href='#'>Your Site Name</a>, All Right Reserved.
              </p>
            </div>
            <div className='col-md-6'>
              <p>
                Designed By <a href='https://htmlcodex.com'>HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Footer;

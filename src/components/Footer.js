import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <footer className="footer-container">
        <div className='resume-wrapper'>
            <a className='resume-link' href='./assets/files/Resume (crypto).pdf' download='jake-walsh-resume' target='_blank'>
                My Resume
            </a>
            <a className='resume-link' href='#' target='_blank'>
                My Porftolio
            </a>
        </div>
        <div class="socials-wrapper">
            <a href="#" className='social-link'>
                <FontAwesomeIcon 
                    icon={faGithub} 
                    className='social-icon github'
                />
            </a>
            <a href="#" className='social-link'>
                <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className='social-icon linkedin'
                />
            </a>
            <a href="#" className='social-link'>
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className='social-icon email'
                />
            </a>
        </div>
        <p className='copyright'>Copyright © 2022 - All rights reserved by Digital Eden Inc. </p>
    </footer>
  );
};
<i class=""></i>
export default Footer;
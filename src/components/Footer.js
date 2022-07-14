import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import resume from "./files/Resume (crypto).pdf";


export default function Footer() {
  return (
    <footer className="footer-container">
        <div className='resume-wrapper'>
            <a className='resume-link' href={resume} download='jake-walsh-resume' target='_blank' rel='noreferrer'>
                My Resume
            </a>
            <a className='resume-link' href='https://jkwalsh127.github.io/my-portfolio-page/' target='_blank' rel='noreferrer'>
                My Porftolio
            </a>
        </div>
        <div class="socials-wrapper">
            <a className='social-link' href="https://github.com/jkwalsh127" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon 
                    icon={faGithub} 
                    className='social-icon github'
                />
            </a>
            <a className='social-link' href="https://www.linkedin.com/in/jake--walsh/" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className='social-icon linkedin'
                />
            </a>
            <a className='social-link' href='mailto:jkwalsh127@gmail.com' target='_blank' rel='noreferrer'>
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
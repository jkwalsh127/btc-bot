import React from 'react';
// import video from './videos/Hero.mp4';
import photo from './images/btc-bot.png';

function Hero() {
  return (
    <div className='hero-container'>
        {/* <video className="video" autoPlay muted>
            <source
            src={photo}
            type="video/mp4"
            />
        </video>   */}
        <img className="video" src={photo} alt="hero" />
        <div className="welcome-wrapper">      
            <p className="welcome-header">
                <span className="highlight-text">BTC</span> bot<br/>
            </p>
            <p className="welcome-subheader">
                "The Workhorse"
            </p>
            <p className="welcome-description">
                This bot is always in a position on Bitcoin.<br />
                Long or short, it never misses a big move.
            </p>
        </div>
    </div>
  );
};

export default Hero;

import video from './videos/btc-bot.mp4';
import photo from './images/btc-bot.png';

function Hero({setPoster, poster}) {
    

  return (
    <div className='hero-container'>
        <video className={`${poster ? "video-hide" : "video-display"}`} autoPlay muted onEnded={() => setPoster(true)}>
            <source
                src={video}
                type="video/mp4"
            />
        </video>  
        <img className={`${poster ? "image-display" : "image-hide"}`} src={photo} alt="hero" />
        <div className={`${poster ? "welcome-wrapper-poster" : "welcome-wrapper"}`}>      
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

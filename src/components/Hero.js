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
        </div>
    </div>
  );
};

export default Hero;

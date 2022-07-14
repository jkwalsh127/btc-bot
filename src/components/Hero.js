import video from './videos/btc-bot.mp4';
import photo from './images/btc-bot.png';

function Hero({setPoster, poster}) {
    

  return (
    <div className='hero-container'>
      <div className={`${poster ? "hero-wrapper-hide" : "hero-wrapper-show"}`}>
        <div className='subheader-wrapper'>
          <h3 className='welcome-subheader'>
            Whether longing or shorting, this strategy <br/>
            is always in position to catch the next big move.
          </h3>
        </div>
      </div>
      <video className={`${poster ? "video-hide" : "video-show"}`} autoPlay muted onEnded={() => setPoster(true)}>
          <source
              src={video}
              type="video/mp4"
          />
      </video>  
      <img className={`${poster ? "image-show" : "image-hide"}`} src={photo} alt="hero" />     
    </div>
  );
};

export default Hero;

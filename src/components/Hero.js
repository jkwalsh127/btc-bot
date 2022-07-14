import video from './videos/btc-bot.mp4';
import photo from './images/btc-bot.png';

function Hero({setPoster, poster}) {
    

  return (
    <div className='hero-container'>
      <div className={`${poster ? "hero-wrapper-hide" : "hero-wrapper-show"}`}>
        <h2>
          <h2 className='welcome-header'>
            The <span className="highlight-text">Workhorse</span>.
          </h2>
          <h3 className='welcome-subheader'>
            Whether longing or shorting, this bot <br/>
            is always in position to catch the next big move.
          </h3>
        </h2>
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

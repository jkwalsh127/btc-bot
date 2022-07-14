import React from 'react';
import photo from './images/btc-bot-results.png';
import Footer from './Footer';

function Info() {
  return (
    <div className="info-container">
      <div className='info-wrapper'>
        <div className='backtest-wrapper'>
          <img className="backtest-results" src={photo} alt="backtest results" /> 
        </div>
          <p className='description-paragraph'>
            <span className="name-highlight font-info-header">Bitcoin</span>
            <span className="custom-header font-info-header"> trading bot.</span>
          </p>
          <p className='description-paragraph font-paragraph'>
            This script is all about staying on the right side of history.
          </p>
          <p className='description-paragraph font-paragraph'>
            Powered by a high-latency algorithm that uses the same signals to flip between longs and shorts, this bot is built with the main purpose of always being in the right position for long-term trends. In practice, this means that the position the bot takes will flip at a relatively quicker rate during times of sideways price movement, but all in an effort to be in a position that capitalizes on prolonged periods of significant growth or decay.
          </p>
          <p className='description-paragraph font-paragraph'>
            Running with <span className='highlight'>BTC</span> on a daily time-frame, the average time spent in a position is 19 days. While this is certainly a patient bot, we can tell that it is also selective by the fact that it spends an average of <span className='highlight'>32 days</span> in winning trades, while only being in losing trades for an average of 10. Furthermore, winning trades are, on average, more than <span className='highlight'>3 times greater</span> than losing trades, despite the win/loss ratio being a nearly even <span className='highlight'>45/55</span> split.
          </p>
          <p className='description-paragraph font-paragraph'>
            The script is shown operating full-time from June of 2018 to June of 2022. During this 4 year period, Bitcoin produced a Buy and Hold return of 202%, while this algorithm produced a net profit of <span className='highlight'>3,480%</span>. This outperforms the asset by over <span className='highlight'>17x</span>. Not to mention, at the time of this publishing, the script has been sitting in a short for over 3 months and is currently up over <span className='highlight'>50%</span> on the position. It is nice to have a hefty slice of your portfolio comfortably positioned during these volatile macro trends.
          </p>
          <p className='description-paragraph font-paragraph'>
            This algorithm runs on the basic principles of a money-flow index, identifying over-sold or over-bought signals with calculations between price and volume. Tuning the inputs to maximize efficiency on this asset, the outputs that are generated are used to simultaneously open shorts when longs are closed, or open longs when shorts are closed. By always being in position on Bitcoin, it won't miss out on capitalizing during the notorious moon and bust cycles.
          </p>
          <p className='description-paragraph font-paragraph'>
            The simplicity of this algorithm is it's beauty. It is always playing Bitcoin one way or the other, and it is always ahead of the game when storms start brewing.
          </p>
      </div>
      <Footer />
    </div>
  );
};

export default Info;

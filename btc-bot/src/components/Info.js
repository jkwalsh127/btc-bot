import React from 'react';
import photo from './images/btc-bot-results.png';

function Info() {
  return (
    <div className="info-container">
      <div className='info-wrapper'>
        <div className='backtest-wrapper'>
          <img className="backtest-results" src={photo} alt="backtest results" /> 
        </div>
          <p className='description-paragraph'>
            <span className="name-highlight">The workhorse.</span><br/>
            This script is all about staying on the right side of history.
          </p>
          <p className='description-paragraph'>
            As a high-latency algorithm that uses the same signals to flip between longs and shorts, it is built with the main purpose of always being in position for long-term trends.This means the position the algorithm takes will flip at a relatively quicker rate during times of sideways price movement, but all in an effort to be in a position that capitalizes on prolonged periods of significant growth or decay.
          </p>
          <p className='description-paragraph'>
            Running with BTC on a daily time-frame, the average time spent in a position is 19 days. While this is certainly a patient bot, we can tell that it is also selective by the fact that it spends an average of 32 days in winning trades, while only being in losing trades for an average of 10. Furthermore, winning trades are, on average, more than 3 times greater than losing trades, despite the win/loss ratio being a nearly even 45/55 split.
          </p>
          <p className='description-paragraph'>
            The script is shown operating full-time from June of 2018 to June of 2022. During this 4 year period, Bitcoin produced a Buy and Hold return of 202%, while this algorithm produced a net profit of 3,480%. This outperforms the asset by over 17x. Not to mention, at the time of this publishing, the script has been sitting in a short for over 3 months and is currently up over 50% on the position. It is nice to have a hefty slice of your portfolio comfortably positioned during these volatile macro trends.
          </p>
          <p className='description-paragraph'>
            This algorithm runs on the basic principles of a money-flow index, identifying over-sold or over-bought signals with calculations between price and volume . Tuning the inputs to maximize efficiency on this asset, the outputs that are generated are used to simultaneously open shorts when longs are closed, or open longs when shorts are closed. By always being in position on Bitcoin , it wont miss out on capitalizing during the notorious moon and bust cycles.
          </p>
          <p className='description-paragraph'>
            The simplicity of this algorithm is its beauty. It is always playing Bitcoin one way or the other, and it is always ahead of the game when storms start brewing.
          </p>
      </div>
    </div>
  );
};

export default Info;

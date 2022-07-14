import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

const Header = ({poster}) => {

  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontSize: isActive ? '24px' : '20px',
  //     textDecoration: isActive ? 'underline' : 'none',
  //     color: isActive ? '#63D471' : '#FFFFFC',
  //   }
  // }

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <header className={`header ${
      small ? "small" : ""
    }`}>

      <div className="title-wrapper">
        <NavLink className={`" ${poster ? "app-title-show" : "app-title-hide"} `} to="/btc-bot/">
          Digital Eden
        </NavLink>
        <NavLink className={` ${poster ? "bot-title-hide" : "bot-title-show"} `} to="/btc-bot/">
          <span className="highlight-text">BTC</span> bot
        </NavLink>
      </div>

    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {

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

      <NavLink className="app-title" to="/btc-bot/">
        Digital Eden
      </NavLink>

      <div className='nav'>
        {/* <NavLink style={navLinkStyles} className="nav-link" to="/btc-bot/">
          Indicators
        </NavLink>
        <NavLink style={navLinkStyles} className="nav-link" to="/btc-bot/">
          Algorithms
        </NavLink>
        <NavLink style={navLinkStyles} className="nav-link" to="/btc-bot/">
          Blog
        </NavLink>
        <NavLink style={navLinkStyles} className="nav-link" to="/btc-bot/">
          About Us
        </NavLink> */}
      </div>

    </header>
  );
};

export default Header;

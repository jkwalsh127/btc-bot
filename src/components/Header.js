import React, { useEffect, useState } from "react";

const Header = () => {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <header className={`header ${ small ? "small" : ""}`}>

      <div className="title-wrapper">
        <h1 className="bot-title-show" to="/btc-bot/">
          <span className="highlight-text">BTC</span> bot
        </h1>
      </div>

    </header>
  );
};

export default Header;

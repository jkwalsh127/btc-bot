import React, { useEffect, useState } from "react";

const Header = ({poster}) => {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 1)
      );
    }
  }, []);

  return (
    <header className={`header ${poster && small ? "small" : ""}`}>

      <div className="title-wrapper">
        <h1 className={` ${poster ? "bot-title-show" : "bot-title-hide"} `} to="/btc-bot/">
          <span className="highlight-text">BTC</span> bot
        </h1>
      </div>

    </header>
  );
};

export default Header;

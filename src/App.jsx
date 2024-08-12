import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Title from "./Components/title";
import CookieButton from "./Components/cookie_button";
import MultiplierUpgrade from "./Components/multiplier";
import BakersUpgrade from "./Components/baker";

function App() {
  const [cookieCount, setCookieCount] = useState(
    () => parseInt(localStorage.getItem("cookieCount")) || 0
  );
  const [cookiesPerSecond, setCookiesPerSecond] = useState(
    () => parseInt(localStorage.getItem("cookiesPerSecond")) || 0
  );
  const [multiplier, setMultiplier] = useState(
    () => parseInt(localStorage.getItem("multiplier")) || 1
  );

  const handleCookieClick = useCallback(() => {
    setCookieCount((cookieCount) => {
      const newCookiecount = cookieCount + (multiplier || 1);
      localStorage.setItem("cookieCount", newCookiecount);
      return newCookiecount;
    });
  }, [multiplier]);

  const handleReset = useCallback(() => {
    setCookieCount(0);
    setCookiesPerSecond(0);
    setMultiplier(1);

    localStorage.setItem("cookieCount", 0);
    localStorage.setItem("cookiesPerSecond", 0);
    localStorage.setItem("multiplier", 1);
  }, []);
  const purchaseUpgrade = (upgrade_option, cost) => {
    setCookieCount((Count) => {
      if (Count < cost) return Count;

      const newCount = Count - cost;
      localStorage.setItem("cookieCount", newCount);

      if (upgrade_option === "multiplier") {
        setMultiplier((currentMultiplier) => {
          const newMultiplier = currentMultiplier + 1;
          console.log("newMultiplier =", newMultiplier);
          localStorage.setItem("multiplier", newMultiplier);
          return newMultiplier;
        });
      } else if (upgrade_option === "bakers") {
        setCookiesPerSecond((currentCPS) => {
          const newCPS = currentCPS + 1;
          console.log("newCPS =", newCPS);
          localStorage.setItem("cookiesPerSecond", newCPS);
          return newCPS;
        });
      }

      return newCount;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCookieCount((prevCount) => {
        const newCount = prevCount + cookiesPerSecond;
        localStorage.setItem("cookieCount", newCount);
        return newCount;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cookiesPerSecond]);

  useEffect(() => {
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
  }, [cookiesPerSecond]);

  return (
    <>
      <div>
        <Title onReset={handleReset} />
      </div>
      <div id="page">
        <div id="row1">
          <CookieButton onClick={handleCookieClick} />
          <div id="stats">
            <p id="cookie-count">Cookie count: {cookieCount}</p>
            <hr />
            <p id="cookies-per-second">
              Cookies per second: {cookiesPerSecond}
            </p>
          </div>
        </div>
        <div id="row2">
          <MultiplierUpgrade
            multiplier={multiplier}
            onPurchase={purchaseUpgrade}
          />
          <BakersUpgrade
            cookiesPerSecond={cookiesPerSecond}
            onPurchase={purchaseUpgrade}
          />
        </div>
      </div>
    </>
  );
}

export default App;

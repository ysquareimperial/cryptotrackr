import React, { useState, useEffect } from "react";
import { getLowCoins } from "../api";
import CoinItem from "./CoinItem";

const LowPerformers = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getLowCoins().then(setCoins);
  }, []);

  return (
    <div>
      <h2>Low Performers</h2>
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default LowPerformers;

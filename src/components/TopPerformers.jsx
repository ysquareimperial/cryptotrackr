import React, { useState, useEffect } from "react";
import { getTopCoins } from "../api";
import CoinItem from "./CoinItem";

const TopPerformers = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getTopCoins().then(setCoins);
  }, []);

  return (
    <div>
      {JSON.stringify(coins)}
      <h2>Top Performers</h2>
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default TopPerformers;

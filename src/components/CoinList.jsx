import React, { useState, useEffect } from "react";
import { getCoinData } from "../api";
import CoinItem from "./CoinItem";
const CoinList = ({ searchQuery }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      getCoinData(searchQuery).then(setCoins);
    }
  }, [searchQuery]);

  return (
    <div>
      {coins?.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;

import React from 'react';

const CoinItem = ({ coin }) => {
  return (
    <div>
      <h2>{coin.name}</h2>
      <p>{coin.priceUsd} USD</p>
    </div>
  );
};

export default CoinItem;

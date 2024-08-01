import React, { useState, useEffect } from "react";
import { getTopCoins } from "../api";
import CoinItem from "./CoinItem";
import { Card, Col, Row, Table } from "reactstrap";

const TopPerformers = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getTopCoins().then(setCoins);
  }, []);

  return (
    <div>
      {/* {JSON.stringify(coins)} */}
      {/* <h2>Top Performers</h2> */}
      <>
        {/* <CoinItem key={coin.id} coin={coin} /> */}
        <Row className="m-0">
          <Col md={1}></Col>
          <Col md={10}>
            <Card className="p-3">
              <Table responsive style={{ fontSize: 14 }} striped>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>VWAP(24Hrs)</th>
                    <th>Supply</th>
                    <th>Volume(24Hrs)</th>
                    <th>Change(24Hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.rank}</td>
                      <td>
                        {item.name} <br />{" "}
                        <span className="text-secondary">{item.symbol}</span>
                      </td>
                      <td>{item.priceUsd}</td>
                      <td>{item.marketCapUsd}</td>
                      <td>{item.vwap24Hr}</td>
                      <td>{item.supply}</td>
                      <td>{item.volumeUsd24Hr}</td>
                      <td>{item.changePercent24Hr}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </>
    </div>
  );
};

export default TopPerformers;

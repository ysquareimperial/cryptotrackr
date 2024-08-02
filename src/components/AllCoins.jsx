import React, { useState, useEffect } from "react";
import { getTopCoins } from "../api";
import {
  Card,
  Col,
  Row,
  Table,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { BsBell, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import numeral from "numeral";
import "../App.css";
import { BiBell, BiSolidBell } from "react-icons/bi";

const AllCoins = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    getTopCoins().then(setCoins);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
    borderColor: isDarkTheme ? "#444" : "#ddd",
  };

  const rowThemeStyles = {
    backgroundColor: isDarkTheme ? "#444" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };
  const button = {
    backgroundColor: "black",
  };
  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#222" : "#f7f7f7",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Row className="m-0">
        <Col md={1}></Col>
        <Col md={10}>
          <Card className="p-3" style={themeStyles}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h1 style={{ fontWeight: "bold", fontSize: 50 }}>
                  CryptotrackR
                </h1>
              </div>
              <div>
                <BiSolidBell size={22} />

                <button className="bell" onClick={toggleTheme}>
                  {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
              </div>
            </div>
            <InputGroup className="mb-3">
              <InputGroupText style={themeStyles}>
                <FaSearch />
              </InputGroupText>
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                style={themeStyles}
              />
            </InputGroup>
            <table responsive style={{ fontSize: 14 }} striped>
              <thead style={themeStyles}>
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
                {filteredCoins.map((item) => (
                  <tr key={item.id} style={rowThemeStyles}>
                    <td>{item.rank}</td>
                    <td>
                      {item.name} <br />{" "}
                      <span className="text-secondary">{item.symbol}</span>
                    </td>
                    <td>${numeral(item.priceUsd).format("0,0.00")}</td>
                    <td>
                      $
                      {numeral(item.marketCapUsd).format("0.00a").toUpperCase()}
                    </td>
                    <td>${numeral(item.vwap24Hr).format("0,0.00")}</td>
                    <td>
                      ${numeral(item.supply).format("0.00a").toUpperCase()}
                    </td>
                    <td>
                      $
                      {numeral(item.volumeUsd24Hr)
                        .format("0.00a")
                        .toUpperCase()}
                    </td>
                    <td
                      style={{
                        color:
                          parseFloat(
                            numeral(item.changePercent24Hr).format("0.00")
                          ) >= 0
                            ? "lightgreen"
                            : "red",
                      }}
                    >
                      {numeral(item.changePercent24Hr).format("0.00")}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
};

export default AllCoins;

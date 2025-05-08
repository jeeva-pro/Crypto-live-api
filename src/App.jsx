import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "./api";
import { sortCoins } from "./selectors"; 
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./App.css";

const SORT_OPTIONS = [
  { label: "Top Gainers (24h)", value: "gainers" },
  { label: "Top Losers (24h)", value: "losers" },
  { label: "Market Cap", value: "market_cap" },
  { label: "Price", value: "current_price" },
];

function App() {
  const [coins, setCoins] = useState([]);
  const [sortOption, setSortOption] = useState(() =>
    localStorage.getItem("sortOption") || "market_cap"
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchCryptoData();
        setCoins(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    loadData();
    const interval = setInterval(loadData, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("sortOption", sortOption);
  }, [sortOption]);

  const sortedCoins = sortCoins(coins, sortOption);
  const bitcoin = coins.find((c) => c.symbol === "BTCUSDT");
  const bitcoinValue = bitcoin ? (parseFloat(bitcoin.lastPrice) * 10).toLocaleString() : "Loading...";

  return (
    <div className="container">
      <h1>Crypto Watch</h1>

      <div className="filter-bar">
        <label>Sort by: </label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="bitcoin-value">
        <h2>Bitcoin Value (x10): ${bitcoinValue}</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>7d Graph</th>
          </tr>
        </thead>
        <tbody>
          {sortedCoins.slice(0, 10).map((coin, index) => (
            <tr key={coin.symbol}>
              <td>{index + 1}</td>
              <td>
                <img src={`https://cryptoicons.org/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.symbol} width="20" /> {coin.symbol}
              </td>
              <td>${parseFloat(coin.lastPrice).toLocaleString()}</td>
              <td className={parseFloat(coin.priceChangePercent) >= 0 ? "green" : "red"}>
                {parseFloat(coin.priceChangePercent)?.toFixed(2)}%
              </td>
              <td className={parseFloat(coin.priceChangePercent) >= 0 ? "green" : "red"}>
                {parseFloat(coin.priceChangePercent)?.toFixed(2)}%
              </td>
              <td className={parseFloat(coin.priceChangePercent) >= 0 ? "green" : "red"}>
                {parseFloat(coin.priceChangePercent)?.toFixed(2)}%
              </td>
              <td>${(coin.marketCap || 0).toLocaleString()}</td>
              <td>${(coin.volume || 0).toLocaleString()}</td>
              <td>
                <Sparklines data={coin.sparkline} width={100} height={30}>
                  <SparklinesLine
                    color={parseFloat(coin.priceChangePercent) >= 0 ? "#10b981" : "#ef4444"}
                  />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;




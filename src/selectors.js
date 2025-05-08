export const sortCoins = (coins, sortOption) => {
    const sortedCoins = [...coins];
    switch (sortOption) {
      case "gainers":
        return sortedCoins.sort((a, b) => b.priceChangePercent - a.priceChangePercent);
      case "losers":
        return sortedCoins.sort((a, b) => a.priceChangePercent - b.priceChangePercent);
      case "market_cap":
        return sortedCoins.sort((a, b) => b.marketCap - a.marketCap);
      case "current_price":
        return sortedCoins.sort((a, b) => b.lastPrice - a.lastPrice);
      default:
        return sortedCoins;
    }
  };
  
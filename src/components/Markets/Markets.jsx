import { useEffect, useState } from 'react';
import './Markets.css';

const Markets = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      const result = await response.json();

      // Get the first 10 items
      const first10Coins = result.slice(0, 10);
      setCoins(first10Coins);
    };

    fetchData();
  }, []);



  return (
    <div className='markets'>
      <div className="market_heading">
        <h1>Markets</h1>
        <p>Markets for a wide range of market participants.</p>
        <div className="list_container">
          {coins.map((coin) => (
            <div key={coin.id} className="market_item">
              <span>
                <p>Name</p>
                <span id='list_flex'>
                  <img id='listimg' src={coin.image} alt={coin.name} width={50} height={50} />
                  <p>{coin.name.slice(0, 3)} ({coin.symbol.toUpperCase()})</p>
                </span>
              </span>

              <span>
                <p>Price</p>
                <p>${coin.current_price.toFixed(2)}</p>
              </span>

              <span>
                <p>Change</p>
                <p id='price'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
              </span>

              <span>
                <p>24h Volume</p>
                <p>${coin.total_volume.toLocaleString()}</p>
              </span>

              <button>Trade</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Markets;

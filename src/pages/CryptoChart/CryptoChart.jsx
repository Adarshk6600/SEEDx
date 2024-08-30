import React, { useEffect } from 'react';

const CryptoChart = () => {
  useEffect(() => {
    // Dynamically load the TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the TradingView widget once the script is loaded
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: 'BINANCE:IOTAUSD',
        interval: 'D',
        timezone: 'Europe/Zurich',
        theme: 'Dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: [
          'RSI@tv-basicstudies',
          'StochasticRSI@tv-basicstudies',
        ],
        container_id: 'tradingview_74048',
      });
    };

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: '500px', margin: '0px 10px', width: '55vw' }}>
      <div id="tradingview_74048" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default CryptoChart;

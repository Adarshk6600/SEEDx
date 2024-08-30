import React, { useState, useEffect } from 'react';
import './PopUp.css';
import { IoSearch } from "react-icons/io5";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import Table from '../TableHistory/Table';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCoin, setCoinsList } from '../../app/Store/reducers/coinReducer';

const PopUp = ({ setpopup }) => {
  const { coins } = useSelector(state => state.coins);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      dispatch(setCoinsList(result));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRowClick = (coin) => {
    dispatch(setActiveCoin(coin));
  };

  return (
    <div className='popup'>
      <div className="popup_heading">
        <h2>Select a Token</h2>
        <span onClick={setpopup}><h3>X</h3></span>
      </div>
      <div className="popup_input">
        <div className='inputpop'>
          <IoSearch size={20} style={{ color: 'gray' }} />
          <input type="text" placeholder='Search By Coin Name...' />
        </div>
      </div>
      <div className="popuplist">
        {error && <div>Error: {error.message}</div>}
        <table>
          <thead>
            <tr>
              <th>
                <span><p>Pairs</p></span>
                <div className='listthicon'>
                  <FaSortUp className='iconth' />
                  <FaSortDown className='iconth' />
                </div>
              </th>
              <th>
                <span><p>Price</p></span>
                <div className='listthicon'>
                  <FaSortUp className='iconth' />
                  <FaSortDown className='iconth' />
                </div>
              </th>
              <th>
                <span><p>24H Change</p></span>
                <div className='listthicon'>
                  <FaSortUp className='iconth' />
                  <FaSortDown className='iconth' />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((item) => (
              <tr key={item.id} onClick={() => handleRowClick(item)} style={{ cursor: 'pointer' }}>
                <Table
                  className='tdfont'
                  image={item.image}
                  data={item.name}
                  data2={`$${item.current_price.toLocaleString()}`}
                  data3={`${item.price_change_percentage_24h.toFixed(2)}%`} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PopUp;

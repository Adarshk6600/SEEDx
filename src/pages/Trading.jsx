import './Trading.css';
import Footer from '../components/Footer/Footer';
import CryptoChart from './CryptoChart/CryptoChart';
import TradingHeader from '../components/TradingHeader/TradingHeader';
import History from '../components/TableHistory/History';
import Button from '../components/Button.jsx/Button';
import InputBox from '../components/InputBox/InputBox';
import InputRange from '../components/Input Range/InputRange';
import TabNavigation from '../components/TabNav/TabNavigation';
import Heading from '../components/TableHistory/Heading';
import Table from '../components/TableHistory/Table';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../app/Store/reducers/userSlice'

const Trading = () => {

  const dispatch = useDispatch()
  // State to keep track of which button is active
  const [activeButton, setActiveButton] = useState(null);


  // Function to handle button clicks and set the active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const { authToken } = useSelector((state) => state.user)
  const [error, setError] = useState(null);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/Trading', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          dispatch(logOut());

        }
      }

      const result = await response.json();
      console.log(result, "result")
      // setData(result);
    } catch (error) {
      // setError(error.message);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);

  return (
    <>
      <TradingHeader />
      <div className='chart'>
        <CryptoChart />
        <div className="left_section">
          <div className="section1">
            <History />
          </div>
          <div className="trading_right_section">
            <div className="buttons">
              <Button
                onClick={() => handleButtonClick('Buy')}
                isActive={activeButton === 'Buy'}
                color='#00bd84' // Green color for Buy button
                name='Buy'
              />
              <Button
                onClick={() => handleButtonClick('Sell')}
                isActive={activeButton === 'Sell'}
                color='red' // Red color for Sell button
                name='Sell'
              />
            </div>
            <div className='limit'>
              <p>Limit</p>
              <select name="" id="">
                <option value="Limit">Limit</option>
                <option value="Market">Market</option>
              </select>
            </div>

            <div className="balance">
              <p>Avbl :</p>
              <label htmlFor="">0.00INRx</label>
            </div>

            <div className="input-trading">
              <InputBox name='Price' />
            </div>
            <div className="input-trading">
              <InputBox name='Amount' val1='0' val2='SEEDx' />
            </div>

            <div className='input-trading'>
              <InputRange />
            </div>

            <div className="input-trading">
              <InputBox name='Amount' val1='0' val2='SEEDx' />
            </div>
            <div className="input-trading">
              <button id='mainButton-trading'>Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>

      <div className="navtabs">
        <TabNavigation />
        <div className="next-left">
          <Heading Heading='Trade History' />
          <Table title='Price (INRx)' title2='Size (SEEDx)' title3='Time' />
        </div>

        <div className="navdetails">
          <Heading Heading='Currency Details' />
          <div className='dets1'>
            <p>Name</p>
            <p>Symbol</p>
            <p>Supply</p>
            <p>Decimal</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trading;

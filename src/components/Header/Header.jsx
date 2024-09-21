import './Header.css';
import { IoSearch } from "react-icons/io5";
import svg from '../../assets/seedx.svg';
import { FaSortDown } from "react-icons/fa";
import { useState } from 'react';
import WalletComp from '../WalletComp/WalletComp';
import ProfilePage from '../profilePage/ProfilePage';
import Web3 from 'web3';
import { useSelector } from 'react-redux';

const Header = () => {
  const [walletClick, setWalletClick] = useState(false);
  const [inrpopup, setInrpopup] = useState(false);
  const [account, setAccount] = useState(null);


  const {
    username,
    age,
    jobTitle,
    email,
    isAuthenticated, } = useSelector(state => state.user);

  const handleInr = () => {
    setInrpopup(prev => !prev);
  };

  const handleWalletClick = () => {
    setWalletClick(prev => !prev);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      console.error("MetaMask is not installed. Please install it to use this app.");
    }
  };

  return (
    <header>
      <div className="searchBox">
        <IoSearch /> <input type="text" placeholder='Type here to search....' />
      </div>
      <div className='wall-con'>
        <span className='signUpProfilebtn'>
          <h1 style={{
            fontSize: '20px',
            fontWeight: 'light',
            padding: '5px',
            background: 'orange',
            height: '25px',
            width: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%'
          }}>{username?.charAt(0) || 'A'}</h1>
        </span>
        <div className="wallet">
          <img src={svg} alt="SEEDx" />
          <p className="price"></p>
          <p>INR <FaSortDown id='buttonInr' onClick={handleInr} size={15} /></p>
          <div className={inrpopup ? 'inrpopup showInr' : 'inrpopup'}>
            <div className="currency-info">
              <div className="currency-item">
                <span className="currency-label">INR</span>
                <span className="currency-value">₹</span>
              </div>
              <div className="currency-item">
                <span className="currency-label">USD</span>
                <span className="currency-value">₹</span>
              </div>
            </div>
          </div>
        </div>
        <button style={{ maxWidth: '140px', overflow: 'hidden' }} id='walletBtn' onClick={handleWalletClick}>
          {account ? account : 'Connect Wallet'}
        </button>
      </div>
      <div className={walletClick ? 'walletPopUp walletShowPopup' : 'walletPopUp'}>
        <ProfilePage account={account} handleWalletClick={handleWalletClick} />
        <WalletComp account={account} connectWallet={connectWallet} />
      </div>
    </header>
  );
};

export default Header;

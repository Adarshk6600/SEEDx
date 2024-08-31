import './Header.css'
import { IoSearch } from "react-icons/io5";
import svg from '../../assets/seedx.svg'
import { FaSortDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import WalletComp from '../WalletComp/WalletComp';
import ProfilePage from '../profilePage/ProfilePage'
import Web3 from 'web3';


const Header = () => {

  const [walletClick, setWalletClick] = useState(true);
  const [inrpopup, setInrpopup] = useState(true)
  const [account, setAccount] = useState(null);

  const handleInr = () => {
    setInrpopup(prev => !prev)
  }

  const handleWalletClick = () => {
    setWalletClick(prev => !prev)
  }


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]); // Set the first account to the state
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      console.error("MetaMask is not installed. Please install it to use this app.");
    }
  };


  const handleLogOutClick = () => {
    setAccount(null)
  }


  return (
    <header>
      <div className="searchBox">
        <IoSearch /> <input type="text" placeholder='Type here to search....' />
      </div>
      <div className='wall-con'>
        <div className="wallet">

          <img src={svg} alt="SEEDx" />
          <p className="price"></p>
          <p>INR <FaSortDown id='buttonInr' onClick={handleInr} size={15} /></p>
          <div className={inrpopup ? 'inrpopup showInr' : 'inrpopup'}>
            <div>
              <span><p>INR</p></span> <span><p><h5>₹</h5></p></span>
            </div>
            <div>
              <span><p>USD</p></span> <span><p>₹</p></span>
            </div>
          </div>
        </div>
        <button style={{ maxWidth: '140px', overflow: 'hidden' }} id='walletBtn' onClick={handleWalletClick}>{account ? account : 'Connect Wallet'}</button>
      </div>
      <div onClick={handleWalletClick} className={walletClick ? 'walletPopUp walletShowPopup' : 'walletPopUp'}>
        {account ? <ProfilePage account={account} handleLogOutClick={handleLogOutClick} id={account ? 'hideProfile' : 'showProfile'} /> : <WalletComp connectWallet={connectWallet} />}
      </div>
    </header>
  )
}

export default Header

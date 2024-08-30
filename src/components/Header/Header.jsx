import './Header.css'
import { IoSearch } from "react-icons/io5";
import svg from '../../assets/seedx.svg'
import { FaSortDown } from "react-icons/fa";
import { useState } from 'react';
import WalletComp from '../WalletComp/WalletComp';
import { useSelector } from 'react-redux';

const Header = () => {

  const [walletClick, setWalletClick] = useState(true);
  const [inrpopup, setInrpopup] = useState(true)


  const handleInr = () => {
    setInrpopup(prev => !prev)
  }

  const handleWalletClick = () => {
    setWalletClick(prev => !prev)
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
        <button id='walletBtn' onClick={handleWalletClick}>Connect Wallet</button>
      </div>
      <div className={walletClick ? 'walletPopUp walletShowPopup' : 'walletPopUp'}>
        <WalletComp clickFunction={handleWalletClick} />
      </div>
    </header>
  )
}

export default Header

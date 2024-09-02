import './ProfilePage.css'
import { IoIosLogOut } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";





import React from 'react'

const ProfilePage = ({ handleLogOutClick, account }) => {
  return (
    <div className='profilePage'>

      <div className="signUpWindow">
        
       </div>

      <div className="profileHeader">
        <div>
          <img src='https://seedx.app/image/seedx.svg' alt="SEEDx" />
          <p className='overflowProfileAcc'>{account}
          </p><FaCopy size={20} />

        </div>
        <IoIosLogOut onClick={handleLogOutClick} size={25} />
      </div>

      <h1 className='Walletmoney'>$ 0</h1>

      <div className="walletcards">
        <div>
          <FaWallet size={20} style={{ color: '#f183a8' }} /> <br />
          <p>Buy</p>

        </div>
        <div>
          <GrGallery size={20} style={{ color: '#f183a8' }} /> <br />
          <p>View NFTs</p>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage;
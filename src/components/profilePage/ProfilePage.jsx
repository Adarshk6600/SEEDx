import './ProfilePage.css'
import { IoArrowBack } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import SignUp from '../SignUp/SignUp'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const ProfilePage = ({ account, handleWalletClick }) => {
  const {
    username,
    age,
    jobTitle,
    email,
    isAuthenticated,
  } = useSelector(state => state.user);
  const [ProfileMenu, setProfileMenu] = useState(false)

  const handleClickProfileMenu = () => {
    setProfileMenu(prev => !prev)
  }

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
        <IoArrowBack id='btnShowArrowBack' onClick={handleWalletClick} size={25} />
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

      {!isAuthenticated && <div id='signUpProfileBtn' onClick={handleClickProfileMenu} >
        <p>Sign In</p> <CgProfile size={20} />
      </div>}
      <div className={ProfileMenu ? 'showProfilePage' : 'ShowSignUpProfile'}>
        <SignUp isAuthenticated={isAuthenticated}  handleClickProfileMenu={handleClickProfileMenu} setProfileMenu={setProfileMenu} />
      </div>
    </div>
  )
}

export default ProfilePage;
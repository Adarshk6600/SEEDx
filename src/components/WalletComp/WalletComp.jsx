import './WalletComp.css'

import React from 'react'

const WalletComp = ({ clickFunction }) => {
  return (
    <div className='wallet_comp' onMouseLeave={clickFunction} >

      <h3 onClick={clickFunction} >
        Connect a Wallet
      </h3>
      <div className='wallet_wrapper'>
        <h5>
          Recommended
        </h5>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="wallet_footer">
          <h5>New to Ethereum wallets?</h5>
          <h5>Learn More</h5>
        </div>
      </div>

    </div>
  )
}

export default WalletComp

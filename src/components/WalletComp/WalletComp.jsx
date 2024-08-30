import './WalletComp.css'
import Web3 from 'web3';
import axios from 'axios';
import React, { useState } from 'react'

const WalletComp = ({ clickFunction }) => {

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Get the connected accounts
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        // Fetch the account balance
        const balanceWei = await web3.eth.getBalance(accounts[0]);
        const balanceEth = Web3.utils.fromWei(balanceWei, 'ether');
        setBalance(balanceEth);

        // Fetch transaction history (Example using Etherscan API)
        const etherscanApiKey = 'YOUR_ETHERSCAN_API_KEY';
        const response = await axios.get(`https://api.etherscan.io/api`, {
          params: {
            module: 'account',
            action: 'txlist',
            address: accounts[0],
            startblock: 0,
            endblock: 'latest',
            sort: 'desc',
            apikey: etherscanApiKey
          }
        });
        console.log(response);

        setTransactions(response.data.result);
      } catch (err) {
        console.error('Error occurred:', err);
        setError('Error connecting to MetaMask or fetching data');
      }

    } else {
      setError('MetaMask is not installed');
    }
  };



  return (
    <div className='wallet_comp' onMouseLeave={clickFunction} >

      <h3 onClick={clickFunction} >
        Connect a Wallet
      </h3>
      <div className='wallet_wrapper'>
        <h5>
          Recommended
        </h5>

        <div className='metamask'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZaVpfhv3kgZA46GoqfVNIFhR6pXIdX4_Rg&s" alt="" /><h1 onClick={connectMetaMask}>MetaMask</h1>
          <div className="seeprofile"></div>
        </div>
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

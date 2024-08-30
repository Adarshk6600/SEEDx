import './WalletComp.css';
import Web3 from 'web3';
import axios from 'axios';
import React, { useState } from 'react';

const WalletComp = ({ clickFunction }) => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setLoading(true);
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

        // Fetch transaction history (using Etherscan API)
        const etherscanApiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
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

        setTransactions(response.data.result);
      } catch (err) {
        console.error('Error occurred:', err);
        setError('Error connecting to MetaMask or fetching data');
      } finally {
        setLoading(false);
      }
    } else {
      setError('MetaMask is not installed');
    }
  };

  return (
    <div className='wallet_comp' onMouseLeave={clickFunction}>
      <h3 onClick={clickFunction}>Connect a Wallet</h3>
      <div className='wallet_wrapper'>
        <h5>Recommended</h5>

        <div className='metamask'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZaVpfhv3kgZA46GoqfVNIFhR6pXIdX4_Rg&s" alt="MetaMask Logo" />
          <h1 onClick={connectMetaMask}>MetaMask</h1>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          account && (
            <div>
              <p>Account: {account}</p>
              <p>Balance: {balance} ETH</p>
              <div className="transaction-list">
                <h5>Transactions:</h5>
                <ul>
                  {transactions.map(tx => (
                    <li key={tx.hash}>
                      Hash: {tx.hash} - From: {tx.from} - To: {tx.to} - Value: {Web3.utils.fromWei(tx.value, 'ether')} ETH
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}

        <div className="wallet_footer">
          <h5>New to Ethereum wallets?</h5>
          <h5>Learn More</h5>
        </div>
      </div>
    </div>
  );
}

export default WalletComp;

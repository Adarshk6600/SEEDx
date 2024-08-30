import { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const webInstance = new Web3(window.ethereum);
      setWeb3(webInstance);

      // Request account access
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => setAccount(accounts[0]))
        .catch(err => {
          console.error('Failed to connect to MetaMask:', err);
          setError('Failed to connect to MetaMask');
        });
    } else {
      setError('MetaMask is not installed');
    }
  }, []);

  return (
    <Web3Context.Provider value={{ web3, account, error }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;

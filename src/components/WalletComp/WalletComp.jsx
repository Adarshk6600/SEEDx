import './WalletComp.css';

const WalletComp = ({ clickFunction, connectWallet, connectWalletClick }) => {

  return (
    <div className='wallet_comp' onMouseLeave={clickFunction}>
      <h3 onClick={clickFunction}>Connect a Wallet</h3>
      <div className='wallet_wrapper'>
        <h5>Recommended</h5>

        <div className='metamask'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZaVpfhv3kgZA46GoqfVNIFhR6pXIdX4_Rg&s" alt="MetaMask Logo" />
          <h1 onClick={connectWallet} > Connect MetaMask </h1>
        </div>

        <div className="transaction-list">

        </div>
      </div>

      <div className="wallet_footer">
        <h5>New to Ethereum wallets?</h5>
        <h5>Learn More</h5>
      </div>
    </div>
  );
}

export default WalletComp;

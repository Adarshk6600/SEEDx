import './Trading.css'
import Footer from '../components/Footer/Footer'
import CryptoChart from './CryptoChart/CryptoChart'
import TradingHeader from '../components/TradingHeader/TradingHeader'
import History from '../components/TableHistory/History'
import Button from '../components/Button.jsx/Button'
import InputBox from '../components/InputBox/InputBox'
import InputRange from '../components/Input Range/InputRange'
import TabNavigation from '../components/TabNav/TabNavigation'
import Heading from '../components/TableHistory/Heading'
import Table from '../components/TableHistory/Table'
import WalletComp from '../components/WalletComp/WalletComp'



const Trading = (inputB, tableProps) => {
  return (
    <>
      <TradingHeader />
      <div className='chart'>

        <CryptoChart />
        <div className="left_section">
          <div className="section1">
            <History />
          </div>
          <div className="trading_right_section">

            <div className="buttons">
              <Button name='Buy'></Button>
              <Button name='Sell' backgroundColor='#2a2a2a'></Button>
            </div>
            <div className='limit'>
              <p>Limit</p> <select name="" id="">
                <option value="Limit">Limit</option>
                <option value="Market">Market</option>
              </select>
            </div>

            <div className="balance">
              <p>Avbl :</p> <label htmlFor="">0.00INRx</label>
            </div>

            <div className="input">
              <InputBox name='Price' />
            </div>
            <div className="input">
              <InputBox name='Amount' val1='0' val2='SEEDx' />
            </div>

            <div className='input'>
              <InputRange />
            </div>

            <div className="input">
              <InputBox name='Amount' val1='0' val2='SEEDx' />
            </div>
            <div className="input">
              <button id='mainButton'>Connect Wallet</button>
            </div>
          </div>
        </div>

      </div>

      <div className="navtabs">
        <TabNavigation />
        <div className="next-left">
          <Heading Heading='Trade History' />
          <Table title='Price (INRx)' title2='Size (SEEDx)' title3='Time' />
        </div>

        <div className="navdetails">
          <Heading Heading='Currency Details' />
          <div className='dets1'>
            <p>Name</p>
            <p>Symbol</p>
            <p>Supply</p>
            <p>Decimal</p>
          </div>
        </div>

      </div>
      <Footer />

    </>
  )
}

export default Trading

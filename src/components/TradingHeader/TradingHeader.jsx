import './TradingHeader.css'
import svg from '../../assets/seedx.svg'
import PopUp from '../PopUp/PopUp';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const TradingHeader = () => {

  const [popup, setPopup] = useState(true)

  const handlepopUp = () => {
    setPopup(prev => !prev)
  }

  const { activeCoin } = useSelector((state) => state.coins)


  const tradingData = [
    { heading: '24H Change', data: 0 },
    { heading: '24H High', data: 0 },
    { heading: '24H Low', data: 0 },
    { heading: '24H Turnover (SEEDx)', data: 0 },
    { heading: '24H Turnover (INRx)', data: 0 }
  ];

  return (
    <div className='trading_header'>
      <div className={popup ? 'cover_popup_show cover_popup' : 'cover_popup'}>
        <PopUp setpopup={handlepopUp} />
      </div>
      <div className='trading_logo' onClick={handlepopUp} >
        <img src={activeCoin?.image || svg} alt="" /> <span><h2>{activeCoin?.symbol || 'SEEDx/INR'}</h2><p>Click to view</p></span>
      </div>
      <div className='trading_data'>
        <span>
          <p className="data2">{activeCoin?.current_price || 0}</p>
          <p className='data2'>2.1</p>
        </span>
        {tradingData.map((item, index) => (
          <span key={index}>
            <p className="data1">{item.heading}</p>
            <p className='data3'>{item.data}</p>
          </span>
        ))}
      </div>
    </div >
  )
}

export default TradingHeader

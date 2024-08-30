import './Cards.css';


const Cards = (props) => {

  return (
    <div className='cards'>
      <h1>{props.h1 || 'GamePad'}</h1>
      <p>{props.p || '$chainLink VRF Powered Decentralize Gaming area for Players'}</p>
      <div className='card'> <div> {props.icon || ''} <h3>{props.heading || ''}</h3> <p>{props.para || 'Luck, VRFs, and multiplied rewards: the essence of decentralized gamings allure.'}</p></div>
        <div> {props.icon || ''} <h3>{props.heading || ''}</h3><p>{props.para || 'Chance, VRFs, and multiplied rewards beckon adventurers to decentralized gamings realm.'}</p></div>
        <div>{props.icon || ''} <h3>{props.heading || ''}</h3><p>{props.para || 'In peer-to-peer games, randomness reigns, where anyone can win limitless treasures.'}
        </p></div>
      </div>
    </div>
  )
}


export default Cards;
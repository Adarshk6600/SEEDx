import './Hero.css'
import svg from '../../assets/seedx.svg'


const Hero = () => {

  let buttons = ['Trade', 'Borrow Luquidity', 'Leverage Swap', 'Liquid Trade', 'SNS NFTs', 'Win BNB']

  return (
    <section className='hero_container'>
      <div className="hero_heading">
        <p>A Complete</p>
        <div className='heading'><h1>Decentralised</h1> <h1>Finance</h1></div>
        <p>The decentralised Finance SEEDx offers traders an innovative method.</p>
        <p>Get rental liquidity for token launches on Amm dex anywhere, : Uniswap, pancakeswap, raydium</p>
        <p>Traders can amplify their positions using borrowed liquidity, maximizing potential returns.</p>
        <span>{buttons.map((button, index) => <button key={index} className='hero_buttons'> {button} </button>)}</span>
      </div>

      <div className="grid">
        <div>🎉 How big are we?</div>
        <div className='gridclass'>
          <span><h1>$1.5B</h1> <p>Total Liquidity Raised</p></span>
          <span><h1>28K</h1> <p>Total Projects</p></span>
          <span> <h1>3.2M</h1> <p>Total Participants</p></span>
          <span><h1>$924.9M</h1> <p>Total Values Locked</p></span>
        </div>
        <div><p> <img src={svg} alt="seedx" /> SEEDx</p> <p>$ 0.025</p></div>
      </div>

    </section>
  )
}

export default Hero

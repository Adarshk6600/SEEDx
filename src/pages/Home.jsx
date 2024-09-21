import './Home.css';
import { AiFillThunderbolt } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';
import Markets from '../components/Markets/Markets';
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';

const Home = () => {
  // Trending coin data
  const links = [
    { id: 1, name: 'SHIB' },
    { id: 2, name: 'Pepe' },
    { id: 3, name: 'SEEDx' },
    { id: 4, name: 'DOGE' },
    { id: 5, name: 'Link' },
    { id: 6, name: 'ETH' },
    { id: 7, name: 'stBNB' },
    { id: 8, name: 'Tron' },
    { id: 9, name: 'Matic' },
    { id: 10, name: 'USDT' }
  ];

  // Use Redux selector to get the current active coin
  const activeCoin = useSelector((state) => state.coins?.activeCoin || 'DefaultCoin');
  const { authToken } = useSelector((state) => state.user)
  console.log(authToken);


  return (
    <>
      <div className='homelinks'>
        <span>
          <AiFillThunderbolt style={{ color: 'gold' }} size={15} /> <p>Trending</p>
        </span>
        <div className="links">
          {links.map((item, index) => {
            const formattedName = `${item.name.substring(0, 3).toUpperCase()}/INRx`;
            return (
              <li key={item.id}>
                #{index + 1} <p>{formattedName}</p>
              </li>
            );
          })}
        </div>
      </div>

      <Hero />
      <Cards h1='Gamepad' />
      <Markets activeCoin={activeCoin} />

      <Cards
        h1='Get more done with SEEDx'
        heading='Launching a Token should be a celebration, not a nightmare.'
        icon={<IoEyeSharp size={40} />}
        p='Launching a Token should be a celebration, not a nightmare.'
        heading='No surprises or hidden fees'
        para="We don't charge anything to list on an exchange, do airdrops, or make tokens."
      />

      <div className="footerbutton">
        <h1>Get Started with Governance</h1>
        <p>Start, grow, and manage SEEDx DAO. We're with you each step of the way.</p>
        <button>Participate Now</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;

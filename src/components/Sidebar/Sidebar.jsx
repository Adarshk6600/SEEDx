import './Sidebar.css'
import { useState } from 'react'
import svg from '../../assets/seedx.svg'
import { RiSwapBoxLine, RiGovernmentLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { SiStockx } from "react-icons/si";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";




const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const onHandleClick = () => {
    setMenuActive(!menuActive);
  };

  const onMenuHover = (index) => {
    setActiveIndex(index);
  };

  const menus = [
    {
      heading: 'Exchange',
      title: 'Trading',
      title2: 'List Your Token',
      icon: <SiStockx size={25} />,
      link: '/Trading',
      link2: '/List-Your-Token'
    },
    {
      heading: 'Swap',
      title: 'Leverage Swap',
      title2: 'Leverage Pool',
      icon: <RiSwapBoxLine size={28} />,
    },
    {
      heading: 'Governance',
      title: 'Seed Dao',
      title2: 'Delegators',
      icon: <RiGovernmentLine size={28} />
    },

    {
      heading: 'Profile',
      title: 'User',
      icon: <CgProfile size={28} />,
      link: '/UserProfilePage'

    }
  ];

  return (
    <aside
      onMouseEnter={onHandleClick}
      className={menuActive ? 'aside-active' : ''}
      onMouseLeave={onHandleClick}
    >
      <div className="sidebar_logo">
        <Link to='/'><img src={svg} alt="SEEDx" /></Link> <h1>SEEDx</h1>
      </div>

      {menus.map((item, index) => (
        <div
          key={index}
          className="sidebar_menu"
          onMouseEnter={() => onMenuHover(index)}
          onMouseLeave={() => onMenuHover(null)}
        >
          <div className="heading">
            <span>{item.icon}</span> <p>{item.heading}</p>
            <span><IoIosArrowDown className={activeIndex === index ? '' : 'span-active'} /></span>
          </div>
          <div className={`show ${activeIndex === index ? 'dropdown' : 'show'}`}>
            <p><Link className='navlink' to={item.link || '#'} >{item.title}</Link></p>
            <p><Link className='navlink' to={item.link2 || '#'}>{item.title2}</Link></p>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;

import React, { useState } from 'react';
import './TabNavigation.css';
import { MdOutlineRefresh } from "react-icons/md";


const TabNavigation = () => {
  const [Nav, setNav] = useState(1)

  const handleonClick = (index) => {
    setNav(index)
  }





  return (
    <div className="tab_navigation">
      <div className='tabss'>
        <div>
          <div onClick={() => handleonClick(1)} className={Nav === 1 ? 'tabs nav-active' : 'tabs'}>Open Orders</div >
          <div onClick={() => handleonClick(2)} className={Nav === 2 ? 'tabs nav-active' : 'tabs'}>Order History</div >
          <div onClick={() => handleonClick(3)} className={Nav === 3 ? 'tabs nav-active' : 'tabs'}>Trade History</div >
          <div onClick={() => handleonClick(4)} className={Nav === 4 ? 'tabs nav-active' : 'tabs'} >Funds</div >
        </div>
        <div className="refresh">
          <div>
            <MdOutlineRefresh />
            <p>Refresh</p>
          </div>
          <div>
            <input type="checkbox" name="" id="" /> <label htmlFor="">Hide Other Pairs</label>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className={Nav === 1 ? 'content1 con showBlock' : 'content1 con'}>adarsh1</div>
        <div className={Nav === 2 ? 'content1 con showBlock' : 'content1 con'}>adarsh2</div>
        <div className={Nav === 3 ? 'content1 con showBlock' : 'content1 con'}>adarsh3</div>
        <div className={Nav === 4 ? 'content1 con showBlock' : 'content1 con'}>adarsh5</div>
      </div>
    </div>
  );
};

export default TabNavigation;

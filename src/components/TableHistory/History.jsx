import React from 'react';
import Table from './Table'
import Heading from './Heading';
import { IoMdArrowDropdown } from "react-icons/io";


const History = (tableProps) => {

  const sampleData = [
    { price: 2.1400, size: 490, total: 1048.6 },
    { price: 2.1099, size: 507, total: 1069.7193 },
    { price: 2.0699, size: 1000, total: 2069.9 },
    { price: 1.9599, size: 570, total: 1117.143 },
    { price: 1.9499, size: 570, total: 1111.443 },
    { price: 1.9399, size: 430, total: 834.157 },
    { price: 1.9299, size: 1000, total: 1929.9 },
    { price: 1.9199, size: 570, total: 1094.34 },
  ];


  return (
    <div className='history_data'>
      <Heading Heading='Order Book' />
      <div className='data_sort'>
        <div>
          <img src="https://seedx.app/image/orderbyboth_dark.png" alt="" />
          <img src="	https://seedx.app/image/orderbybothhori_dark.png" alt="" />
          <img src="	https://seedx.app/image/orderbybuy_dark.png" alt="" />
          <img src="	https://seedx.app/image/orderbysell_dark.png" alt="" />
        </div>
        <div>
          <div>
            <p>0.0001</p> <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      <Table title='Price (INRx)' title2='Size (SEEDx)' title3='Total (INRx)' />
      <div className='total_price'>
        {'2.17'}
      </div>
      <Table />

    </div>
  )
}

export default History;

import React from 'react';
import Table from './Table'
import Heading from './Heading';
import { IoMdArrowDropdown } from "react-icons/io";


const History = (tableProps) => {

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

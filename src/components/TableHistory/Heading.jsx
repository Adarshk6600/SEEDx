import './History.css'

import React from 'react'

const Heading = (props) => {
  return (
    <div className='table_heading'>
      <h1>{props.Heading || 'Name'}</h1>
    </div>
  )
}

export default Heading

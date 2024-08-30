import './InputBox.css'

import React from 'react'

const InputBox = (inputB) => {
  return (

    <div className="wrapper">
      <input type="text" placeholder={inputB.name} />
      <div className='holder'>

        <p>{inputB.val1 || '2.7'}</p>
        <p>{inputB.val2 || 'INRx'}</p>

      </div>
    </div>

  )

}

export default InputBox

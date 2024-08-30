import './Markets.css'

const Markets = () => {
  return (
    <div className='markets'>
      <div className="market_heading">
        <h1>Markets</h1>
        <p>Markets for a wide range of market participants.</p>
        <div className="list_container">

          <div>

            <span>
              <p>Name</p>
              <p>SHIB/INRx</p>
            </span>

            <span>
              <p>Price</p>
              <p>0</p>
            </span>

            <span>
              <p>Change</p>
              <p id='price'>0%</p>
            </span>

            <span>
              <p>24h Volume
              </p>
              <p>0</p>
            </span>

            <button>Trade</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Markets

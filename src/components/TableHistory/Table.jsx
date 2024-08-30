import './History.css'

const Table = (tableProps) => {


  const saveCoinData = () => {

  }

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th> {tableProps.title || null}</th>
            <th className='mid'>{tableProps.title2 || null}</th>
            <th className='right'>{tableProps.title3 || null}</th>
          </tr>
          <tr style={{ cursor: 'pointer' }} onClick={saveCoinData}>
            <td className='tableImage'> <img src={tableProps.image} alt="" /> {tableProps.data || '-'}</td>
            <td className='mid'>{tableProps.data2 || '-'}</td>
            <td className='right'>{tableProps.data3 || '-'}</td>

          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Table



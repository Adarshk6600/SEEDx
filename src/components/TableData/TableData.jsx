import './TableData.css'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect, useState } from 'react';


const getMuiTheme = () => createTheme({
  typography: {
    fontFamily: 'cursive',
  },
  palette: {
    background: {
      paper: '#1e293b',
      default: '#0f1728'
    },
    mode: 'dark'
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: '20px 20px',
        },
        body: {
          padding: '10px 35px'
        },
      }
    }
  }

})


const TableData = () => {

  const [users, setUsers] = useState('')

  const columns = [
    {
      name: 'age',

    },

    {
      name: 'gender',
      options: {
        customBodyRenders: (value) => <p>{value}</p>
      }
    }
  ];


  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])


  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 50]
  };

  return (
    <div className='uiData'>
      <ThemeProvider theme={getMuiTheme()} >
        <MUIDataTable
          title={'age'}
          data={users.name}
          columns={users.name}
          options={options}
        />
      </ThemeProvider>
    </div>
  )
}

export default TableData

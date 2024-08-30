import './App.css'
import Home from './pages/Home'
import Trading from './pages/Trading'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/Store/store'


function App() {


  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Trading' element={<Trading />} />
          </Routes>
         </div>
      </Router>
    </Provider>
  )
}

export default App


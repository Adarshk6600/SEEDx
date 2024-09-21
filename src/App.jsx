import './App.css';
import Home from './pages/Home';
import Trading from './pages/Trading';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/Store/store';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import LoadingScreen from './components/loading/LoadingScreen';
import { useSelector } from 'react-redux';
import AllRoutes from '../AllRoutes';

function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <Router>
          <div className="app">
            <Sidebar />
            <Header />
            <AllRoutes />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

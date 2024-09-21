import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import UserProfilePage from './src/pages/userProfilePage/UserProfilePage';
import Trading from './src/pages/Trading';
import { useSelector } from 'react-redux';
import ErrorPage from './src/components/error/error';

export default function AllRoutes() {
  const { isAuthenticated } = useSelector((state) => state.user)
  return (
    <>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <ErrorPage />} />
        <Route path='/Trading' element={isAuthenticated ? <Trading /> : <ErrorPage />} />
        <Route path='/UserProfilePage' element={<UserProfilePage />} />
      </Routes>
    </>
  )
}

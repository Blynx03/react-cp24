import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

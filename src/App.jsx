import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;

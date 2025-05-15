import React from 'react';
import Home from './pages/Home';
import QuemCuida from './components/QuemCuida';
import AreasDeAtuacao from './components/AreasDeAtuacao';
import './App.css';
import Navbar from './components/Nav';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home />
      <QuemCuida />
      <AreasDeAtuacao/>

    </div>
  );
}

export default App;

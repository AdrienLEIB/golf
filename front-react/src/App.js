import React from 'react';
import './App.css';
//import Login from './pages/Login';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './Routes'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes />
    </div>
  );
}

export default App;
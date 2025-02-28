import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Mainnet } from "./components/Mainnet";
import { Testnet } from "./components/Testnet";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Mainnet />
      <Testnet />
      {/* <Projects /> */}
      
      <Footer />
    </div>
  );
}

export default App;

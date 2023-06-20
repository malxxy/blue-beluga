import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/pages/Main';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='Portfolio'element={<Portfolio />}></Route>
          <Route path='Contact'element={<Contact />}></Route>
          <Route path='Resume'element={<Resume />}></Route>
        </Routes>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

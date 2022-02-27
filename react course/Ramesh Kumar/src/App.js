import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.scss'
import { About } from './components/about/about';
import { Header } from './components/header/header';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Connect } from './components/connect/connect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/connect' element={<Connect/>} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;

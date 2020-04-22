import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Navbar from './componnets/Navbar/Navbar';
import AboutPage from './componnets/AboutPage/AboutPage';
import HomePageContainer from './componnets/HomePage/HomePageContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Route path='/home' render={()=> <HomePageContainer/>}/>
        <Route path='/about' render={()=> <AboutPage/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

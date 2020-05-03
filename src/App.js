import React from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import './index.css';
import Navbar from './componnets/Navbar/Navbar';
import AboutPage from './componnets/AboutPage/AboutPage';
import HomePageContainer from './componnets/HomePage/HomePageContainer';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <div className='container'>
          <Route path='/' render={ ()=> <Redirect to={"/home"}/>} />
          <Route path='/home' render={()=> <HomePageContainer/>}/>
          <Route path='/about' render={()=> <AboutPage/>}/>
        </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;

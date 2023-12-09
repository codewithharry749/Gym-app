import React, { useState } from 'react';
import './App.css';
import NavBar from './Pages/NavBar';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Classes from './Components/Classes'
import Fitness from './Components/Fitness'
import Schedules from './Components/Schedules'
import Error from './Components/Error'
import Contact from "./Components/Contect"
import Primium_card from './Pages/Membership/Primium_card';


function App() {




  return (
    <div className="App">
      <NavBar />
     
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/schedule' element={<Schedules />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/primium' element={<Primium_card />} />

        <Route path='*' element={<Error />} />

      </Routes>

    </div>
  );
}

export default App;

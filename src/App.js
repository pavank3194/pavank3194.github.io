import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/main';

const App = () => {
  return (
    <div>
      <Main/>
      <BrowserRouter basename='/pavank3194.github.io'>
      <Routes>
      <Route exact path='/pavank3194.github.io' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/main';

const App = () => {
  return (
    <div>
      <Main />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sample1" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

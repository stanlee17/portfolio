// Import React modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// COMPONENTS:
import Header from './components/layout/Header';

// PAGES:
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

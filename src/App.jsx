// src/App.js
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Header /><Hero /></>}></Route>
        <Route exact path="/channels" element={<AuthenticatedRoute><Home /></AuthenticatedRoute>}></Route>
        <Route exact path="/channels/:id" element={<AuthenticatedRoute><Home /></AuthenticatedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import React from 'react';
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='SignIn' element={<SignIn/>}> </Route>
      <Route path='SignUp' element={<SignUp/>}> </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
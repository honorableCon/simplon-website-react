import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Fabrique from './pages/Fabrique';
import Apprenant from './pages/Apprenant';
import Formation from './pages/Formation';
import Resource from './pages/Resource';
import Apropos from './pages/Apropos';

const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/fabrique' element={<Fabrique/>} />
        <Route path='/formation' element={<Formation/>} />
        <Route path='/apprenant' element={<Apprenant/>} />
        <Route path='/resource' element={<Resource/>} />
        <Route path='/apropos' element={<Apropos/>} />
      </Routes>
    </>
  )
}

export default App
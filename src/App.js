import React from 'react';
import './App.css';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';


function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}

export default App;

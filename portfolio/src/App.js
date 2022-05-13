import './App.css';
import React, { useRef } from 'react'
import Header from '../src/Components/header'
import Home from './Components/home'
import About from './Components/about'
import Project from './Components/project';
import Contact from './Components/contact';

function App() {
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()

  function handleHomeClick() {
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  
  function handleAboutClick() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleProjectClick() {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleContactClick() {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <div className="App">
      <div class='mainContainer'>
      <div>
          <Header
            handleHomeClick={handleHomeClick}
            handleAboutClick={handleAboutClick}
            handleProjectClick={handleProjectClick}
            handleContactClick={handleContactClick}
          />
        </div>
        <div class='mainContent'>
          <Home
            homeRef={homeRef}
            />
          <About
            aboutRef={aboutRef}
          />
           <Project
            projectRef={projectRef}
          />
          {/* <Contact
            contactRef={contactRef}
          /> */}
        </div>
      </div>
      </div>
  );
}

export default App;

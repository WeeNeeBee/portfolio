import React from 'react'
import './App.css'
import NavBar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <div className = 'App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div> 
  )
}

export default App

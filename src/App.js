import React, { useRef, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Name from './components/Name';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import {Link} from 'react-scroll';
import About from './components/About';

const navItems = [
  { to: 'home', label: 'Home', offset: -100, duration: 500 },
  { to: 'about', label: 'About me', offset: -100, duration: 600 },
  { to: 'skills', label: 'Skills', offset: -200, duration: 900 },
  { to: 'project', label: 'Projects', offset: -200, duration: 1500 },
  { to: 'contact', label: 'Contact', offset: -200, duration: 1800 },
];

function App() {

const [menuOpen, setMenuOpen] = useState(false);
const skillref= useRef(null);
const homeRef= useRef(null);
const projectRef= useRef(null);
const aboutRef= useRef(null);
const contactRef= useRef(null);
  return (
    <div className="App" style={{backgroundColor:'black'}}>
    <Navbar >
        <Container className='custom-navBar'>
          <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} aria-label='Toggle navigation' aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span/><span/><span/>
          </button>
          <Nav className="me-auto" >
           <div className={`custom-nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <Nav.Link className='nav-text' key={item.to}><Link to={item.to} spy={true} smooth={true} offset={item.offset} duration={item.duration} className='nav-text' onClick={() => setMenuOpen(false)}>{item.label}</Link></Nav.Link>
            ))}

            {/* onClick={() => projectRef.current.scrollIntoView({behavior: 'smooth'})} */}
            </div>
          </Nav>
        </Container>
      </Navbar>
    
       <Name homeRef={homeRef}/>
    <About aboutRef={aboutRef}/>
      <Skills skillref={skillref}/>
    
      <Projects projectRef={projectRef}/>
   
      <Contact contactRef={contactRef}/>

    </div>
  );
}

export default App;

import React, { useRef } from 'react';
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

function App() {
 
const skillref= useRef(null);
const homeRef= useRef(null);
const projectRef= useRef(null);
const aboutRef= useRef(null);
const contactRef= useRef(null);
  return (
    <div className="App" style={{backgroundColor:'black'}}>
    <Navbar >
        <Container className='custom-navBar'>
          <Nav className="me-auto" >
           <div className='custom-nav'>
            <Nav.Link className='nav-text' ><Link to='home'spy={true} smooth={true} offset={-100} duration={500}className='nav-text' >Home</Link></Nav.Link>
            <Nav.Link className='nav-text' ><Link to='about'spy={true} smooth={true} offset={-100} duration={600}className='nav-text' >About me</Link></Nav.Link>
            <Nav.Link className='nav-text' ><Link to='skills'spy={true} smooth={true} offset={-200} duration={900}className='nav-text' >Skills</Link></Nav.Link>
            <Nav.Link className='nav-text' ><Link to='project'spy={true} smooth={true} offset={-200} duration={1500}className='nav-text' >Projects</Link></Nav.Link>
         
            <Nav.Link className='nav-text'><Link to='contact'spy={true} smooth={true} offset={-200} duration={1800}className='nav-text' >Contact</Link></Nav.Link>
            
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

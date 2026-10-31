import React from 'react';
import Typed from "react-typed"
import { IconButton } from '@mui/material';
import { Container, Row } from 'react-bootstrap';
import { ResumeIcon } from './Icons';


function Name({homeRef}) {
    return (
      <Container id='home' ref={homeRef} className='home'>
        <Row>
          <div className='hero'>
          <div className='nc'>

           <h2 className='name'>Hi,</h2>
           <h2 className='name'>I'm Kashyap</h2>
           <Typed className='text'
      strings={[
            "I'm a Full Stack Developer",
            "I Love building Web and Mobile Applications"

          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        <div className='hero-buttons'>
        <IconButton sx={{color:'white',marginRight:{xs:'20px',md:'60px'}}} onClick={(e)=>window.open('https://github.com/KashyapPLN')}><img src='https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png'alt='githubicon'className='github-icon'/><span>GitHub</span></IconButton>
        <IconButton sx={{color:'white'}} onClick={(e)=>window.open('https://drive.google.com/file/d/1xBerM75j-q6-1xhEFGbSAkapWCGjQ4J9/view?usp=sharing')}><ResumeIcon className='resume-icon' /><span style={{marginLeft:'16px'}}>Resume</span></IconButton>
        </div>

        </div>


        <img className='hero-img' src='https://64.media.tumblr.com/a523aac3670fb6af34ba6bf92a9a5917/60a389cd0631fc65-71/s640x960/ac4918cfe8959fe7c984f1af5e5faed7f4ef7a85.gif' alt=''/>
        {/* https://i.pinimg.com/originals/e5/6c/66/e56c66eba1bfa52934b9a709e7088d73.gif */}
        {/* https://i.gifer.com/S9Ka.gif */}

        </div>
        </Row>
        </Container>
    );
}

export default Name;

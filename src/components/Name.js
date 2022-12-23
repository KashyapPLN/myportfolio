import React from 'react';
import Typed from "react-typed"
import { Button, IconButton } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';


function Name({homeRef}) {
    return (
      <Container id='home' ref={homeRef} style={{height:'100vh'}}>
        <Row>
         
    
       
  
      
        

          <br/><br/>
          <br/><br/>
          <br/><br/>
          
       
          <div style={{display:'flex',justifyContent:'space-between'}}>
            
         
          <div className='nc'>
          
           <h2 className='name'>Hi,</h2> 
           <h2 className='name'>I'm Kashyap</h2> 
           <Typed className='text'
      strings={[
            "I'm a Full Stack Developer",
            "I Love building Web Applications"
            
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        <div style={{marginTop:'30px'}}>
        <IconButton sx={{color:'white',marginRight:'60px'}} onClick={(e)=>window.open('https://github.com/KashyapPLN')}><img src='https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png'alt='githubicon'style={{height:'80px',width:'80px'}}/><span>GitHub</span></IconButton>
        <IconButton sx={{color:'white'}} onClick={(e)=>window.open('https://drive.google.com/file/d/1FUodqx-MzEmEkuPNB0Ntl8FexPYydHhy/view')}><img src='https://ty.ie/wp-content/uploads/2019/07/cv-icon.png'alt='resume'style={{height:'40px',width:'40px'}} /><span style={{marginLeft:'16px'}}>Resume</span></IconButton>
        </div>
        
        </div>
       
      
        <img src='https://64.media.tumblr.com/a523aac3670fb6af34ba6bf92a9a5917/60a389cd0631fc65-71/s640x960/ac4918cfe8959fe7c984f1af5e5faed7f4ef7a85.gif' style={{height:'600px',width:'600px',marginRight:'150px'}}/>
        {/* https://i.pinimg.com/originals/e5/6c/66/e56c66eba1bfa52934b9a709e7088d73.gif */}
        {/* https://i.gifer.com/S9Ka.gif */}
       
        </div>
      
       
        </Row>
        </Container>
    );
}

export default Name;

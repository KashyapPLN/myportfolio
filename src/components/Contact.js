import { IconButton } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { EmailIcon, PhoneIcon } from './Icons';

function Contact({contactRef}) {
    return (
        <div ref={contactRef} id='contact' className='contact-section'>
            <h2 className='section-heading'>Contact</h2>
        <Container className='contact-cards'>

          <Container className='phone'>
            <PhoneIcon/>
            <p className='contact-text'>Phone</p>
            <p className='contact-text'>+918121656640</p>
          </Container>
          <Container className='phone'>
            <EmailIcon/>
            <p className='contact-text'>Email address</p>
            <p className='contact-text'>kashyap.pln@gmail.com</p>
          </Container>
          <Container className='phone'>
            <img className='emailicon'src='https://cdn.pixabay.com/animation/2023/03/31/04/15/04-15-05-521_512.gif'style={{width:'70px',height:'70px'}} alt='homeicon'/>
            <p className='contact-text'>Location</p>
            <p className='contact-text'>Visakhapatnam </p>
          </Container>
        </Container>
        <div className='back-to-top'>
         <IconButton sx={{width:'150px',height:'100px',color:'rgb(248, 245, 207)',fontSize:'16px'}} onClick={(e)=>window.scrollTo(0, 0)}>Top<img style={{width:'50px',height:'50px',marginLeft:'20px'}}src='https://cdn-icons-png.flaticon.com/512/1286/1286922.png' alt='top'/></IconButton>
        </div>
        </div>
    );
}

export default Contact;

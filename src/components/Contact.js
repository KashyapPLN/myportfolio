import { IconButton } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

function Contact({contactRef}) {
    return (
        <div ref={contactRef} id='contact' style={{height:'100vh'}}>
            <h2 style={{color:'rgb(248, 245, 207)',fontWeight:'bold',fontSize:'60px',textAlign:'center'}}>Contact</h2>
        <Container style={{display:'flex',justifyContent:'space-evenly'}}>
            
          <Container className='phone'>
            <img src='https://media1.giphy.com/media/mbW2nvTE0TUc5IgRMm/giphy.gif?cid=6c09b95292377b798e2a21062d1c0c31021cc4209e405fd6&rid=giphy.gif&ct=s'style={{width:'80px',height:'80px'}} alt='phone'/>
            <p style={{color:'rgb(248, 245, 207)',fontWeight:'bold'}}>Phone</p>
            <p style={{color:'rgb(248, 245, 207)',fontWeight:'bold'}}>+918121656640</p>
          </Container>  
          <Container className='phone'>
            <img className='emailicon'src='https://i.ibb.co/2nPyKbn/ezgif-3-6d2330e2b8.gif'style={{width:'70px',height:'70px'}} alt='emailicon'/>
            <p style={{color:'rgb(248, 245, 207)',fontWeight:'bold'}}>Email address</p>
            <p style={{color:'rgb(248, 245, 207)',fontWeight:'bold'}}>kashyap.pln@gmail.com</p>
          </Container>  
          <Container className='phone'>
            <img className='emailicon'src='https://cdn.pixabay.com/animation/2023/03/31/04/15/04-15-05-521_512.gif'style={{width:'70px',height:'70px'}} alt='homeicon'/>
            <p style={{color:'rgb(248, 245, 207)',fontWeight:'bold'}}>Location</p>
            <p style={{color:'rgb(248, 245, 207)',fontWeight:'bold'}}>Visakhapatnam </p>
          </Container>
        </Container>
        <div style={{display:'flex',justifyContent:'flex-end',marginRight:'30px',marginTop:'50px'}}>
         <IconButton sx={{width:'150px',height:'100px',color:'rgb(248, 245, 207)',fontSize:'16px'}} onClick={(e)=>window.scrollTo(0, 0)}>Top<img style={{width:'50px',height:'50px',marginLeft:'20px'}}src='https://cdn-icons-png.flaticon.com/512/1286/1286922.png' alt='top'/></IconButton>
        </div>
        </div>
    );
}

export default Contact;

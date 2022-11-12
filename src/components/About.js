import React from 'react';
import { Container } from 'react-bootstrap';


function About({aboutRef}) {
    return (
        <div ref={aboutRef} id='about'>
            <h2 style={{color:'rgb(248, 245, 207)',fontWeight:'bold',fontSize:'60px',textAlign:'center'}}>About</h2>
            <Container className='about-container'>
            <p className='about-content'>
          Hi, I am P.L.N Kashyap from Visakhapatnam.I am an engineer with an Information Technology background.
          I completed my graduation in the year 2012. During third year of engineering, I met with a fatal accident due to which I was hospitalized and had undergone a couple of surgeries. I was bed-ridden for several months and it took me few years to recover from physical and mental trauma that I have endured due to the catastrophe, which took a toll on my career.
           However, I never gave up and overcame all the odds with self motivation.Despite several physical complications, I paid focus on my body as well as my career at the same time. <p>Since last year, I started working out and reduced oodles of weight.
            On the career front, I was fascinated by web development and started learning MERN Stack.I had developed a Web Application called The Great Indian Dessert. It is an online platform for ordering your favourite dessert and getting it delivered at your doorstep.

            </p>
          </p>  
          </Container>
          
        </div>
    );
}

export default About;
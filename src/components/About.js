import React from 'react';
import { Container } from 'react-bootstrap';


function About({aboutRef}) {
    return (
        <div ref={aboutRef} id='about'>
            <h2 style={{color:'rgb(248, 245, 207)',fontWeight:'bold',fontSize:'60px',textAlign:'center'}}>About me</h2>
            <Container className='about-container'>
            <p className='about-content'>
         Hi, I’m P.L.N Kashyap from Visakhapatnam. I have an engineering background in Information Technology and graduated in 2012. During my third year of college, I faced a major setback due to a severe accident that resulted in multiple surgeries and left me bedridden for several months. The physical and mental challenges from that ordeal significantly impacted my career trajectory. However, I stayed resilient, motivated myself, and overcame the odds by focusing on my recovery and future goals.

My journey into web development began with a fascination for building applications, leading me to master the MERN stack. I created my first project, The Great Indian Dessert, a web application for ordering delicious desserts and having them delivered straight to your doorstep.

Following that, I developed an Expense Tracker application, enabling users to monitor their monthly expenses, categorize them, and visualize spending trends through interactive charts.

I have 1.1 years of professional experience as a Frontend Developer at Cynapto Technologies in Mumbai, from May 2023 to the end of May 2024, where I honed my skills in React.js and JavaScript.

            </p>
          </p>  
          </Container>
          
        </div>
    );
}

export default About;

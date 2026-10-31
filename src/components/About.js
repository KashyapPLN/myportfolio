import React from 'react';
import { Container } from 'react-bootstrap';


function About({aboutRef}) {
    return (
        <div ref={aboutRef} id='about'>
            <h2 className='section-heading'>About me</h2>
            <Container className='about-container'>
            <div className='about-content'>
          <p>
            Hi, I’m P.L.N Kashyap from Visakhapatnam, a Full Stack Developer with 3.5+ years of professional experience building web and mobile applications using React.js, React Native, JavaScript, Node.js, Express.js and MongoDB.
          </p>
          <p>
            I currently work as a Software Engineer at AdMAVIN (Mandark Technologies), Chennai. There I single-handedly built the UI of the iRide web app and developed many features of the iRide mobile app using React Native. I’ve also worked on an AI-powered Chrome extension and a live traffic monitoring application, and I’m the sole developer of Malba, a MERN-stack waste management platform.
          </p>
          <p>
            Before that, I worked as a Frontend Developer at Cynapto Technologies from May 2023 to December 2024, building a video localization platform with custom playback controls, transcript highlighting, AWS S3 uploads and payment workflows.
          </p>
          <p>
            I enjoy owning features end to end, turning business needs into technical solutions, and collaborating with cross-functional teams in Agile environments.
          </p>
          </div>
          </Container>

        </div>
    );
}

export default About;

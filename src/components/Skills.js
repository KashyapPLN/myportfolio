// import { Container } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';
import reactboot from '../reactboot.png';


// import giphy from '../giphy.gif';

const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;

const techSkills = [
  { name: 'HTML 5', icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748__340.png' },
  { name: 'CSS 3', icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png' },
  { name: 'JavaScript', icon: devicon('javascript') },
  { name: 'React / React Native', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { name: 'Redux', icon: devicon('redux') },
  { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
  { name: 'React Bootstrap', icon: reactboot },
  { name: 'Material UI', icon: 'https://v4.material-ui.com/static/logo.png' },
  { name: 'Node JS', icon: devicon('nodejs') },
  { name: 'Express JS', icon: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
  { name: 'Mongo DB', icon: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png' },
  { name: 'Java', icon: 'https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png' },
  { name: 'Python', icon: devicon('python') },
  { name: 'Git', icon: devicon('git') },
  { name: 'Postman', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png' },
  { name: 'VS Code', icon: devicon('vscode') },
];

const skillCategories = [
  { title: 'Programming Languages', skills: ['JavaScript', 'Java', 'Python', 'SQL'] },
  { title: 'Frontend Development', skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap', 'React Bootstrap', 'Formik'] },
  { title: 'State Management', skills: ['Redux', 'Redux Toolkit', 'Redux-Saga', 'RTK Query'] },
  { title: 'Backend Development', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'API Development and Integration'] },
  { title: 'Databases', skills: ['MongoDB', 'MongoDB Atlas'] },
  { title: 'Mobile Development and Testing', skills: ['Expo', 'Expo Prebuild', 'Maestro', 'End-to-End Testing'] },
  { title: 'Tools and Platforms', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'AWS S3', 'Chrome Extension APIs'] },
  { title: 'Core Concepts', skills: ['Full Stack Development', 'Responsive Design', 'Authentication and Authorization', 'API Caching', 'State Management', 'Performance Optimization', 'Agile/Scrum'] },
];

function Skills({skillref}) {
    return (

        <div ref={skillref} id='skills'>
        <div className='skills-section'>
           <Container className='skillhead-cotainer'>
          <div className='skillhead-content'>
          {/* https://i.gifer.com/Ouv1.gif */}
     <h2 className='mt-4 skillheading'>Skills</h2>

          <p className='skill-intro'>I am an individual always interested in updating my skillset and aquiring knowledge on web development technologies</p>
          </div>
          </Container>
            <Container className='skills'>
                {techSkills.map((skill) => (
                  <div key={skill.name}>
                  <img className='techskill' src={skill.icon} alt={skill.name}/>
                  <p className='sname'>{skill.name}</p>
                  </div>
                ))}
            </Container>
        </div>

        <div className='skill-categories'>
          {skillCategories.map((category) => (
            <div className='skill-category' key={category.title}>
              <h3>{category.title}</h3>
              <div className='chips'>
                {category.skills.map((skill) => <span className='chip' key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>

        </div>
    );
}

export default Skills;

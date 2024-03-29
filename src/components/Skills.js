// import { Container } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';
import reactboot from '../reactboot.png';


// import giphy from '../giphy.gif';

function Skills({skillref}) {
    return (
        
        <div ref={skillref} id='skills'>
        <div style={{display:'flex',justifyContent:'space-around',height:'100vh'}}>
           <Container className='skillhead-cotainer' style={{backgroundColor:'rgba(255, 255, 255, 0.075)',width:'600px',height:'500px',marginTop:'90px',borderRadius:'8px'}}>
          <div style={{flexDirection:'column',rowGap:'none',width:'400px',height:'300px'}}>
          {/* https://i.gifer.com/Ouv1.gif */}
     <h2 className='mt-4 skillheading' style={{textAlign:'center'}}>Skills</h2>
           
          <p style={{color:'rgb(248, 245, 207)',marginLeft: '45%',letterSpacing:'2px',lineHeight:'25px'}}>I am an individual always interested in updating my skillset and aquiring knowledge on web development technologies</p>
          </div>
          </Container>
            <Container className='skills'>
                <div >
                <img className='techskill' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748__340.png' alt='html5'/>
                <p className='sname'>HTML 5</p>
                </div>
                <div >
                <img className='techskill'src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png' alt='css3'/>
                <p className='sname'>CSS 3</p>
                </div>
                <div >
                <img className='techskill'src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png' alt='bootstrap'/>
                <p className='sname'>Bootstrap</p>
                </div>
                <div>
                <img className='techskill'src='https://i.ibb.co/LZ0kRr4/javascript-logo.png' alt='js'/>
                <p className='sname'>JavaScript</p>
                </div>
                <div>
                <img className='techskill'src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='react'/>
                <p className='sname'>React</p>
                </div>
                <div>
                <img className='techskill'src={reactboot} alt='react-bootstrap'/>
                <p className='sname'>React Bootstrap</p>
                </div>
                <div>
                <img className='techskill'src='https://v4.material-ui.com/static/logo.png' alt='mui'/>
                <p className='sname'>Material UI</p>
                </div>
                <div>
                <img className='techskill'src='https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg' alt='nodejs'/>
                <p className='sname'>Node JS</p>
                </div>
                <div>
                <img className='techskill'src='https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' alt='express js'/>
                <p className='sname'>Express JS</p>
                </div>
                <div>
                <img className='techskill'src='https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png' alt='mongo db'/>
                <p className='sname'>Mongo DB</p>
                </div>
                <div>
                <img className='techskill'src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png' alt='postman'/>
                <p className='sname'>Postman</p>
                </div>
                <div>
                <img className='techskill'src='https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png'alt='java'/>
                <p className='sname'>Java</p>
                </div>
                {/* https://github.githubassets.com/images/modules/logos_page/Octocat.png */}
                
                
            </Container>
            
            
        </div>
        
        </div>
    );
}

export default Skills;

import React from 'react';
import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import IconButton from '@mui/material/IconButton';
import Recording from '../Recording.gif'
import gid_record from '../gid_record.gif'



function Projects({ projectRef }) {
  return (
    <div ref={projectRef} id='project' className='Projects'>
      <h2 className='projectheading' >My Projects</h2>

      <div className='projectDetails'>
        <Card className='project-card' style={{ width: '800px', color: 'rgb(248, 245, 207)', height: '350px', border: 'none', borderRadius: '8px', padding: '20px', lineHeight: '25px' }}>
          <div style={{ display: 'flex', marginTop: '30px' }}>
            <div>
              <Card.Img className='project-card-img' src={gid_record} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://thegreatindiandessert.netlify.app')} ><img style={{ height: '30px', width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/2807/2807256.png' alt='gid app' /></IconButton>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://github.com/KashyapPLN/gid_react')} ><img style={{ height: '40px', width: '40px' }} src='https://cdn-icons-png.flaticon.com/512/876/876019.png' alt='gid source code' /></IconButton>
              </div>
            </div>
            <Card.Body style={{ marginRight: '30px' }}>
              <Card.Title><h1>The Great Indian Dessert</h1></Card.Title>
              <Card.Text>
                The Great Indian Dessert is a web Application through which a user can buy delicious desserts with just a few clicks.<p>Technologies used : React Js, Node Js, Mongo Db, Express Js, React-bootstrap, Material UI, Google Pay, Google Firebase, JWT and Node-mailer.</p>
              </Card.Text>

            </Card.Body>
          </div>
        </Card>
        {/* <img src=' https://i.pinimg.com/originals/0c/45/15/0c4515230a5f97f081a3f084b9d54c7a.gif' style={{height:'300px',width:'60px'}}/> */}


        <Card className='project-card' style={{ width: '800px', color: 'rgb(248, 245, 207)', height: '350px', border: 'none', borderRadius: '8px', padding: '20px', lineHeight: '25px' }}>
          <div style={{ display: 'flex', marginTop: '30px' }}>
            <div>
              <Card.Img className='project-card-img' src='https://i.ibb.co/zVLwFgG/exptrack.jpg' />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://expense-tracker-95.netlify.app/')} ><img style={{ height: '30px', width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/2807/2807256.png' alt='gid app' /></IconButton>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://github.com/KashyapPLN/expense-tracker-frontend')} ><img style={{ height: '40px', width: '40px' }} src='https://cdn-icons-png.flaticon.com/512/876/876019.png' alt='gid source code' /></IconButton>
              </div>
            </div>
            <Card.Body style={{ marginRight: '30px' }}>
              <Card.Title><h1>Expense Tracker</h1></Card.Title>
              <Card.Text>
                Expense Tracker is a web Application through which a user can track all his/her monthly expenses, category wise and visualize them through charts .<p>Technologies used : React Js, Node Js, Mongo Db, Express Js, React-bootstrap and JWT.</p>
              </Card.Text>

            </Card.Body>
          </div>
        </Card>
        <Card className='project-card' style={{ width: '800px', color: 'rgb(248, 245, 207)', height: '350px', border: 'none', borderRadius: '8px', padding: '20px', lineHeight: '25px' }}>
          <div style={{ display: 'flex', marginTop: '30px' }}>
            <div>
              <Card.Img className='project-card-img' src='https://i.ibb.co/Fht1dM8/imdb-clone.jpg' />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://imdb-clone-app-91.netlify.app/')} ><img style={{ height: '30px', width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/2807/2807256.png' alt='gid app' /></IconButton>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://github.com/KashyapPLN/imdb-clone-app')} ><img style={{ height: '40px', width: '40px' }} src='https://cdn-icons-png.flaticon.com/512/876/876019.png' alt='gid source code' /></IconButton>
              </div>
            </div>
            <Card.Body style={{ marginRight: '30px' }}>
              <Card.Title><h1>Imdb Clone App</h1></Card.Title>
              <Card.Text>
              IMDb Clone is a  movie database web app featuring categories like "Top Picks" and "Top 10 This Week," along with CRUD operations for movies, actors, and producers.
                <p>Technologies used : React Js, Node Js, Mongo Db, Express Js, React-bootstrap and JWT for secure authentication.</p>
              </Card.Text>

            </Card.Body>
          </div>
        </Card>
        <Card className='project-card' style={{ width: '800px', color: 'rgb(248, 245, 207)', height: '350px', border: 'none', borderRadius: '8px', padding: '20px', lineHeight: '25px' }}>
          <div style={{ display: 'flex', marginTop: '30px' }}>
            <div>
              <Card.Img className='project-card-img' src='https://i.ibb.co/P5bWhS6/kanban-board.jpg' />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://kanban-board-app-91.netlify.app/')} ><img style={{ height: '30px', width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/2807/2807256.png' alt='gid app' /></IconButton>
                <IconButton sx={{ marginLeft: '30px' }} onClick={(e) => window.open('https://github.com/KashyapPLN/kanban-board-app')} ><img style={{ height: '40px', width: '40px' }} src='https://cdn-icons-png.flaticon.com/512/876/876019.png' alt='gid source code' /></IconButton>
              </div>
            </div>
            <Card.Body style={{ marginRight: '30px' }}>
              <Card.Title><h1>Kanban Board App</h1></Card.Title>
              <Card.Text>
                Kanban Board is a task management web app where users can create, organize, and track tasks across columns like "To Do," "In Progress," and "Done" using a drag-and-drop interface.
                <p>Technologies used : React Js, Node Js, Mongo Db, Express Js, React-bootstrap and JWT for secure authentication.</p>
              </Card.Text>

            </Card.Body>
          </div>
        </Card>

      </div>

    </div>
  );
}

export default Projects;

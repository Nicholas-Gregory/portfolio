import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { useState } from "react";
import Project from "./Project";
import './style.css'
import profile from './profile.jpg'

const projects = [{
  imgPath: "https://raw.githubusercontent.com/Nicholas-Gregory/Blog/main/screenshot.png",
  title: "Simple Blog",
  deployedLink: "https://immense-reef-89584-27a74acb6456.herokuapp.com/",
  githubLink: "https://github.com/Nicholas-Gregory/Blog"
},
{
  imgPath: "https://github.com/Nicholas-Gregory/Note_Taker/raw/main/screenshot.png",
  title: "Note Taker",
  deployedLink: "https://nb-bootcamp-note-taker-f19da58a1664.herokuapp.com/",
  githubLink: "https://github.com/Nicholas-Gregory/Note_Taker"
},
{
  imgPath: "https://github.com/Nicholas-Gregory/News-API-app-with-Definition-Searching/raw/main/news-app-3.png",
  title: "News Aggregator",
  deployedLink: "https://jensandage1.github.io/News-API-app-with-Definition-Searching/",
  githubLink: "https://github.com/Nicholas-Gregory/News-API-app-with-Definition-Searching"
},
{
  imgPath: "https://github.com/Nicholas-Gregory/Weather/raw/main/assets/images/screenshot.png",
  title: "Simple Weather",
  deployedLink: "https://nicholas-gregory.github.io/Weather/",
  githubLink: "https://github.com/Nicholas-Gregory/Weather"
},
{
  imgPath: "https://github.com/taylorgehrts/KIDDO_KARE/raw/main/public/images/Screenshot%202023-08-18%20at%209.47.16%20AM.png",
  title: "Kiddo Kare",
  deployedLink: "https://hidden-eyrie-72629-9ca91495354a.herokuapp.com/",
  githubLink: "https://github.com/taylorgehrts/KIDDO_KARE"
}]

function App() {
  const [page, setPage] = useState('about');

  function handleSelect(selectedPage) {
    setPage(selectedPage);
  }

  return (
    <>
      <Header>
        <Navigation select={handleSelect}/>
      </Header>

      <section>
        {page === 'about' && 
          <div id="aboutContainer">
            <img src={profile}/><br />
            Hi! I am a full-stack web developer with experience in many technologies including React, GraphQL, Express and SQL/No-SQL databases.
            This page is where I put information about my various projects, as well as links to my social media accounts, along with a resume for prospective employers.
            If you want to contact me, there is a Contact link on the navbar above with a form you can fill out.
            Thanks for visiting my little page!
          </div>
        }
        {page === 'portfolio' &&
          <div id="portfolioContainer">
            {projects.map(project => 
              <>
                <Project {...project} />
              </>  
            )}
            <div className="card">
              <h2>Flipside</h2>
              <p style={{margin: "10px"}}>Coming soon...</p>
            </div>
          </div>
        }
        {page === 'contact' &&
          <>
            <p>
              Here's a form for getting in contact with me if you require the services of a creative web developer.
            </p>
            <ContactForm />
          </>
        }
        {page === 'resume' &&
          <div id="resume">
            <h2>
              My Skills:
            </h2>
            <h3>
              Languages:
            </h3>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JSX</li>
              <li>SQL</li>
              <li>GraphQL</li>
            </ul>
            <h3>Libraries</h3>
            <ul>
              <li>Node.js</li>
              <li>Sequelize</li>
              <li>Mongoose</li>
              <li>React</li>
              <li>Express</li>
            </ul>
            <h2>
              Education
            </h2>
            <p>University of Oregon/EDX Fullstack Bootcamp</p>
            <h2>
              Experience
            </h2>
            <p>See the Projects tab</p>
          </div>
        }
      </section>

      <Footer />
    </>
  );
}

export default App;

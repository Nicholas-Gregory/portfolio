import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { useState } from "react";
import Project from "./Project";
import './style.css'

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
          <div id="about">
            Hi! I am a full-stack web developer with experience in many technologies including React, GraphQL, Express and SQL/No-SQL databases.
            This page is where I put information about my various projects, as well as links to my social media accounts, along with a resume for prospective employers.
            If you want to contact me, there is a Contact link on the navbar above with a form you can fill out.
            Thanks for visiting my little page!
          </div>
        }
        {page === 'portfolio' &&
          <div id="portfolioContainer">
            <Project
              imgPath={"https://raw.githubusercontent.com/Nicholas-Gregory/Blog/main/screenshot.png"}
              title={"Simple Blog"}
              deployedLink={"https://immense-reef-89584-27a74acb6456.herokuapp.com/"}
              githubLink={"https://github.com/Nicholas-Gregory/Blog"}
            />  
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
            resume
          </div>
        }
      </section>

      <Footer />
    </>
  );
}

export default App;

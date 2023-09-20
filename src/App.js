import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { useState } from "react";

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
          <div id="portfolio">
            portfolio
          </div>
        }
        {page === 'contact' &&
          <ContactForm />
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

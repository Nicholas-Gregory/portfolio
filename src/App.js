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
            about
          </div>
        }
        {page === 'portfolio' &&
          <div id="portfolio">
            portfolio
          </div>
        }
        {page === 'contact' &&
          <div id="contact">
            contact
          </div>
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

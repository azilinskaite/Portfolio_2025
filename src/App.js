import { useEffect } from 'react';
import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import HeroSection from "./Components/HeroSectionComponent/HeroSection";
import MovingHeader from "./Components/MovingHeaderComponent/MovingHeader";
import Project from "./Components/ProjectComponent/Project";
import Footer from "./Components/FooterComponent/Footer";
import cocktailPhoto from "../src/Assets/cocktail-kungen-mockup.jpg";
import chaosPhoto from "../src/Assets/chaos-magazine-mockup.jpg";
import shopPhoto from "../src/Assets/team-shop-mockup.jpg";
import libraryPhoto from "../src/Assets/library-mockup.jpg";

function App() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          // eslint-disable-next-line
          const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
          });
      }
    )()
  }, [])

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MovingHeader />
      <section className="projects-container" id="work">
        <Project
          photo={cocktailPhoto}
          title="Cocktail Kungen"
          paragraph="React-based web application for exploring and saving cocktail recipes, developed in a small team. Utilizes TheCocktailDB API for dynamic data fetching. Features search by category and a favorites system. Built with React using Hooks for state management and responsive design. My contributions: Dynamic Header, Favorites page, design & responsiveness."
          link1="https://cocktailkungen.netlify.app/"
          link2="https://github.com/azilinskaite/Cocktails_app"
        />
        <Project
          photo={chaosPhoto}
          title="Chaos magazine"
          paragraph="Magazine website mockup featuring a music quiz game. Built with HTML, CSS, JavaScript, and API for dynamic quiz content. The project includes responsive design, highlights clean code structure with instant feedback for enhanced user experience. The quiz game also features a scoring system and a progress bar to engage users."
          link1="https://chaos-magazine.netlify.app/"
          link2="https://github.com/azilinskaite/music-quiz"
        />
        <Project
          photo={shopPhoto}
          title="Team shop"
          paragraph="Small e-commerce project developed in a team. The project was built using JavaScript, featuring product data retrieval from an API. Shopping cart functionality allows users to add products and update quantities. Implemented product filters help users to sort items by category. My main contributions: add to cart button, overall cart functionality and design."
          link1="https://team-2-shop.netlify.app/"
          link2="https://github.com/azilinskaite/Fake_Store"
        />
        <Project
          photo={libraryPhoto}
          title="Bookworm HQ"
          paragraph="Library web application. The project leverages JavaScript object-oriented programming, utilizing constructors and implementing dynamic DOM manipulation. It features create, read, update, delete functionalities for a fluid user interface. Implementing responsive design principles."
          link1="https://bookworm-hq.netlify.app/"
          link2="https://github.com/azilinskaite/library_app"
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;

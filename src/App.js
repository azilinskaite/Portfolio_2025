import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import HeroSection from "./Components/HeroSectionComponent/HeroSection";
import MovingHeader from "./Components/MovingHeaderComponent/MovingHeader";
import Project from "./Components/ProjectComponent/Project";
import Footer from "./Components/FooterComponent/Footer";
import cocktailPhoto from "../src/Assets/cocktail-kungen-mockup.png";
import chaosPhoto from "../src/Assets/chaos-magazine-mockup.png";
import libraryPhoto from "../src/Assets/library-mockup.png";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MovingHeader />
      <section className="projects-container" id="work">
        <Project
          photo={cocktailPhoto}
          title="Cocktail Kungen"
          info="React-based web application that allows users to explore and save cocktail recipes, developed as a team project. Utilizing TheCocktailDB API for dynamic data fetching, the app features search functionality by categories, detailed recipe pages, and a favorites system. Built with React, JSX, and CSS, it employs React Hooks for state management and offers a responsive design."
          link1="https://cocktailkungen.netlify.app/"
          link2="https://github.com/azilinskaite/Cocktails_app"
        />
        <Project
          photo={chaosPhoto}
          title="Chaos magazine"
          info="Magazine website mockup featuring a music quiz game. Built with JavaScript, HTML, CSS and API for dynamic quiz content. The project includes responsive design, highlights clean code structure with instant feedback for enhanced user experience."
          link1="https://chaos-magazine.netlify.app/"
          link2="https://github.com/azilinskaite/music-quiz"
        />
        <Project
          photo={libraryPhoto}
          title="Bookworm HQ"
          info="Library web application. The project leverages JavaScript object-oriented programming, utilizing constructors and implementing dynamic DOM manipulation for a fluid user interface. It features CRUD functionality. Implementing responsive design principles"
          link1="https://bookworm-hq.netlify.app/"
          link2="https://github.com/azilinskaite/library_app"
        />
        <Project
          photo={chaosPhoto}
          title="Library App"
          info="JavaSript project showing CRUD functionality, adding, updating and deleting books in a personal library."
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;

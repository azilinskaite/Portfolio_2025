import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import HeroSection from "./Components/HeroSectionComponent/HeroSection";
import MovingHeader from "./Components/MovingHeaderComponent/MovingHeader";
import Project from "./Components/ProjectComponent/Project";
import Footer from "./Components/FooterComponent/Footer";
import cocktailPhoto from "../src/Assets/cocktail-kungen-mockup.png";
// import chaosPhoto from "../src/Assets/chaos-magazine.png";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection id="about"/>
      <MovingHeader />
      <section className="projects-container" id="work">
        <Project photo={cocktailPhoto} title="Cocktail Kungen" info="Cocktail recipes app. Using external API and React.js" />
        <Project photo={cocktailPhoto} title="Chaos magazine" info="Mock up of a magazine website with functioning music quiz game. Built using external API, JavaScript, CSS & HMTL" />
        <Project photo={cocktailPhoto} title="Bazaar Bab" info="Landing page for a restaurant built using JavaSript, CSS, HTML." />
        <Project photo={cocktailPhoto} title="Library App" info="JavaSript project showing CRUD functionality, adding, updating and deleting books in a personal library." />
      </section>
      <Footer id="contact"/>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import HeroSection from "./Components/HeroSectionComponent/HeroSection";
import MovingHeader from "./Components/MovingHeaderComponent/MovingHeader";
import Project from "./Components/ProjectComponent/Project";
import cocktailPhoto from "../src/Assets/cocktail-kungen.png";
import chaosPhoto from "../src/Assets/chaos-magazine.png";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MovingHeader />
      <section className="projects-container">
        <Project photo={cocktailPhoto} title="Title 1" info="project info" />
        <Project photo={chaosPhoto} title="Title 2" info="project info" />
        <Project photo={cocktailPhoto} title="Title 3" info="project info" />
        <Project photo={chaosPhoto} title="Title 4" info="project info" />
      </section>
    </div>
  );
}

export default App;

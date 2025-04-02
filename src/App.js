import { useEffect } from "react";
import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import HeroSection from "./Components/HeroSectionComponent/HeroSection";
import MovingHeader from "./Components/MovingHeaderComponent/MovingHeader";
import ProjectsList from "./Components/ProjectComponent/Project";
import Footer from "./Components/FooterComponent/Footer";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MovingHeader />
      <ProjectsList />
      <Footer />
    </div>
  );
}

export default App;

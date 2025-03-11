import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import HeroSection from "./Components/HeroSectionComponent/HeroSection";
import WorkSectionHeader from "./Components/WorksSectionHeaderComponent/WorksSectionHeader";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <WorkSectionHeader/>
    </div>
  );
}

export default App;

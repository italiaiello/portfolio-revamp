import Header from './components/Header/Header';
import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import ProductAreas from './components/ProductAreas/ProductAreas'
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProductAreas />
      <ProjectsSection />
    </div>
  );
}

export default App;

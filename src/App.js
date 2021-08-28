import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import ProductAreas from './components/ProductAreas/ProductAreas'
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactMe from './components/ContactMe/ContactMe';
import Resume from './components/Resume/Resume';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProductAreas />
      <ProjectsSection />
      <ContactMe />
      <Resume />
    </div>
  );
}

export default App;

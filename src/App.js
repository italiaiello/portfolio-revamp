import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import ProductAreas from './components/ProductAreas/ProductAreas'
import Services from './components/Services/Services';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactMe from './components/ContactMe/ContactMe';
import Resume from './components/Resume/Resume';
import Logo from './components/EndSection/EndSection';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProductAreas />
      <Services />
      <ProjectsSection />
      <ContactMe showLargeOrSmall={'large'} />
      <Resume showLargeOrSmall={'small'} />
      <Logo />
    </div>
  );
}

export default App;

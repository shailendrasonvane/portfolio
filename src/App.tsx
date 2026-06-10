
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 text-slate-800 dark:bg-dark-base dark:text-slate-300 min-h-screen transition-colors duration-300 font-sans">
        {/* Sticky navigation and progress header */}
        <Navbar />
        
        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <WhyWorkWithMe />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        
        {/* Footer credits and social hubs */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

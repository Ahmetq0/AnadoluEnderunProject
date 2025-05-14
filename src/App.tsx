import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-100 bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
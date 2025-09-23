import Navbar from './components/navbar';
import { useTheme } from './hooks/useTheme';
import Background from './components/Background';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';
import CursorEffects from './components/CursorEffects';
import Loader from './components/Loader';
import './App.css';

function App() {
  useTheme();

  return (
    <div className="min-h-screen transition-all duration-300 relative">
  <Loader variant="custom" svgUrl="/tall-ship.svg" svgWidth={800} svgHeight={640} />
      <Background />
      <CursorEffects />
      <Navbar />
      {/* Main content with top padding for navbar */}
      <main className="relative z-10">
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

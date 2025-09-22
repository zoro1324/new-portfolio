import Navbar from './components/navbar';
import { useTheme } from './hooks/useTheme';
import Background from './components/Background';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';

function App() {
  useTheme();

  return (
    <div className="min-h-screen transition-all duration-300 relative">
      <Background />
      <Navbar />
      {/* Main content with top padding for navbar */}
      <main className="relative z-10">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

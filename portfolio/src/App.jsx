import Navbar from './components/navbar';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import Background from './components/Background';
import './App.css';

function App() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen transition-all duration-300 relative">
      <Background />
      <Navbar />
      {/* Main content with top padding for navbar */}
      <main className="p-6 relative z-10 pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-display text-5xl mb-6 text-glow">
            Exploring the depths of web engineering
          </h2>
          <p className="text-lg mb-8 opacity-80">
            A portfolio crafted with the spirit of adventure and the precision of modern web development.
          </p>
          {/* Theme demo cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="glass-surface p-6 rounded-lg">
              <h3 className="text-display text-xl mb-3">Current Theme</h3>
              <p className="capitalize text-lg font-semibold" style={{color: 'var(--accent-primary)'}}>
                {isDark ? '🌊 Abyss Mode' : '🏝️ Shallow Sea Mode'}
              </p>
            </div>
            <div className="glass-surface p-6 rounded-lg">
              <h3 className="text-display text-xl mb-3">Bioluminescent Glow</h3>
              <p className="text-glow">
                This text has the signature deep-sea glow effect
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

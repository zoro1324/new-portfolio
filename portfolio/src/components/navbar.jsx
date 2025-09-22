import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#footer' },
];

function CompassIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" stroke="var(--accent-primary)" strokeWidth="2.2" fill="rgba(0,0,0,0.04)" />
      <polygon points="16,7 20,20 16,17 12,20" fill="var(--accent-primary)" opacity="0.85" />
      <circle cx="16" cy="16" r="2.2" fill="var(--accent-secondary)" />
    </svg>
  );
}

function Navbar() {
  const { theme } = useTheme();
  const [active, setActive] = useState('Home');

  return (
    <nav className="fixed top-0 left-0 w-full z-30 flex justify-center bg-transparent">
      <div className="glass-surface backdrop-blur-md border border-glass transition-all duration-300 rounded-full mt-4 shadow-lg px-4 py-2 flex items-center gap-6 max-w-5xl w-full mx-4 overflow-x-auto">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group select-none">
          <CompassIcon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-display text-xl md:text-2xl tracking-tight font-semibold text-glow">
            Portfolio
          </span>
        </a>
        {/* Nav Links */}
        <ul className="flex gap-1 md:gap-2 lg:gap-4 xl:gap-6 items-center ml-6">
          {navLinks.map(link => (
            <li key={link.label} className="relative">
              <a
                href={link.href}
                className={`relative px-3 py-1.5 font-medium text-base rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary
                  ${active === link.label
                    ? 'text-[var(--accent-primary)] after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-[var(--accent-primary)] after:opacity-80 after:content-[""]'
                    : 'text-[var(--text-secondary)]'}
                  group
                `}
                onClick={() => setActive(link.label)}
                tabIndex={0}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Glassy hover effect */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-white/30 dark:bg-white/10 backdrop-blur-sm pointer-events-none" />
              </a>
            </li>
          ))}
        </ul>
        {/* Theme Toggle */}
        <div className="ml-4 flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
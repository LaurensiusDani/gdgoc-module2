import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

// Placeholder Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

export default function App() { 
  const [isDark, setIsDark] = useLocalStorage<boolean>('theme-dark', false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <header className="border-b border-border py-8">
        {/* Added flex-col on mobile, gap, and text-center to match the original index.html */}
        <div className="max-w-[72rem] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center md:text-left">
          
          {/* Restored full brand name */}
          <div className="font-mono text-sm font-bold tracking-[0.1em] uppercase">
            L. Dani
          </div>
          
          <nav>
            {/* Stacked links on mobile, horizontal row on desktop */}
            <ul className="flex flex-col md:flex-row gap-5 md:gap-8 items-center font-mono text-sm">
              
              {/* Restored the slide-in underline animation using Tailwind pseudo-elements */}
              <li>
                <Link to="/" className="relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="relative pb-[2px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground hover:after:w-full after:transition-all after:duration-150">
                  Projects
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="bg-transparent text-foreground border border-foreground px-4 py-2 text-xs uppercase cursor-pointer"
                >
                  {isDark ? 'LIGHT' : 'DARK'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <footer className="border-t border-border-light py-16 mt-20">
        {/* Restored mobile flex-col and centering for the footer */}
        <div className="max-w-[72rem] mx-auto px-6 font-mono text-xs flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 text-center uppercase">
          <p>&copy; 2026 L. Dani Rendragraha. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="https://github.com/LaurensiusDani" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/laurensius-dani/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="mailto:placeholder@email.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Email</a>
          </div>
        </div>
      </footer>
    </Router>
  );
}
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <Contact />
      </main>

      <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800/70 bg-gradient-to-b from-transparent to-slate-50/60 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg hover:shadow-xl transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth scroll behavior globally
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    // Dark mode persistence
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme-dark');
    const initial = stored ? stored === 'true' : prefersDark;
    setDark(initial);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme-dark', String(dark));
  }, [dark]);

  useEffect(() => {
    const sectionIds = SECTIONS.map(s => s.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  const links = useMemo(() => SECTIONS.map((s) => (
    <button
      key={s.id}
      onClick={() => handleNavClick(s.id)}
      className={`px-3 py-2 rounded-full transition-colors text-sm font-medium ${
        active === s.id
          ? 'bg-indigo-600 text-white dark:bg-indigo-500'
          : 'text-slate-700 hover:bg-slate-200/70 dark:text-slate-200 dark:hover:bg-slate-700/60'
      }`}
    >
      {s.label}
    </button>
  )), [active]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-teal-400" style={{ width: `${progress}%` }} />

      <nav className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/50 border-b border-white/20 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-teal-400 animate-pulse" />
              <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">John Doe</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {links}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#resume"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-sm font-medium shadow hover:shadow-lg transition-shadow"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <button
                onClick={() => setDark((d) => !d)}
                className="p-2 rounded-full bg-white/70 dark:bg-slate-800/70 border border-white/20 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                className="md:hidden p-2 rounded-full bg-white/70 dark:bg-slate-800/70 border border-white/20 dark:border-slate-700"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className={`w-full text-left px-3 py-3 rounded-xl border transition-colors ${
                  active === s.id
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white/70 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border-white/20 dark:border-slate-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

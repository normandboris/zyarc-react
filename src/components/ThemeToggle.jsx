import { useTheme } from '../context/ThemeContext';

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5z" />
    </svg>
  );
}

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group flex items-center gap-2 rounded-full border-2 border-gold bg-dark2
                  px-2 py-1.5 cursor-pointer transition-all duration-300 flex-shrink-0
                  hover:border-gold2 hover:bg-dark3 hover:shadow-gold-btn ${className}`}
    >
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300
                    ${isDark ? 'bg-gold text-[#111]' : 'bg-dark3 text-gold border border-goldline'}`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
      <span className="hidden lg:inline text-xs font-bold uppercase tracking-wider text-gold pr-1">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

import { useTheme } from '../context/ThemeContext';

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5z" />
    </svg>
  );
}

export default function ThemeToggle({ className = '', showLabel = true }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gold-subtle
                  px-3 py-2 cursor-pointer transition-all duration-300 flex-shrink-0
                  hover:border-gold2 hover:shadow-gold-btn text-gold font-bold text-xs uppercase
                  tracking-wide ${className}`}
    >
      <span className="w-6 h-6 rounded-full bg-gold text-[#111] flex items-center justify-center flex-shrink-0">
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
      {showLabel && (
        <span className="whitespace-nowrap">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}

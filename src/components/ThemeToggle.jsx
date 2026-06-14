import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative w-11 h-6 rounded-full border border-goldline bg-dark3 cursor-pointer
                  transition-colors duration-300 flex-shrink-0 ${className}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-gold shadow-sm
                    flex items-center justify-center text-[0.55rem] text-[#111]
                    transition-transform duration-300 ${isDark ? 'translate-x-5' : 'translate-x-0'}`}
      >
        <i className={`fa ${isDark ? 'fa-moon-o' : 'fa-sun-o'}`} aria-hidden="true" />
      </span>
    </button>
  );
}

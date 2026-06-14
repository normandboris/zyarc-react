import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-subtle px-[5%] pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <div>
          <span className="font-display text-2xl font-bold text-cream block mb-2 tracking-tight">ZyArc</span>
          <p className="text-sm text-subtle leading-relaxed">
            We serve the finest fast food crafted with love and the freshest ingredients.
          </p>
          <div className="flex gap-3 mt-4">
            {[['fa-facebook', 'https://facebook.com'], ['fa-twitter', 'https://twitter.com'], ['fa-instagram', 'https://instagram.com']].map(([icon, href]) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={icon.replace('fa-', '')}
                className="w-9 h-9 rounded-full bg-dark3 border border-light
                           flex items-center justify-center text-subtle text-sm
                           hover:text-gold hover:border-gold-strong hover:bg-gold-subtle transition-all no-underline"
              >
                <i className={`fa ${icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream text-base mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 list-none">
            {[['/', 'Home'], ['/menu', 'Menu'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-subtle hover:text-gold no-underline transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream text-base mb-4">Business Hours</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li className="flex justify-between text-sm text-subtle">
              <span>Mon – Thu</span><span className="text-gold">10am – 10pm</span>
            </li>
            <li className="flex justify-between text-sm text-subtle">
              <span>Fri – Sat</span><span className="text-gold">10am – 12am</span>
            </li>
            <li className="flex justify-between text-sm text-subtle">
              <span>Sunday</span><span className="text-gold">11am – 9pm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-light pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-dim">
        <span>© {new Date().getFullYear()} ZyArc. All rights reserved.</span>
        <ThemeToggle />
        <span>Made with ❤️ in React + Tailwind</span>
      </div>
    </footer>
  );
}

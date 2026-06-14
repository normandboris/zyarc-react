import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-widest pb-0.5 border-b-2 transition-all duration-200 no-underline whitespace-nowrap ${
      isActive
        ? 'text-gold border-gold'
        : 'text-muted border-transparent hover:text-gold hover:border-gold'
    }`;

  const navLinks = [
    ['/', 'Home'],
    ['/menu', 'Menu'],
    ['/gallery', 'Gallery'],
    ['/about', 'About'],
    ['/contact', 'Contact'],
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[999] px-[5%] h-[68px]
                   bg-nav backdrop-blur-md border-b border-goldline transition-colors duration-300
                   grid grid-cols-[auto_1fr_auto] items-center gap-3 min-w-0"
        aria-label="Main navigation"
      >
        {/* Left: logo + theme (always visible) */}
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/" aria-label="ZyArc Home" className="flex-shrink-0">
            <Logo />
          </Link>
          <ThemeToggle showLabel={false} className="!px-2 !py-1.5 sm:!px-3 sm:!py-2" />
        </div>

        {/* Center: desktop nav */}
        <ul className="hidden lg:flex gap-5 xl:gap-8 list-none items-center justify-center min-w-0 overflow-hidden">
          {navLinks.map(([to, label]) => (
            <li key={to} className="flex-shrink-0">
              <NavLink to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: cart + order + mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3 justify-end flex-shrink-0">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-muted hover:text-gold transition-colors text-lg bg-transparent border-none cursor-pointer flex items-center"
            aria-label={`Shopping cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
          >
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-gold text-[#111] text-[0.6rem] font-black
                           w-[18px] h-[18px] rounded-full flex items-center justify-center
                           border-2 border-dark animate-badgePop"
              >
                {totalItems}
              </span>
            )}
          </button>

          <Link
            to="/menu"
            className="hidden sm:inline-block bg-gold hover:bg-gold2 text-[#111] font-bold
                        py-2.5 px-4 lg:py-3 lg:px-6 rounded-full text-xs lg:text-sm transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-gold-btn no-underline whitespace-nowrap"
          >
            Order Online
          </Link>

          <button
            className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 flex-shrink-0"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-[26px] h-[2px] rounded transition-all duration-300 bg-[var(--hamburger)] ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[26px] h-[2px] rounded transition-all duration-300 bg-[var(--hamburger)] ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[26px] h-[2px] rounded transition-all duration-300 bg-[var(--hamburger)] ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[68px] bg-black/50 z-[997] lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed top-[68px] left-0 w-full bg-nav-mobile z-[998]
                        px-[5%] py-6 border-b border-goldline lg:hidden animate-fadeIn transition-colors duration-300"
          >
            <div className="flex items-center justify-between py-3 mb-2 border-b border-light">
              <span className="text-sm font-semibold text-subtle uppercase tracking-widest">Theme</span>
              <ThemeToggle />
            </div>
            {navLinks.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-lg font-bold border-b border-light no-underline ${isActive ? 'text-gold' : 'text-muted hover:text-gold'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/menu"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center bg-gold hover:bg-gold2 text-[#111] font-bold py-3 px-6
                         rounded-full text-sm no-underline transition-all"
            >
              Order Online
            </Link>
          </div>
        </>
      )}
    </>
  );
}

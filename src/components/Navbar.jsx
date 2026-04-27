import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from './Logo';

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-widest pb-0.5 border-b-2 transition-all duration-200 no-underline ${
      isActive
        ? 'text-gold border-gold'
        : 'text-muted border-transparent hover:text-gold hover:border-gold'
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999] flex items-center justify-between px-[5%] h-[68px]
                      bg-[rgba(20,20,20,0.92)] backdrop-blur-md border-b border-[rgba(245,166,35,0.15)]">
        {/* Logo */}
        <Link to="/" aria-label="ZyArc Home">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {[['/', 'Home'], ['/menu', 'Menu'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={linkClass}>{label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-muted hover:text-gold transition-colors text-lg hidden md:block">
            <i className="fa fa-user" />
          </a>

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-muted hover:text-gold transition-colors text-lg bg-transparent border-none cursor-pointer flex items-center"
            aria-label="Shopping Cart"
          >
            <i className="fa fa-shopping-cart" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-[#111] text-[0.6rem] font-black
                               w-[18px] h-[18px] rounded-full flex items-center justify-center
                               border-2 border-dark animate-badgePop">
                {totalItems}
              </span>
            )}
          </button>

          <a href="#" className="text-muted hover:text-gold transition-colors text-lg hidden md:block">
            <i className="fa fa-search" />
          </a>

          <Link to="/menu" className="hidden md:inline-block bg-gold hover:bg-gold2 text-[#111] font-bold
                                      py-3 px-6 rounded-full text-sm transition-all duration-200
                                      hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)] no-underline">
            Order Online
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[26px] h-[2px] bg-cream rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[26px] h-[2px] bg-cream rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[26px] h-[2px] bg-cream rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[68px] left-0 w-full bg-[rgba(20,20,20,0.97)] z-[998]
                        px-[5%] py-6 border-b border-[rgba(245,166,35,0.2)] md:hidden">
          {[['/', 'Home'], ['/menu', 'Menu'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-lg font-bold border-b border-[rgba(255,255,255,0.06)] no-underline ${isActive ? 'text-gold' : 'text-muted hover:text-gold'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

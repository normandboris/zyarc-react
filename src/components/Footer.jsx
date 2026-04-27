import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[rgba(255,255,255,0.05)] px-[5%] pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Brand */}
        <div>
          <span className="font-script text-3xl text-cream block mb-2">ZyArc</span>
          <p className="text-sm text-[#7a7672] leading-relaxed">
            We serve the finest fast food crafted with love and the freshest ingredients.
          </p>
          <div className="flex gap-3 mt-4">
            {[['fa-facebook','https://facebook.com'], ['fa-twitter','https://twitter.com'], ['fa-instagram','https://instagram.com']].map(([icon, href]) => (
              <a key={icon} href={href} target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-full bg-dark3 border border-[rgba(255,255,255,0.07)]
                            flex items-center justify-center text-[#7a7672] text-sm
                            hover:text-gold hover:border-[rgba(245,166,35,0.4)] hover:bg-[rgba(245,166,35,0.08)] transition-all no-underline">
                <i className={`fa ${icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-cream text-base mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 list-none">
            {[['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-[#7a7672] hover:text-gold no-underline transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-cream text-base mb-4">Business Hours</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li className="flex justify-between text-sm text-[#7a7672]">
              <span>Mon – Thu</span><span className="text-gold">10am – 10pm</span>
            </li>
            <li className="flex justify-between text-sm text-[#7a7672]">
              <span>Fri – Sat</span><span className="text-gold">10am – 12am</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(255,255,255,0.06)] pt-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#4a4744]">
        <span>© {new Date().getFullYear()} ZyArc. All rights reserved.</span>
        <span>Made with ❤️ in React + Tailwind</span>
      </div>
    </footer>
  );
}

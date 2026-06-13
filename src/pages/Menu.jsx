import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import PageHero from '../components/PageHero';
import { fallbackMenu } from '../data/fallbackMenu';

const tabs = [
  { key: 'all', label: 'All Items' },
  { key: 'burgers', label: 'Burgers' },
  { key: 'sides', label: 'Sides' },
  { key: 'drinks', label: 'Drinks' },
];

function MenuSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-dark2 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)] animate-pulse">
          <div className="w-full h-[190px] bg-dark3" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-dark3 rounded w-3/4" />
            <div className="h-3 bg-dark3 rounded w-full" />
            <div className="h-3 bg-dark3 rounded w-2/3" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 bg-dark3 rounded w-16" />
              <div className="w-9 h-9 bg-dark3 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const [added, setAdded] = useState({});
  const { addToCart, setIsOpen } = useCart();

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        setMenuItems(fallbackMenu);
        setUsingFallback(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${apiUrl}/menu`);
        if (!response.ok) throw new Error('Failed to fetch menu items');
        const data = await response.json();
        setMenuItems(data.length ? data : fallbackMenu);
        setUsingFallback(!data.length);
      } catch {
        setMenuItems(fallbackMenu);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const filtered = menuItems.filter(
    i => activeTab === 'all' || (i.category && i.category.toLowerCase() === activeTab)
  );

  const handleAdd = (item) => {
    addToCart(item.name, item.price, item.image);
    setAdded(p => ({ ...p, [item.name]: true }));
    setIsOpen(true);
    setTimeout(() => setAdded(p => ({ ...p, [item.name]: false })), 900);
  };

  return (
    <main>
      <PageHero eyebrow="Explore Our" title="Full Menu" />

      <section className="px-[5%] py-16 bg-dark">
        {usingFallback && !loading && (
          <p className="text-center text-sm text-[#7a7672] mb-8 px-4 py-3 rounded-lg
                        bg-dark2 border border-[rgba(255,255,255,0.05)] max-w-xl mx-auto">
            Showing our signature menu — live updates will appear when the kitchen is connected.
          </p>
        )}

        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-6 py-2 rounded-full border-2 text-sm font-bold cursor-pointer transition-all duration-200
                ${activeTab === t.key
                  ? 'bg-gold text-[#111] border-gold'
                  : 'bg-transparent text-muted border-[rgba(245,166,35,0.3)] hover:bg-gold hover:text-[#111] hover:border-gold'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading ? (
          <MenuSkeleton />
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-xl text-cream mb-2">No items in this category</p>
            <p className="text-sm text-[#7a7672]">Try another tab or check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(item => (
              <div
                key={item._id}
                className="bg-dark2 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]
                           transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                           animate-fadeIn"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-[190px] object-cover object-center block bg-dark3"
                />
                <div className="p-5">
                  <h3 className="font-display text-cream text-lg mb-1">{item.name}</h3>
                  <p className="text-xs text-[#7a7672] mb-4 leading-relaxed line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gold">${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`w-9 h-9 rounded-full border flex items-center justify-center text-xl font-light
                                  transition-all duration-300 cursor-pointer
                                  ${added[item.name]
                                    ? 'bg-gold text-[#111] border-gold scale-110'
                                    : 'bg-[rgba(245,166,35,0.1)] text-gold border-gold hover:bg-gold hover:text-[#111] hover:scale-110'}`}
                      title={`Add ${item.name} to cart`}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      {added[item.name] ? '✓' : '+'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

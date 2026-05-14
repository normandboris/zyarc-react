import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

// Updated to match the categories seeded in your MongoDB database
const tabs = [
  { key: 'all', label: 'All Items' },
  { key: 'burgers', label: 'Burgers' },
  { key: 'sides', label: 'Sides' },
  { key: 'drinks', label: 'Drinks' },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const [added, setAdded] = useState({});
  const { addToCart } = useCart();

  // NEW: State for our backend data
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // NEW: Fetch live menu from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/menu`);
        if (!response.ok) throw new Error('Failed to fetch menu items');
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Filter based on the backend 'category' field (lowercased to match our keys)
  const filtered = menuItems.filter(i => 
    activeTab === 'all' || (i.category && i.category.toLowerCase() === activeTab)
  );

  const handleAdd = (item) => {
    // Note: Passed item.image since our backend uses 'image' instead of 'img'
    addToCart(item.name, item.price, item.image);
    setAdded(p => ({ ...p, [item.name]: true }));
    setTimeout(() => setAdded(p => ({ ...p, [item.name]: false })), 900);
  };

  if (loading) return <div className="h-screen bg-dark flex items-center justify-center text-2xl text-cream">Loading Live Menu...</div>;
  if (error) return <div className="h-screen bg-dark flex items-center justify-center text-xl text-red-500">Error: {error}</div>;

  return (
    <main>
      {/* Page hero */}
      <div className="h-[320px] bg-gradient-to-br from-[#0e0e0e] to-dark2 flex flex-col items-center
                      justify-center pt-[68px] text-center relative page-hero-line">
        <span className="font-script text-2xl text-gold block mb-1">Explore Our</span>
        <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-cream">Full Menu</h1>
      </div>

      <section className="px-[5%] py-16 bg-dark">
        {/* Tabs */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div key={item._id}
                 className="bg-dark2 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]
                            transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                            animate-fadeIn">
              <img
                src={item.image} 
                alt={item.name}
                className="w-full h-[190px] object-cover object-center block bg-dark3"
              />
              <div className="p-5">
                <h3 className="font-display text-cream text-lg mb-1">{item.name}</h3>
                <p className="text-xs text-[#7a7672] mb-4 leading-relaxed">{item.description}</p> 
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
                  >
                    {added[item.name] ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
import { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: 'bg-[rgba(245,166,35,0.15)] border-[rgba(245,166,35,0.4)] text-gold',
    error: 'bg-[rgba(224,82,82,0.12)] border-[rgba(224,82,82,0.35)] text-[#f08080]',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[1200] px-6 py-3 rounded-full border
                  text-sm font-bold shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-fadeIn
                  max-w-[90vw] text-center ${styles[type]}`}
    >
      {message}
    </div>
  );
}

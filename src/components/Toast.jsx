import { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: 'bg-gold-subtle border-gold-strong text-gold',
    error: 'bg-error-subtle border-error text-[var(--error)]',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[1200] px-6 py-3 rounded-full border
                  text-sm font-bold shadow-card-hover animate-fadeIn
                  max-w-[90vw] text-center ${styles[type]}`}
    >
      {message}
    </div>
  );
}

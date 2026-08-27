import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed right-6 bottom-24 z-50 flex items-center gap-3 rounded-lg border border-brand-border bg-brand-green px-5 py-3 text-brand-cream shadow-lg">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold text-brand-green">
        ✓
      </span>

      <p className="font-medium">{message}</p>

      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-xl text-brand-cream hover:text-brand-gold"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;

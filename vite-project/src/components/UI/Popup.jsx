import React, { useEffect, useState } from 'react';

export default function Popup({ isOpen, onClose, children }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 200); // match animation duration

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-30">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${
          isOpen ? 'overlay-show' : 'overlay-hide'
        }`}
        onClick={onClose}
      />

      {/* Content */}
      <div className="w-full h-screen flex items-center justify-center">
        <div
          className={`bg-white rounded-xl w-auto max-h-[85vh] overflow-y-auto p-6 ${
            isOpen ? 'popup-open' : 'popup-close'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
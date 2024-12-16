// src/components/layout/NavMenu.jsx
"use client";
import { useState, useEffect, useRef } from 'react';

export default function NavMenu({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className={`cursor-pointer ${isOpen ? 'border-b-[1px] border-primary-600' : ''}`}
      >
        {trigger}
      </div>
      {isOpen && (
        <div className="fixed left-0 right-0 z-50 bg-white shadow-lg animate-fadeIn" style={{ top: '76px' }}>
          <div className="mx-auto max-w-7xl pt-8 pb-20">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
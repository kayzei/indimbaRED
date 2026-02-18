import React from 'react';
import { NAVBAR_LEFT_ITEMS, NAVBAR_RIGHT_ITEMS } from '../constants';
import Dropdown from './Dropdown';
import { MenuIcon } from './Icons';
import type { MenuItem } from '../types';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const renderMenuItem = (item: MenuItem) => {
    if (item.subMenus) {
      return <Dropdown key={item.name} item={item} />;
    }
    return (
      <a
        key={item.name}
        href={item.href}
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-red transition-colors duration-200"
      >
        {item.name}
        {item.isIcon && item.icon}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVBAR_LEFT_ITEMS.map(renderMenuItem)}
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="/">
              <img src="/logo-full.png" alt="Indimba Logo" className="h-9 lg:h-10" />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAVBAR_RIGHT_ITEMS.map(renderMenuItem)}
          </nav>

          {/* Spacer for mobile view to balance the hamburger icon */}
          <div className="lg:hidden w-6 h-6"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { SIDEBAR_MENU_ITEMS } from '../constants';
import { CloseIcon, ChevronDownIcon } from './Icons';
import type { MenuItem } from '../types';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isSubMenuOpen, setSubMenuOpen] = React.useState(false);

  const hasSubMenu = item.subMenus && item.subMenus.length > 0 && item.subMenus[0].items.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    if (hasSubMenu) {
      e.preventDefault();
      setSubMenuOpen(!isSubMenuOpen);
    }
  };

  return (
    <li>
      <a
        href={item.href}
        onClick={handleToggle}
        className="flex justify-between items-center py-3 px-4 text-lg font-medium text-gray-300 hover:bg-gray-900 rounded-md transition-all duration-200"
      >
        <span className="flex items-center gap-3">
          {item.isIcon && item.icon}
          {item.name}
        </span>
        {hasSubMenu && <ChevronDownIcon className={`transform transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`} />}
      </a>
      {hasSubMenu && isSubMenuOpen && (
        <ul className="pl-8 mt-2 space-y-2">
          {item.subMenus?.[0].items.map(subItem => (
            <li key={subItem.name}>
              <a href={subItem.href} className="block py-2 text-gray-400 hover:text-brand-red transition-colors duration-200">
                {subItem.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800 h-20">
          <a href="/">
            <img src="/logo-full.png" alt="Indimba Logo" className="h-9" />
          </a>
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {SIDEBAR_MENU_ITEMS.map((item) => (
              <SidebarMenuItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
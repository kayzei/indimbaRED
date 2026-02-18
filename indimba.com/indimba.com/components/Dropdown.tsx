import React, { useState } from 'react';
import type { MenuItem } from '../types';
import { ChevronDownIcon } from './Icons';

interface DropdownProps {
  item: MenuItem;
}

const Dropdown: React.FC<DropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={item.href}
        className="flex items-center text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-red transition-colors duration-200"
      >
        {item.name}
        {item.subMenus && <ChevronDownIcon />}
      </a>
      {isOpen && item.subMenus && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[280px] bg-black border border-gray-800 rounded-md shadow-lg z-20 p-4 animate-fade-in-down">
          <div className="flex gap-6">
            {item.subMenus.map((subMenu) => (
              <div key={subMenu.title} className="flex-1">
                <h3 className="text-white font-bold text-md mb-3 border-b border-gray-700 pb-2">
                  {subMenu.title}
                </h3>
                <ul className="space-y-2">
                  {subMenu.items.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="block text-gray-400 hover:text-brand-red transition-colors duration-200 text-sm"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
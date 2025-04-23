import React from 'react';
import { HomeIcon, FolderIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

interface LeftMenuProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: HomeIcon, label: 'Home', href: '/' },
  { icon: FolderIcon, label: 'Folders', href: '/folders' },
  { icon: Cog6ToothIcon, label: 'Settings', href: '/settings' },
];

const LeftMenu: React.FC<LeftMenuProps> = ({ isExpanded, onToggle }) => {
  return (
    <div
      className={`bg-dark-surface h-full transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-sidebar-expanded' : 'w-sidebar'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-dark-border">
          <button
            onClick={onToggle}
            className="text-dark-text-secondary hover:text-dark-text transition-colors"
            aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isExpanded ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center p-2 rounded-lg hover:bg-dark-bg transition-colors"
                >
                  <item.icon className="w-6 h-6 text-dark-text-secondary" />
                  {isExpanded && (
                    <span className="ml-3 text-dark-text-secondary">
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu; 
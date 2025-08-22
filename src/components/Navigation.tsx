import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className="flex space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-orange-300 to-orange-500 text-black'
                : 'text-white hover:bg-gradient-to-r from-orange-300 to-orange-500 hover:text-black'
            }`
          }
        >
          {item.label}
        </NavLink>
        // <NavLink
        //   key={item.path}
        //   to={item.path}
        //   className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-white hover:bg-gradient-to-r from-orange-300 to-orange-500 hover:text-black"
        // >
        //   {item.label}
        // </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import logo from '../images/ayini-logo-white.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className=" fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-10" />  
            </div>
            <Navigation />
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
    </main>
      <Footer />
    </div>
  );
};

export default Layout;
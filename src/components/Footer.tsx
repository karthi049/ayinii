import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-20 md:gap-40">

          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">Ayini</h3>
            <p className="text-white">
              Building amazing experiences for our customers since 2020.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-white hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-white hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">Contact Info</h4>
            <div className="text-white space-y-2">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@mycompany.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white">
            © {new Date().getFullYear()} Ayini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
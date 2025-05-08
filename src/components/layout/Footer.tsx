
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pahacraft-beige-100 text-pahacraft-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Pahacraft</h3>
            <p className="text-sm text-pahacraft-800">
              Pahacraft is a marketplace for local artisans to showcase and sell their 
              handcrafted products, preserving traditional craftsmanship and supporting 
              local communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-pahacraft-600">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-pahacraft-600">Shop by Category</Link>
              </li>
              <li>
                <Link to="/seller/register" className="hover:text-pahacraft-600">Sell on Pahacraft</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pahacraft-600">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-pahacraft-600">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-pahacraft-600">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-pahacraft-600">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-pahacraft-600">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-pahacraft-800 hover:text-pahacraft-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-pahacraft-800 hover:text-pahacraft-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.808.06 1.064.05 1.79.218 2.427.465.66.25 1.22.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.427.047 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.05 1.064-.218 1.79-.465 2.427a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.427.465-1.024.047-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.05-1.79-.218-2.427-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.05-1.064.218-1.79.465-2.427a4.88 4.88 0 011.153-1.772A4.897 4.897 0 016.08 2.525c.637-.247 1.363-.415 2.427-.465 1.024-.047 1.379-.06 3.808-.06zm0 1.44c-2.136 0-2.39.01-3.233.048-.78.036-1.203.166-1.485.276-.374.145-.64.318-.92.598-.28.28-.453.546-.598.92-.11.282-.24.705-.276 1.485-.038.844-.048 1.097-.048 3.233s.01 2.39.048 3.233c.036.78.166 1.203.276 1.485.145.374.318.64.598.92.28.28.546.453.92.598.282.11.705.24 1.485.276.844.038 1.097.048 3.233.048s2.39-.01 3.233-.048c.78-.036 1.203-.166 1.485-.276.374-.145.64-.318.92-.598.28-.28.453-.546.598-.92.11-.282.24-.705.276-1.485.038-.844.048-1.097.048-3.233s-.01-2.39-.048-3.233c-.036-.78-.166-1.203-.276-1.485a2.47 2.47 0 00-.598-.92 2.464 2.464 0 00-.92-.598c-.282-.11-.705-.24-1.485-.276-.844-.038-1.097-.048-3.233-.048z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.315 6.29a4.105 4.105 0 100 8.21 4.105 4.105 0 000-8.21zm0 1.44a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334zM17.5 6.068a.96.96 0 11-1.92 0 .96.96 0 011.92 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-pahacraft-800 hover:text-pahacraft-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-pahacraft-beige-200 rounded-l-md focus:outline-none focus:ring-pahacraft-500 focus:border-pahacraft-500"
                />
                <button className="bg-pahacraft-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-pahacraft-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-pahacraft-beige-200 text-center text-sm text-pahacraft-800">
          <p>© {new Date().getFullYear()} Pahacraft. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-pahacraft-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-pahacraft-600">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-pahacraft-600">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

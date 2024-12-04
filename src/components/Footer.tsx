import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-dark-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo className="text-3xl" />
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/shift-request" className="text-gray-400 hover:text-white transition-colors">
                  Shift Request
                </Link>
              </li>
              <li>
                <Link to="/metrics" className="text-gray-400 hover:text-white transition-colors">
                  Metrics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/lumivirt"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4 [&>path]:stroke-[#66F2F1]" />
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Tools We Use</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://gusto.com" className="text-gray-400 hover:text-white transition-colors">
                  Gusto
                </a>
              </li>
              <li>
                <a href="https://www.deputy.com" className="text-gray-400 hover:text-white transition-colors">
                  Deputy
                </a>
              </li>
              <li>
                <a href="https://n8n.io" className="text-gray-400 hover:text-white transition-colors">
                  n8n
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Ready to learn more? Get in touch with our team.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lumivirt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-dark-900 py-4 px-4 sticky top-0 z-50 shadow-glow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo className="text-2xl" />
        </Link>
        <div className="flex gap-6">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/shift-request', label: 'Shift Request' },
            { path: '/metrics', label: 'Metrics' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors ${
                isActive(path) ? 'text-accent-cyan' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
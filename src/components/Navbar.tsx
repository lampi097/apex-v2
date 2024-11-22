import { Menu, X, Gamepad2, Users, Store, Home } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const isHome = location.pathname === '/';
    const targetId = path.replace('/#', '');

    if (!isHome) {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { path: '/#home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/games', label: 'Studio', icon: <Gamepad2 className="w-4 h-4" /> },
    { path: '/technology', label: 'About Us', icon: <Users className="w-4 h-4" /> },
    { path: '/#team', label: 'Team', icon: <Store className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-black/20 backdrop-blur-sm border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="block">
                <button className="relative h-10 w-[120px] overflow-hidden bg-white/90 rounded-full transition-all duration-300 hover:bg-white active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center">
                  <img 
                    src="/png/apex-logo.png" 
                    alt="Apex Game Studio" 
                    className="h-16 w-auto scale-150"
                  />
                </button>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const isLink = item.path.startsWith('/') && !item.path.includes('#');
                const Component = isLink ? Link : 'a';
                
                return (
                  <Component
                    key={item.path}
                    to={isLink ? item.path : undefined}
                    href={!isLink ? item.path : undefined}
                    onClick={!isLink ? (e) => handleNavigation(e, item.path) : undefined}
                    className="group relative px-4 py-2 power-up-hover"
                  >
                    <div className="relative z-10 flex items-center space-x-2">
                      {item.icon}
                      <span className="text-sm font-medium text-gray-300 group-hover:text-red-400 transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300 rounded"></div>
                  </Component>
                );
              })}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900/20 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm border-b border-red-900/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isLink = item.path.startsWith('/') && !item.path.includes('#');
              const Component = isLink ? Link : 'a';

              return (
                <Component
                  key={item.path}
                  to={isLink ? item.path : undefined}
                  href={!isLink ? item.path : undefined}
                  onClick={!isLink ? (e) => handleNavigation(e, item.path) : undefined}
                  className="group flex items-center space-x-3 px-3 py-2 power-up-hover"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-sm font-medium text-gray-300 group-hover:text-red-400 transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-red-500/50 to-transparent"></div>
      </div>
      <div className="fixed top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-500/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-red-500/50 to-transparent"></div>
      </div>
    </nav>
  );
}
import { NavLink } from 'react-router-dom';
import { Heart, MapPin, Calendar } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-pink-500" />
              <h1 className="font-bold text-xl text-gray-800">Паша & Катя</h1>
            </div>
            
            <nav className="flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`
                }
              >
                <Heart className="h-4 w-4" />
                <span>Главная</span>
              </NavLink>
              
              <NavLink
                to="/story"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`
                }
              >
                <span>История</span>
              </NavLink>
              
              <NavLink
                to="/details"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-pink-100 text-pink-700' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`
                }
              >
                <Calendar className="h-4 w-4" />
                <span>Детали</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-pink-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>30.08.2025 • Сова • 16:20</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            С любовью, Паша и Катя 💕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;